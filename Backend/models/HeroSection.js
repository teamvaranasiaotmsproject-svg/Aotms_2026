const mongoose = require('mongoose');

const heroSectionSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: false // Optional, in case they just want images for now
    },
    subtitle: {
        type: String,
        required: false
    },
    order: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('HeroSection', heroSectionSchema);
