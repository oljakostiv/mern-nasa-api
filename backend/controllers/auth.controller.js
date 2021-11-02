const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/variables');
const User = require('../dataBase/User');

module.exports = {
    register: async (req, res) => {
        try {
            const {email, password} = req.body;

            const candidate = await User.findOne({email});

            if (candidate) {
                return res.status(400).json({message: 'Such a user already exists!'})
            }

            const hashedPassword = await bcrypt.hash(password, 8);
            const user = new User({email, password: hashedPassword});

            await user.save();

            res.status(201).json({message: 'User created!'});
        } catch (e) {
            res.status(500).json({message: 'Crashed. Try again!!'});
        }
    },

    login: async (req, res) => {
        try {
            const {email, password} = req.body;

            const user = await User.findOne({email});

            if (!user) {
                return res.status(400).json({message: 'User is not found.'})
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({message: 'Wrong data, try again.'})
            }

            const token = jwt.sign(
                {userId: user.id},
                jwtSecret,
                {expiresIn: '1h'}
            );

            res.json({token, userId: user.id});
        } catch (e) {
            res.status(500).json({message: 'Crashed. Try again!'});
        }
    }
};
