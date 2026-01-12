const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Workshop = require('../models/Workshop');
const Hackathon = require('../models/Hackathon');
const WeeklyActivity = require('../models/WeeklyActivity');

// Get events based on type
router.get('/', async (req, res) => {
    try {
        const { type } = req.query;
        let events = [];

        if (type === 'workshop') {
            events = await Workshop.find({});
        } else if (type === 'hackathon') {
            events = await Hackathon.find({});
        } else if (type === 'weekly-activity') {
            events = await WeeklyActivity.find({});
        } else {
            const w = await Workshop.find({});
            const h = await Hackathon.find({});
            const a = await WeeklyActivity.find({});
            events = [...w, ...h, ...a];
        }
        res.json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Register for hackathon (Internal)
router.post('/hackathons/:id/register', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;

        // Find by custom ID (like 'h1') or MongoDB _id, assuming custom ID here based on seeds
        const hackathon = await Hackathon.findOne({ id: id });
        if (!hackathon) {
            return res.status(404).json({ message: "Hackathon not found" });
        }

        hackathon.registrations.push({ name, email });
        await hackathon.save();

        res.json({ message: "Registered successfully", hackathon });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Seed data
// Seed data - DISABLED FOR SECURITY
router.post('/seed', async (req, res) => {
    return res.status(403).json({ message: "Seeding is disabled in production." });
    /*
    const workshopData = [
        // ... (data hidden for brevity)
    ];

    // ... (rest of the logic commented out)
    
    try {
        // Cleanup old collection if exists
        try {
            await mongoose.connection.db.dropCollection('events');
        } catch (e) {
            // Ignore
        }

        await Workshop.deleteMany({});
        await Hackathon.deleteMany({});
        await WeeklyActivity.deleteMany({});

        const createdWorkshops = await Workshop.insertMany(workshopData);
        const createdHackathons = await Hackathon.insertMany(hackathonData);
        const createdWeeklyActivities = await WeeklyActivity.insertMany(weeklyActivityData);

        res.json({
            workshops: createdWorkshops,
            hackathons: createdHackathons,
            weeklyActivities: createdWeeklyActivities
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    */
});

module.exports = router;
