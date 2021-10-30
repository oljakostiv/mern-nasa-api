const {Router} = require('express');
const router = Router();
const collectionsCtrl = require('../controllers/my-collections.controller');
const { checkAuth } = require('../middlewares/my-collections.middleware');

router.get('/', checkAuth, collectionsCtrl.index);
router.post('/', checkAuth, collectionsCtrl.create);
router.put('/:id', checkAuth, collectionsCtrl.update);
router.delete('/:id', checkAuth, collectionsCtrl.delete);

module.exports = router;
