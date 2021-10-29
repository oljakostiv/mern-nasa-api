module.exports = {
    isDataValid: (validator, searchIn = 'body') => (req, res, next) => {
        try {
            const {error} = validator.validate(req[searchIn]);

            if (error) {
                return res.status(400).json({message: 'Not valid request!'});
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};
