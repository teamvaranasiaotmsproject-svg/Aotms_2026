const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const compression = require('compression');

// Middleware
// Middleware

const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:8080',
    'http://localhost:8081',
    'https://aotms.in',
    'https://www.aotms.in',
    process.env.CLIENT_URL
].filter(Boolean);

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            // Optional: for debugging, allow all in dev if needed, strictly enforce in prod
            // For now, lenient check or strict? Strict is better for security, but let's be helpful.
            // If origin is not allowed, check if it matches the main domain structure? 
            // Sticking to exact match for safety.
            var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
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
