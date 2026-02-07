const axios = require('axios');

const verifyRecaptcha = async (token) => {
    if (!token) {
        return { success: false, message: 'No recaptcha token provided' };
    }

    try {
        const secretKey = process.env.RECAPTCHA_SECRET_KEY;
        console.log('Verifying Recaptcha with Secret:', secretKey ? sanitizeKey(secretKey) : 'MISSING');
        console.log('Token (preview):', token ? token.substring(0, 10) + '...' : 'MISSING');

        const response = await axios.post(
            `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`
        );

        console.log('Google Recaptcha Response:', response.data);

        const { success, score } = response.data;

        if (!success) {
            return { success: false, message: 'Recaptcha verification failed', errors: response.data['error-codes'] };
        }

        if (score < 0.5) {
            return { success: false, message: 'Recaptcha score too low', score };
        }

        return { success: true };
    } catch (error) {
        console.error('Recaptcha verification error:', error);
        return { success: false, message: 'Server error during verification' };
    }
};

const sanitizeKey = (key) => key ? key.substring(0, 4) + '...' + key.substring(key.length - 4) : null;

module.exports = verifyRecaptcha;
