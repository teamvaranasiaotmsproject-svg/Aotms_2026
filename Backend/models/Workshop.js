const mongoose = require('mongoose');

const workshopSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    tagline: { type: String },
    mode: { type: String, enum: ['Online', 'Offline'], required: true },
    date: { type: String, required: true },
    duration: { type: String, required: true },
    bannerUrl: { type: String },
    thumbnailUrl: { type: String },
    description: { type: String, required: true },
    eligibility: { type: String },
    level: { type: String },
    whatYouWillLearn: [{ type: String }],
    buttonText: { type: String, default: "Register Now" },
    registrationLink: { type: String },
    type: { type: String, default: 'workshop' }
}, { timestamps: true });

module.exports = mongoose.model('Workshop', workshopSchema);
