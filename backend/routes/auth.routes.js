const {Router} = require('express');
const router = Router();
const {check} = require('express-validator');
const {register, login} = require('../controllers/auth.controller');
const { isDataValid } = require('../middlewares/user.middleware');
const { authUserValidator } = require('../validators/user.validator');

router.post(
    '/registration', isDataValid(authUserValidator),
    // [
    //     check('email', 'Incorrect email').isEmail(),
    //     check('password', 'Minimum password length: 6 characters')
    //         .isLength({min: 6})
    // ],
    register
);

router.post(
    '/login', isDataValid(authUserValidator),
    // [
    //     check('email', 'Incorrect email').normalizeEmail().isEmail(),
    //     check('password', 'Enter the password').exists()
    // ],
    login
);

module.exports = router;
