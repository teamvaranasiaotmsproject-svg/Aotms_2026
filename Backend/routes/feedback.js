const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// Submit Feedback
router.post('/', async (req, res) => {
    try {
        const { name, email, category, role, message, rating } = req.body;
        const newFeedback = new Feedback({ name, email, category, role, message, rating });
        await newFeedback.save();
        res.json(newFeedback);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Get all feedbacks
router.get('/', async (req, res) => {
    try {
        const feedbacks = await Feedback.find().sort({ createdAt: -1 });
        res.json(feedbacks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Seed Feedbacks
router.post('/seed', async (req, res) => {
    const seedData = [
        { message: "The placement support at AOTMS is unparalleled. I was mentored by industry giants and landed a job at a top MNC within weeks of finishing the Full Stack course.", name: "Briana Patton", role: "Full Stack Developer", rating: 5 },
        { message: "The hands-on projects and mock interviews gave me the confidence to face tough technical rounds. Their curriculum is perfectly aligned with what the industry needs.", name: "Bilal Ahmed", role: "Cloud Engineer", rating: 4 },
        { message: "Transitioning to Data Science felt daunting, but the mentors here made it seamless. The lifetime career support ensures I always have a roadmap for my growth.", name: "Saman Malik", role: "Data Scientist", rating: 3 },
        { message: "They don't just teach code; they teach problem-solving and industry standards. The mock interviews were as real as the actual ones I faced at startups.", name: "Omar Raza", role: "QA Automation Engineer", rating: 5 },
        { message: "The resume building sessions were a game-changer. My profile started getting picked up by top tech firms almost immediately after the overhaul.", name: "Zainab Hussain", role: "UI/UX Designer", rating: 4 },
        { message: "If you're looking for a place that cares about your career as much as you do, AOTMS is it. The teachers are approachable and extremely knowledgeable.", name: "Aliza Khan", role: "Software Engineer", rating: 5 },
        { message: "Real-world projects are at the heart of their training. I built a full-scale enterprise app that became the star highlight of my portfolio.", name: "Farhan Siddiqui", role: "Software Architect", rating: 3 },
        { message: "The diversity of courses and the quality of instructors is amazing. I particularly loved the classroom management sessions for my teaching certification.", name: "Sana Sheikh", role: "Technical Trainer", rating: 4 },
        { message: "Excellent experience! The team understands the local job market in Vijayawada perfectly and bridges the gap to international standards.", name: "Hassan Ali", role: "DevOps Professional", rating: 5 },
    ].map(item => ({ ...item, email: "anonymous@example.com", category: "Course Content" }));

    try {
        await Feedback.deleteMany({});
        await Feedback.insertMany(seedData);
        res.json({ message: "Feedbacks seeded successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
