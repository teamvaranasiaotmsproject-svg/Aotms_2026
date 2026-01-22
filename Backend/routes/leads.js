const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');
const Workshop = require('../models/Workshop');
const Hackathon = require('../models/Hackathon');
const WeeklyActivity = require('../models/WeeklyActivity');

// @route   GET api/leads
// @desc    Get all leads
// @access  Public (Should be private in production)
router.get('/', async (req, res) => {
    try {
        const leads = await Lead.find().sort({ createdAt: -1 });
        res.json(leads);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

const verifyRecaptcha = require('../utils/recaptcha');

// Create Lead
router.post('/', async (req, res) => {
    try {
        const { name, email, phone, course, event, type, recaptchaToken } = req.body;

        // Verify Recaptcha (Optional for now)
        if (recaptchaToken) {
            const recaptchaResult = await verifyRecaptcha(recaptchaToken);
            if (!recaptchaResult.success) {
                return res.status(400).json({ message: recaptchaResult.message });
            }
        }

        // Validation for event registration
        if (type === 'event-registration') {
            return res.status(403).json({ message: 'Event registration is disabled.' });
        }

        const newLead = new Lead({
            name,
            email,
            phone,
            course: course || event || 'General Inquiry'
        });
        await newLead.save();
        res.json(newLead);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
