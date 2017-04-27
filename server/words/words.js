"use strict";

let express = require('express');
let router = express.Router();
let mongo = require('../mongo');

router.get("/", (req, res) => {
    let collection = mongo.db.collection('wordChain');
    collection.find({}, {_id: false}).toArray(function(err, docs) {
        res.status(200).json(docs);
    });
});

router.post("/", (req, res) => {
    let collection = mongo.db.collection('wordChain');
    collection.insertOne(req.body).then((result) => {
        res.status(200).json(result);
    })
});
module.exports = router;
