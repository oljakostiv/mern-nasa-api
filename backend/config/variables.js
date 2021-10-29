module.exports = {
    PORT: process.env.PORT || 5000,
    jwtSecret: process.env.JWT_SECRET || "secret key",
    mongoUri: process.env.DB_CONNECTION_URL,

    EMAIL_REGEXP: new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$'),
    PASSWORD_REGEXP: new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{6,30})')
};
