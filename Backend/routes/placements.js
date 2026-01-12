const express = require('express');
const router = express.Router();
const Placement = require('../models/Placement');

// Get all student placements
router.get('/students', async (req, res) => {
    try {
        const placements = await Placement.find({ type: 'student' });
        res.json(placements);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get all detailed placements
router.get('/detailed', async (req, res) => {
    try {
        const placements = await Placement.find({ type: 'detailed' });
        res.json(placements);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Seed Placements
router.post('/seed', async (req, res) => {
    const studentPlacementsData = [
        {
            type: 'student',
            id: 1,
            name: "Sangeetha Detne",
            jobTitle: "Big Data Developer",
            companies: ["Cigniti"],
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
        },
        {
            type: 'student',
            id: 2,
            name: "Rahul Verma",
            jobTitle: "Cloud Architect",
            companies: ["AWS"],
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
        },
        {
            type: 'student',
            id: 3,
            name: "Priya Sharma",
            jobTitle: "Full Stack Developer",
            companies: ["Microsoft"],
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
        },
        {
            type: 'student',
            id: 4,
            name: "Arjun Reddy",
            jobTitle: "DevOps Engineer",
            companies: ["TCS"],
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
        },
        // Adding the ones from Placements.tsx just in case, merging logic manually
        {
            type: 'student',
            name: "Sravani Pilli",
            jobTitle: "Java Full Stack Developer",
            companies: ["TCS", "USAA"],
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80" // Placeholder from unsplash for consistency
        },
        {
            type: 'student',
            name: "Bharathy Govindaswamy",
            jobTitle: "Hadoop Developer",
            companies: ["Cognizant", "TIAA"],
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80"
        },
        {
            type: 'student',
            name: "Nimitha Srireddy",
            jobTitle: "Java Developer",
            companies: ["Tekmark", "AT&T"],
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
        },
        {
            type: 'student',
            name: "Jayaprakash Navaneedha Krishnan",
            jobTitle: "Java Full Stack Developer",
            companies: ["Wipro", "HP"],
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80"
        },
        {
            type: 'student',
            name: "Hima Bindu Ande",
            jobTitle: "Java Full Stack Developer",
            companies: ["Cognizant", "Amex"],
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80"
        }
    ];

    const detailedPlacementsData = [
        {
            type: 'detailed',
            id: 1,
            consultantName: "Sangeetha D.",
            jobTitle: "Big Data Developer",
            client: "Walmart Global Tech",
            startDate: "2024-01-15",
            duration: "Full Time",
            location: "Bangalore",
            salary: "24 LPA",
        },
        {
            type: 'detailed',
            id: 2,
            consultantName: "Rahul V.",
            jobTitle: "Cloud Solutions Architect",
            client: "Amazon Web Services",
            startDate: "2024-02-01",
            duration: "Full Time",
            location: "Hyderabad",
            salary: "32 LPA",
        },
        {
            type: 'detailed',
            id: 3,
            consultantName: "Priya S.",
            jobTitle: "Sr. React Developer",
            client: "Microsoft R&D",
            startDate: "2024-03-10",
            duration: "Full Time",
            location: "Hyderabad",
            salary: "28 LPA",
        },
        {
            type: 'detailed',
            id: 4,
            consultantName: "Arjun R.",
            jobTitle: "DevOps Engineer",
            client: "Tata Consultancy Services",
            startDate: "2024-01-20",
            duration: "Full Time",
            location: "Pune",
            salary: "14 LPA",
        },
        {
            type: 'detailed',
            id: 5,
            consultantName: "Karthik N.",
            jobTitle: "Data Scientist",
            client: "Flipkart",
            startDate: "2024-04-05",
            duration: "Full Time",
            location: "Bangalore",
            salary: "22 LPA",
        },
        {
            type: 'detailed',
            id: 6,
            consultantName: "Ananya M.",
            jobTitle: "UI/UX Designer",
            client: "Swiggy",
            startDate: "2024-03-15",
            duration: "Full Time",
            location: "Bangalore",
            salary: "16 LPA",
        },
        {
            type: 'detailed',
            id: 7,
            consultantName: "Vikram S.",
            jobTitle: "Java Backend Lead",
            client: "Oracle",
            startDate: "2024-02-28",
            duration: "Full Time",
            location: "Hyderabad",
            salary: "26 LPA",
        },
        {
            type: 'detailed',
            id: 8,
            consultantName: "Neha G.",
            jobTitle: "QA Automation Lead",
            client: "Salesforce",
            startDate: "2024-04-12",
            duration: "Full Time",
            location: "Remote",
            salary: "20 LPA",
        }
    ];

    try {
        await Placement.deleteMany({});
        await Placement.insertMany([...studentPlacementsData, ...detailedPlacementsData]);
        res.json({ message: 'Placements seeded successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
