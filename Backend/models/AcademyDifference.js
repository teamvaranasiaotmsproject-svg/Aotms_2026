const mongoose = require('mongoose');

const academyDifferenceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    order: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('AcademyDifference', academyDifferenceSchema);
