const mongoose = require('mongoose');

const JobApplicationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        match: [/^\d{10}$/, 'Please fill a valid 10-digit phone number']
    },
    position: {
        type: String,
        required: true,
        trim: true
    },
    resumeLink: {
        type: String,
        required: false,
        trim: true
    },
    coverLetter: {
        type: String,
        trim: true
    },
    internshipType: {
        type: String,
        enum: ['Long Term', 'Short Term'],
        required: false
    },
    internshipDuration: {
        type: String, // e.g., "3 Months", "6 Months", "1 Month"
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('JobApplication', JobApplicationSchema);
