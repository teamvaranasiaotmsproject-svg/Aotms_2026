const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    slug: { type: String, required: true, unique: true, trim: true },
    title: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    duration: { type: String, required: true, trim: true },
    level: { type: String, required: true, trim: true },
    price: { type: String, required: true, trim: true },
    originalPrice: { type: String, required: true, trim: true },
    rating: { type: Number, default: 5 },
    themeColor: { type: String, default: "#0EA5E9", trim: true }
}, { timestamps: true });

// Indexes for high-performance read queries
CourseSchema.index({ slug: 1 });
CourseSchema.index({ category: 1 });

module.exports = mongoose.model('Course', CourseSchema);
