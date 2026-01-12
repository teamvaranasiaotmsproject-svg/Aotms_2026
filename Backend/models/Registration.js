const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Optional if guest registration allowed
    name: { type: String, required: true },
    email: { type: String, required: true },
    eventName: { type: String, required: true },
    eventType: { type: String, required: true },
    registeredAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Registration', RegistrationSchema);
