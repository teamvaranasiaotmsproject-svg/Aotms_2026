const express = require('express');
const router = express.Router();
const HackathonWinner = require('../models/HackathonWinner');

// Get all winners
router.get('/', async (req, res) => {
    try {
        const winners = await HackathonWinner.find();
        res.json(winners);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Seed winners
router.post('/seed', async (req, res) => {
    const dummyWinners = [
        {
            eventId: "h1",
            eventName: "Global UI/UX Design Hackathon",
            winners: [
                {
                    rank: 1,
                    teamName: "Pixel Pioneers",
                    collegeName: "MIT Institute of Design",
                    members: ["Alice", "Bob"],
                    prize: "$1000",
                    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=60"
                },
                {
                    rank: 2,
                    teamName: "Design Dynamos",
                    collegeName: "National Institute of Design",
                    members: ["Charlie", "Diana"],
                    prize: "$500",
                    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60"
                },
                {
                    rank: 3,
                    teamName: "Creative Coders",
                    collegeName: "IIT Bombay",
                    members: ["Eve", "Frank"],
                    prize: "$250",
                    imageUrl: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=500&auto=format&fit=crop&q=60"
                }
            ]
        },
        {
            eventId: "h2",
            eventName: "Full-Stack Innovation Hack",
            winners: [
                {
                    rank: 1,
                    teamName: "Code Crusaders",
                    collegeName: "IIT Delhi",
                    members: ["Rohan", "Suresh", "Priya"],
                    prize: "$1500",
                    imageUrl: "https://images.unsplash.com/photo-1504384308090-c54be3855833?w=500&auto=format&fit=crop&q=60"
                },
                {
                    rank: 2,
                    teamName: "MERN Stack Masters",
                    collegeName: "BITS Pilani",
                    members: ["Ananya", "Vikram"],
                    prize: "$750",
                    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=60"
                }
            ]
        },
        {
            eventId: "h3",
            eventName: "AI-Powered Product Sprint",
            winners: [
                {
                    rank: 1,
                    teamName: "Neural Networks",
                    collegeName: "IIIT Hyderabad",
                    members: ["Kavya", "Arjun"],
                    prize: "$2000",
                    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60"
                }
            ]
        }
    ];

    try {
        await HackathonWinner.deleteMany({});
        const newWinners = await HackathonWinner.insertMany(dummyWinners);
        res.json(newWinners);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
