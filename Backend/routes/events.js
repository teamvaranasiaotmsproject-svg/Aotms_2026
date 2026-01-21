const express = require('express');
const router = express.Router();
const Workshop = require('../models/Workshop');
const Hackathon = require('../models/Hackathon');
const WeeklyActivity = require('../models/WeeklyActivity');

// Get events based on type
// Get events based on type
router.get('/', async (req, res) => {
    try {
        const { type, all } = req.query;
        const now = new Date();

        // Base query: If 'all' is not true, only show future/ongoing events
        const dateFilter = (all === 'true') ? {} : {
            $or: [
                { endDate: { $gte: now } },
                { startDate: { $gte: now } },
                // Fallback for events with missing date fields if needed, 
                // but strict filtering relies on these fields being present.
            ]
        };

        const sortOptions = { startDate: 1 }; // Closest events first

        let events = [];

        if (type === 'workshop') {
            events = await Workshop.find(dateFilter).sort(sortOptions).lean();
        } else if (type === 'hackathon') {
            events = await Hackathon.find(dateFilter).sort(sortOptions).lean();
        } else if (type === 'event' || type === 'weekly-activity') {
            events = await WeeklyActivity.find(dateFilter).sort(sortOptions).lean();
        } else {
            // Fetch all types and merge
            const [w, h, a] = await Promise.all([
                Workshop.find(dateFilter).sort(sortOptions).lean(),
                Hackathon.find(dateFilter).sort(sortOptions).lean(),
                WeeklyActivity.find(dateFilter).sort(sortOptions).lean()
            ]);

            // Merge and re-sort since independent DB sorts won't apply to the merged array
            events = [...w, ...h, ...a].sort((a, b) => {
                const dateA = new Date(a.startDate || a.date);
                const dateB = new Date(b.startDate || b.date);
                return dateA - dateB;
            });
        }

        // Post-processing to add computed status fields
        const processedEvents = events.map(event => {
            const isStatusOpen = event.registrationStatus === 'OPEN';
            const endDate = event.endDate ? new Date(event.endDate) : null;
            // Flexible: Open if explicitly OPEN status AND (no endDate set OR endDate is in future)
            const isDateValid = !endDate || endDate >= now;

            return {
                ...event,
                isRegistrationOpen: isStatusOpen && isDateValid,
                isCompleted: endDate && endDate < now
            };
        });

        res.json(processedEvents);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
