const express = require('express');
const router = express.Router();
const AcademyDifference = require('../models/AcademyDifference');

// @route   GET /api/academy-difference
// @desc    Get all Academy Difference items
// @access  Public
router.get('/', async (req, res) => {
    try {
        // Sort by order or just return all
        const items = await AcademyDifference.find().sort({ order: 1 });
        res.json(items);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST /api/academy-difference
// @desc    Add a new Academy Difference item
// @access  Public (should be protected in production)
router.post('/', async (req, res) => {
    const { title, description, image, order } = req.body;

    try {
        const newItem = new AcademyDifference({
            title,
            description,
            image,
            order
        });

        const item = await newItem.save();
        res.json(item);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST /api/academy-difference/seed
// @desc    Seed the database with initial data if empty
// @access  Public
router.post('/seed', async (req, res) => {
    try {
        const count = await AcademyDifference.countDocuments();
        if (count > 0) {
            return res.status(400).json({ msg: 'Database already has data' });
        }

        const initialData = [
            {
                title: "Our Mission",
                description: "Empowering students with real-world IT skills and expert mentorship to bridge the gap between academics and industry.",
                image: "/Why Choose us-1.jpg",
                order: 1
            },
            {
                title: "Our Vision",
                description: "To become the most trusted IT training institute by transforming passionate learners into job-ready tech leaders.",
                image: "/Why Choose us-2.jpg",
                order: 2
            },
            {
                title: "Why Choose Us",
                description: "Cutting-edge courses, flexible learning, and 100% placement-focused support—all in one place.",
                image: "/Why Choose us-3.jpg",
                order: 3
            },
        ];

        await AcademyDifference.insertMany(initialData);
        res.json({ msg: 'Data seeded successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


module.exports = router;
