var MongoClient = require('mongodb').MongoClient;
var fs = require('fs');

var options = {
    useNewUrlParser: true
};

var _db;

module.exports.connectDB = (callback) => {
    MongoClient.connect(process.env.MONGODB_URL, options, function(err, db) {
        _db = db;
        return callback(err);
    });
};


module.exports.getDB = (dbName) => {
    return _db.db(dbName);
};

module.exports.disconnectDB = () => {
    _db.close()
};
module.exports.ObjectId = require('mongodb').ObjectId;
