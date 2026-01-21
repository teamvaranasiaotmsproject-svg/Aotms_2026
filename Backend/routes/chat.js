const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { messages } = req.body;

        if (!process.env.OPEN_ROUTER_API_KEY) {
            console.error("Missing OPEN_ROUTER_API_KEY in environment variables");
            return res.status(500).json({ message: "Chat service configuration error" });
        }

        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({ message: "Invalid messages format" });
        }

        const lastMessage = messages[messages.length - 1];
        if (lastMessage && lastMessage.role === 'user') {
            const lowerText = lastMessage.content.trim().toLowerCase();
            if (lowerText === 'hi' || lowerText === 'hello') {
                return res.json({
                    choices: [{
                        message: {
                            role: "assistant",
                            content: "Sure! The Academy of Tech Masters offers premium training in Java, Python, and Full Stack Development. Would you like to know about a specific course?"
                        }
                    }]
                });
            }
        }

        const axios = require('axios');
        const response = await axios.post("https://openrouter.ai/api/v1/chat/completions", {
            model: "google/gemini-2.0-flash-exp:free",
            messages: [
                {
                    role: "system",
                    content: "You are a helpful and knowledgeable AI assistant for the Academy of Technology Masters (AOTMS). Your goal is to assist students and visitors with questions about courses, placements, internships, and general programming inquiries. Be polite, professional, and concise."
                },
                ...messages
            ]
        }, {
            headers: {
                "Authorization": `Bearer ${process.env.OPEN_ROUTER_API_KEY}`,
                "Content-Type": "application/json",
                "HTTP-Referer": process.env.CLIENT_URL || "http://localhost:5173",
                "X-Title": "AOTMS Chatbot",
            }
        });

        res.json(response.data);

    } catch (error) {
        console.error("Chat API Error:", error.message);
        if (error.response) {
            console.error("Error Response Data:", JSON.stringify(error.response.data));

            // Handle specific status codes
            if (error.response.status === 401) {
                return res.status(401).json({
                    message: "Authentication Failed: Invalid API Key. Please update OPEN_ROUTER_API_KEY in your backend .env file.",
                    details: error.response.data
                });
            }

            return res.status(error.response.status).json({
                message: "External API Error",
                details: error.response.data
            });
        }
        res.status(500).json({ message: "Failed to fetch chat response", details: error.message });
    }


});

module.exports = router;
