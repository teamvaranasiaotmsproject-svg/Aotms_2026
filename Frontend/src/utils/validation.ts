
export const validate = {
    isName: (name: string): boolean => {
        // Allows letters and spaces, must be at least 2 chars
        return /^[a-zA-Z\s]{2,}$/.test(name.trim());
    },
    isEmail: (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email.trim());
    },
    isPhone: (phone: string): boolean => {
        // Strictly 10 digits
        return /^\d{10}$/.test(phone.trim());
    },
    isText: (text: string): boolean => {
        return text.trim().length > 0;
    }
};

export const sanitizeInput = {
    name: (value: string): string => {
        // Allow only alphabets and spaces
        return value.replace(/[^a-zA-Z\s]/g, '');
    },
    email: (value: string): string => {
        // Remove spaces
        return value.trim();
    },
    phone: (value: string): string => {
        // Allow only numbers
        return value.replace(/\D/g, '');
    },
    text: (value: string): string => {
        // Basic sanitization if needed, currently just passing through or preventing HTML injection if that was the goal, 
        // but usually React handles XSS. Here we might just ensure it's not too long or something 
        // strictly for the input handler.
        return value;
    }
};
