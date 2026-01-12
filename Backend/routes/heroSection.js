const express = require('express');
const router = express.Router();
const HeroSection = require('../models/HeroSection');

// @route   GET /api/hero
// @desc    Get all hero section images
// @access  Public
router.get('/', async (req, res) => {
    try {
        const heroImages = await HeroSection.find().sort({ order: 1 });
        res.json(heroImages);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST /api/hero
// @desc    Add a new hero image
// @access  Private (should be, but public for now as per project state)
router.post('/', async (req, res) => {
    try {
        const { imageUrl, title, subtitle, order } = req.body;
        const newHeroImage = new HeroSection({
            imageUrl,
            title,
            subtitle,
            order
        });
        const savedImage = await newHeroImage.save();
        res.json(savedImage);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST /api/hero/seed
// @desc    Seed initial data
router.post('/seed', async (req, res) => {
    try {
        await HeroSection.deleteMany({});

        // Using some placeholder images or the ones from the frontend if they were URLs. 
        // Since frontend has local assets, we might need to use placeholders or assume the user will input URLs.
        // I will use Unsplash placeholders similar to the theme.
        const seedData = [
            {
                imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop",
                order: 1,
                title: "Hackathon 2024"
            },
            {
                imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop",
                order: 2,
                title: "Workshop Session"
            },
            {
                imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop",
                order: 3,
                title: "Team Collaboration"
            }
        ];

        await HeroSection.insertMany(seedData);
        res.json({ msg: "Hero Section Seeded" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
