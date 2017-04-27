let MongoClient = require('mongodb').MongoClient;
let Promise = require('promise'); // jshint ignore:line

let mongo = {};


mongo.connect = (options) => {
    return new Promise((resolve, reject) => {
        const url = 'mongodb://' + options.host + ':' + options.port + '/' + options.name;
        MongoClient.connect(url, (err, db) => {
            if (err) {
                reject(err);
            }
            mongo.db = db;
            resolve();
        });
    });
};

module.exports = mongo;


