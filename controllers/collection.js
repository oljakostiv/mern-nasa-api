const Collection = require('../models/collection');

module.exports = {

    index: (req, res) => {
        Collection.find({user: req.user._id})
            .then(collections => {
                res.json(collections)
            })
            .catch(err => {
                res.json(err)
            })
    },

    create: (req, res) => {
        req.body.user = req.user._id;
        Collection.create(req.body)
            .then(collection => {
                res.json(collection)
            })
            .catch(err => {
                res.json(err)
            })
    },

    update: (req, res) => {
        Collection.findById(req.params.id, function (err, collection) {
            req.body.photos = [...collection.photos, req.body.photos]
            Collection.findByIdAndUpdate(req.params.id, req.body, {new: true})
                .then(collection => {
                    res.json(collection)
                })
                .catch(err => {
                    res.json(err)
                })
        })
    },

    delete: (req, res) => {
        Collection.findByIdAndDelete(req.params.id)
            .then(collection => {
                res.json(collection)
            })
            .catch(err => {
                res.json(err)
            })
    }
};
