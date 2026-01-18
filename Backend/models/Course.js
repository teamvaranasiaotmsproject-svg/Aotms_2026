const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true }, // URL path to image
    description: { type: String, required: true },
    fullDescription: { type: String, required: true },
    duration: { type: String, required: true },
    level: { type: String, required: true },
    trainer: { type: String, required: true },
    price: { type: String, required: true },
    originalPrice: { type: String, required: true },
    rating: { type: Number, default: 5 },
    themeColor: { type: String, default: "#0EA5E9" }
}, { timestamps: true });

module.exports = mongoose.model('Course', CourseSchema);
