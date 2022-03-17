const Nft = require("../models/nft");

/**
 * Get all 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

exports.getAll = (req, res, next) => {
    Nft.find()
        .then((nfts) => {
            res.status(200).json(nfts);
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
};

/**
 * Get one by id
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

exports.getOneNft = (req, res, next) => {
    Nft.findOne({ _id: req.params.id })
        .then((thing) => {
            res.status(200).json(thing);
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
};

/**
 * Put
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

exports.modifyNft = (req, res, next) => {
    const nft = { ...req.body, _id: req.params.id };
    Nft.updateOne({ _id: req.params.id }, nft)
        .then(() => res.status(201).json({
            message: 'Nft updated successfully!'
        }))
        .catch((error) => {
            res.status(404).json({ error: error });
        });
};


/**
 * Delete
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

exports.deleteNft = (req, res, next) => {
    const nft = { ...req.body, _id: req.params.id };
    Nft.deleteOne({ _id: req.params.id }, nft)
        .then(() => res.status(201).json({
            message: 'Nft deleted successfully!'
        }))
        .catch((error) => {
            res.status(404).json({ error: error });
        });
};

/**
 * Post
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

exports.createNft = (req, res, next) => {
    const nft = new Nft({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
    });
    nft.save()
        .then(() => {
            res.status(201).json({ message: "Nft saved successfully!" });
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
};
