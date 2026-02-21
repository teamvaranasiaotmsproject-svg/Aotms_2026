const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', async (req, res) => {
    try {
        const { messages } = req.body;

        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({ message: "Invalid messages format" });
        }

        // The correct URL provided by the user for n8n integration
        const n8nWebhookUrl = "https://aotms.app.n8n.cloud/webhook/Aotms_chatbot";
        
        const lastMessage = messages[messages.length - 1];
        const chatInput = lastMessage ? lastMessage.content : "";

        // Sending a clean structure for n8n. In n8n AI node, use: {{ $json.body.message }}
        const response = await axios.post(n8nWebhookUrl, {
            message: chatInput
        });

        // n8n response handling:
        // robustly extracting the message from various n8n output formats
        let botContent = "";
        
        const data = response.data;
        const firstElement = Array.isArray(data) ? data[0] : data;

        if (typeof data === 'string') {
            botContent = data;
        } else if (firstElement) {
            botContent = firstElement.output || 
                         firstElement.response || 
                         firstElement.message || 
                         firstElement.text || 
                         firstElement.answer || 
                         (firstElement.choices && firstElement.choices[0]?.message?.content) ||
                         JSON.stringify(data);
        } else {
            botContent = "I received an empty response. Please try again.";
        }

        res.json({
            choices: [{
                message: {
                    role: "assistant",
                    content: botContent
                }
            }]
        });

    } catch (error) {
        console.error("Chat API Error (n8n):", error.message);
        if (error.response) {
            console.error("n8n Error Response Data:", JSON.stringify(error.response.data));
            return res.status(error.response.status).json({
                message: "n8n Workflow Error",
                details: error.response.data
            });
        }
        res.status(500).json({ 
            message: "Failed to fetch response from n8n workflow", 
            details: error.message 
        });
    }
});

module.exports = router;