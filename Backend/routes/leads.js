const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');

// Create Lead
router.post('/', async (req, res) => {
    try {
        const { name, email, phone, course } = req.body;
        const newLead = new Lead({ name, email, phone, course });
        await newLead.save();
        res.json(newLead);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
