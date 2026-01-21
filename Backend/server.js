const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const compression = require('compression');

// Middleware
app.use(compression());
app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL ? [process.env.CLIENT_URL, 'http://localhost:5173', 'http://localhost:8080', 'http://localhost:8081'] : ['http://localhost:5173', 'http://localhost:8080', 'http://localhost:8081'],
    credentials: true
}));

// Health Check / Warm-up Endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'Server is warm' });
});

// DB Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('MongoDB Connection Error:', err.message);
        process.exit(1);
    }
};
connectDB();

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/leads', require('./routes/leads'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/events', require('./routes/events'));
app.use('/api/winners', require('./routes/winners'));

const PORT = process.env.PORT || 5000;

app.use('/api/courses', require('./routes/courses'));
app.use('/api/placements', require('./routes/placements'));
app.use('/api/feedback', require('./routes/feedback'));
app.use('/api/hero', require('./routes/heroSection'));
app.use('/api/academy-difference', require('./routes/academyDifference'));
app.use('/api/chat', require('./routes/chat'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
