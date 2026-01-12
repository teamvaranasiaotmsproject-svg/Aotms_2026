const mongoose = require('mongoose');

const WinnerSchema = new mongoose.Schema({
    eventId: { type: String, required: true },
    eventName: { type: String, required: true },
    winners: [{
        rank: { type: Number, required: true }, // 1, 2, 3
        teamName: { type: String, required: true },
        collegeName: { type: String, required: true },
        members: [{ type: String }],
        prize: { type: String },
        imageUrl: { type: String, required: true } // Required: Winner photo
    }]
}, { timestamps: true });

module.exports = mongoose.model('HackathonWinner', WinnerSchema);
