const {Router} = require('express');
const router = Router();
const collectionsCtrl = require("../controllers/my-collections.controller");

router.get('/', checkAuth, collectionsCtrl.index);
router.post('/', checkAuth, collectionsCtrl.create);
router.put('/:id', checkAuth, collectionsCtrl.update);
router.delete('/:id', checkAuth, collectionsCtrl.delete);


function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
