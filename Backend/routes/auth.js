const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const auth = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

// Register
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, phone, degree, department, passoutYear, course } = req.body;

        // Check if user exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({
            name,
            email,
            password,
            phone,
            degree,
            department,
            passoutYear,
            course,
            avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random` // Default avatar
        });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        // Create Token
        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET || 'secret', // Use env variable in production
            { expiresIn: '7d' },
            (err, token) => {
                if (err) throw err;
                res.json({
                    token,
                    user: {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        phone: user.phone,
                        degree: user.degree,
                        department: user.department,
                        passoutYear: user.passoutYear,
                        course: user.course,
                        avatar: user.avatar,
                        role: user.role
                    }
                });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check user
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        // Return Token
        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET || 'secret',
            { expiresIn: '7d' },
            (err, token) => {
                if (err) throw err;
                res.json({
                    token,
                    user: {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        phone: user.phone,
                        degree: user.degree,
                        department: user.department,
                        passoutYear: user.passoutYear,
                        course: user.course,
                        avatar: user.avatar,
                        role: user.role
                    }
                });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Auth Middleware
const authMiddleware = async (req, res, next) => {
    // Get token from header
    const token = req.header('x-auth-token');

    // Check if not token
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    // Verify token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

// @route   GET api/auth/me
// @desc    Get current user
// @access  Private
router.get('/me', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Google Authentication
router.post('/google', async (req, res) => {
    try {
        const { email, name, avatar, googleId } = req.body;

        // Check if user exists by email
        let user = await User.findOne({ email });

        if (!user) {
            // Create new user if they don't exist
            user = new User({
                name,
                email,
                avatar: avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`,
                googleId,
                role: 'user'
            });
            await user.save();
        } else {
            // ALWAYS update the avatar from Google to ensure it stays fresh in MongoDB
            let updated = false;
            if (avatar && user.avatar !== avatar) {
                user.avatar = avatar;
                updated = true;
                console.log(`Updated avatar for user: ${email}`);
            }
            if (googleId && !user.googleId) {
                user.googleId = googleId;
                updated = true;
            }
            if (updated) await user.save();
        }

        // Return Token
        const payload = {
            user: {
                id: user.id
            }
        };

        const jwt = require('jsonwebtoken');
        jwt.sign(
            payload,
            process.env.JWT_SECRET || 'secret',
            { expiresIn: '7d' },
            (err, token) => {
                if (err) throw err;
                res.json({
                    token,
                    user: {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        avatar: user.avatar,
                        role: user.role
                    }
                });
            }
        );
    } catch (err) {
        console.error("Google Auth Error:", err);
        res.status(500).json({ msg: 'Server Error during Google Auth', error: err.message });
    }
});
// Forgot Password
router.post('/forgot-password', async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            // SECURITY: Do not reveal that the user does not exist.
            return res.status(200).json({ success: true, data: "Email sent" });
        }

        // Generate Token
        const resetToken = crypto.randomBytes(20).toString('hex');

        // Hash token and set to resetPasswordToken field
        user.resetPasswordToken = crypto
            .createHash('sha256')
            .update(resetToken)
            .digest('hex');

        // Set expire (10 minutes)
        user.resetPasswordExpires = Date.now() + 10 * 60 * 1000;

        await user.save();

        // Create reset URL
        // In production, use client-side URL from env, e.g., process.env.CLIENT_URL
        const resetUrl = `${process.env.CLIENT_URL || 'http://localhost:5173'}/reset-password?token=${resetToken}`;

        const message = `
            <h1>You have requested a password reset</h1>
            <p>Please go to this link to reset your password:</p>
            <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
        `;

        try {
            const transporter = nodemailer.createTransport({
                service: process.env.EMAIL_SERVICE || 'gmail', // e.g., 'gmail'
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                },
                tls: {
                    rejectUnauthorized: false
                }
            });

            // If no email creds, log for dev
            if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
                console.log('Mock Email Sent');
                console.log('Reset Link:', resetUrl);
                return res.status(200).json({ success: true, data: "Email sent (Check console for Dev)" });
            }

            await transporter.sendMail({
                from: process.env.EMAIL_FROM || '"Support" <noreply@example.com>',
                to: user.email,
                subject: 'Password Reset Request',
                html: message
            });

            res.status(200).json({ success: true, data: "Email sent" });
        } catch (err) {
            console.error(err);
            user.resetPasswordToken = undefined;
            user.resetPasswordExpires = undefined;
            await user.save();
            return res.status(500).json({ msg: 'Email could not be sent' });
        }

    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Reset Password
router.put('/reset-password/:resetToken', async (req, res) => {
    try {
        const resetPasswordToken = crypto
            .createHash('sha256')
            .update(req.params.resetToken)
            .digest('hex');

        const user = await User.findOne({
            resetPasswordToken,
            resetPasswordExpires: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).json({ msg: 'Invalid Token' });
        }

        const { password } = req.body;

        // Hash new password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Clear reset fields
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;

        await user.save();

        // Optional: Auto-login or just return success
        res.status(200).json({ success: true, data: "Password Updated Success" });

    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Update Profile
router.put('/update', auth, async (req, res) => {
    const { name, phone, degree, department, passoutYear, course } = req.body;

    // Build user object
    const userFields = {};
    if (name) userFields.name = name;
    if (phone) userFields.phone = phone;
    if (degree) userFields.degree = degree;
    if (department) userFields.department = department;
    if (passoutYear) userFields.passoutYear = passoutYear;
    if (course) userFields.course = course;

    try {
        let user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ msg: 'User not found' });

        user = await User.findByIdAndUpdate(req.user.id, { $set: userFields }, { new: true });

        // Return updated user plain object
        const userObj = {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            degree: user.degree,
            department: user.department,
            passoutYear: user.passoutYear,
            course: user.course,
            avatar: user.avatar,
            role: user.role
        };

        res.json(userObj);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
