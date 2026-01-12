const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// Get all courses
router.get('/', async (req, res) => {
    try {
        const courses = await Course.find({}).sort({ id: 1 });
        res.json(courses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get single course by slug
router.get('/:slug', async (req, res) => {
    try {
        const course = await Course.findOne({ slug: req.params.slug });
        if (!course) return res.status(404).json({ message: 'Course not found' });
        res.json(course);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Seed Courses (Internal/Admin use)
// Seed Courses (Internal/Admin use) - PROTECTED/DISABLED
// router.post('/seed', async (req, res) => {
//     try {
//         // coursesData needs to be imported if enabled
//         // await Course.deleteMany({});
//         // await Course.insertMany(coursesData);
//         res.json({ message: "Seeding disabled for security." });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

module.exports = router;
