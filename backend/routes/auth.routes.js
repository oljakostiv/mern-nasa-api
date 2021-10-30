const { Router } = require('express');
const router = Router();
// const {check} = require('express-validator');
const { register, login } = require('../controllers/auth.controller');
const { isDataValid } = require('../middlewares/user.middleware');
const { authUserValidator } = require('../validators/user.validator');

router.post(
    '/registration',
    // [
    //     check('email', 'Incorrect email').isEmail(),
    //     check('password', 'Minimum password length: 6 characters')
    //         .isLength({min: 6})
    // ],
    isDataValid(authUserValidator),
    register
);

router.post(
    '/login',
    // [
    //     check('email', 'Incorrect email').normalizeEmail().isEmail(),
    //     check('password', 'Enter the password').exists()
    // ],
    isDataValid(authUserValidator),
    login
);

module.exports = router;
