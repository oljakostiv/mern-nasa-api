const router = require('express').Router();
const collectionsCtrl = require('../controllers/collections');

router.use(require('../config/auth'));
router.get('/', collectionsCtrl.index);
router.post('/', collectionsCtrl.create);
router.put('/:id', collectionsCtrl.update);
router.delete('/:id', collectionsCtrl.delete);

module.exports = router;
