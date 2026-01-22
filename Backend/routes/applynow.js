const express = require('express');
const router = express.Router();
const JobApplication = require('../models/JobApplication');
const upload = require('../middleware/upload');
const axios = require('axios');
const FormData = require('form-data');

// @route   POST /api/applynow
// @desc    Submit a job application
// @access  Public
router.post('/', upload.single('resume'), async (req, res) => {
    console.log("ApplyNow POST request received");

    try {
        const { name, email, phone, position, internshipType, internshipDuration } = req.body;
        console.log("Body:", { name, email, phone, position, internshipType, internshipDuration });
        console.log("File:", req.file ? "File received" : "No file");

        // Validation
        if (!name || !email || !phone || !position) {
            return res.status(400).json({ message: 'Please fill in all required fields' });
        }

        if (!req.file && !internshipType) {
            return res.status(400).json({ message: 'Please upload your resume' });
        }

        // Email validation
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Invalid email address' });
        }

        // Phone validation
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            return res.status(400).json({ message: 'Phone number must be 10 digits' });
        }

        let resumeLink = "Not Provided";

        if (req.file) {
            // Upload to Pinata (IPFS)
            const uploadToPinata = async (fileBuffer, fileName) => {
                const formData = new FormData();
                formData.append('file', fileBuffer, fileName);

                const pinataMetadata = JSON.stringify({
                    name: fileName
                });
                formData.append('pinataMetadata', pinataMetadata);

                const pinataOptions = JSON.stringify({
                    cidVersion: 0,
                });
                formData.append('pinataOptions', pinataOptions);

                const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
                    headers: {
                        'Authorization': `Bearer ${process.env.PINATA_JWT}`,
                        ...formData.getHeaders()
                    },
                    maxBodyLength: Infinity // Necessary for larger files
                });
                return res.data;
            };

            console.log("Uploading to Pinata IPFS...");
            const result = await uploadToPinata(req.file.buffer, req.file.originalname);
            console.log("Pinata Upload Success. CID:", result.IpfsHash);
            resumeLink = `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`;
        }

        const newApplication = new JobApplication({
            name,
            email,
            phone,
            position,
            internshipType,
            internshipDuration,
            resumeLink
        });

        await newApplication.save();
        console.log("Application saved to MongoDB");

        res.status(201).json({
            message: 'Application submitted successfully',
            ApplicationId: newApplication._id,
            resumeLink: resumeLink
        });

    } catch (error) {
        console.error('ApplyNow Error:', error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});

module.exports = router;
