const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: false
    },
    googleId: {
        type: String,
        unique: true,
        sparse: true
    },
    phone: {
        type: String,
        required: false // Making it optional for now, or true if mandatory
    },
    degree: {
        type: String,
        enum: ['B.Tech', 'M.Tech', 'MCA', 'MBA', 'Others'],
        required: false
    },
    department: {
        type: String,
        enum: ['CSE', 'IT', 'ECE', 'EEE', 'MECH', 'CIVIL', 'AI & DS', 'AIML', 'CYBER SECURITY', 'DATA SCIENCE'],
        required: false
    },
    passoutYear: {
        type: String,
        required: false
    },
    course: {
        type: String,
        required: false
    },
    avatar: {
        type: String,
        default: '' // Can be a URL
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date
});

module.exports = mongoose.model('User', UserSchema);
