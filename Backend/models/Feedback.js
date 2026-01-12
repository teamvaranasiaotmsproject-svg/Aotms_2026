const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    category: { type: String },
    role: { type: String, default: "Student" },
    message: { type: String, required: true },
    rating: { type: Number, default: 5 },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
