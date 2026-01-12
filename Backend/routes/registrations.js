const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');

// Register for event
router.post('/', async (req, res) => {
    try {
        const { name, email, eventName, eventType, userId } = req.body;

        // Optional: Check if already registered
        // const exists = await Registration.findOne({ email, eventName });
        // if (exists) return res.status(400).json({ msg: 'Already registered' });

        const newReg = new Registration({ name, email, eventName, eventType, userId });
        await newReg.save();
        res.json(newReg);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
