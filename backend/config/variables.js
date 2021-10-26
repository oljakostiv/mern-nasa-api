module.exports = {
    PORT: process.env.PORT || 5000,
    jwtSecret: process.env.JWT_SECRET || "secret key",
    mongoUri: process.env.DB_CONNECTION_URL,
};
