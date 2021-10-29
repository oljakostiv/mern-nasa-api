const Joi = require('joi');
const {
    EMAIL_REGEXP, PASSWORD_REGEXP
} = require('../config/variables');

const authUserValidator = Joi.object({
    email: Joi.string()
        .regex(EMAIL_REGEXP)
        .trim(),
    password: Joi.string()
        .regex(PASSWORD_REGEXP)
});

module.exports = {
    authUserValidator
}
