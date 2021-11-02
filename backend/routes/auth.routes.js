const { Router } = require('express');
const router = Router();
const { register, login } = require('../controllers/auth.controller');
const { isDataValid } = require('../middlewares/user.middleware');
const { authUserValidator } = require('../validators/user.validator');

router.post(
    '/registration',
    isDataValid(authUserValidator),
    register
);

router.post(
    '/login',
    isDataValid(authUserValidator),
    login
);

module.exports = router;
