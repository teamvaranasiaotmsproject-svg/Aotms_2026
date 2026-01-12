const mongoose = require('mongoose');

const PlacementSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['student', 'detailed'],
        required: true
    },
    // Common/Student fields
    name: String,
    jobTitle: String,
    companies: [String],
    image: String, // For student placement

    // Detailed fields
    consultantName: String,
    client: String,
    startDate: String,
    duration: String,
    location: String,
    salary: String
});

module.exports = mongoose.model('Placement', PlacementSchema);
