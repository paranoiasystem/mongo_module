var MongoClient = require('mongodb').MongoClient;
var fs = require('fs');

var ca = [fs.readFileSync(__dirname + process.env.MONGO_CERT)];

var options = {
    ssl: true,
    sslValidate: true,
    sslCA:ca,
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