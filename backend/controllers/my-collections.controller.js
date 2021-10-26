const Collection = require('../dataBase/Collection');

module.exports = {
    index: async (req, res) => {
        try {
            const collections = await Collection.find({user: req.user._id});
            res.json(collections);
        } catch (e) {
            res.json(e);
        }
    },

    create: async (req, res) => {
        try {
            req.body.user = req.user._id;

            const collection = await Collection.create(req.body);

            res.json(collection);
        } catch (e) {
            res.json(e);
        }
    },

    update: async (req, res) => {
        try {
            await Collection.findById(req.params.id, function (err, collection) {
                req.body.photos = [...collection.photos, req.body.photos]

                const collectionUpd = Collection.findByIdAndUpdate(req.params.id, req.body, {new: true});

                res.json(collectionUpd);
            })
        } catch (e) {
            res.json(e);
        }
    },

    delete: async (req, res) => {
        try {
            const collection = await Collection.findByIdAndDelete(req.params.id);
            res.json(collection);
        } catch (e) {
            res.json(e);
        }
    }
};
