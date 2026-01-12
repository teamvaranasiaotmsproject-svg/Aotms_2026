const mongoose = require('mongoose');

const hackathonSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    tagline: { type: String },
    mode: { type: String, enum: ['Online', 'Offline'], required: true },
    date: { type: String, required: true },
    duration: { type: String, required: true },
    bannerUrl: { type: String },
    thumbnailUrl: { type: String },
    logoUrl: { type: String },
    description: { type: String, required: true },
    eligibility: { type: String },
    teamSize: { type: String },
    level: { type: String },
    whatYouWillLearn: [{ type: String }],
    themes: [{ type: String }],
    rewards: [{ type: String }],
    importantDates: [{
        event: { type: String },
        date: { type: String }
    }],
    registrationLink: { type: String },
    buttonText: { type: String, default: "Register Now" },
    actionButtonText: { type: String, default: "Action Winners" },
    registrations: [{
        name: { type: String },
        email: { type: String },
        createdAt: { type: Date, default: Date.now }
    }],
    type: { type: String, default: 'hackathon' }
}, { timestamps: true });

module.exports = mongoose.model('Hackathon', hackathonSchema);
