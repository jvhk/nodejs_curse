/* import do mongodb */

const mongo = require('mongodb');

const connMongoDB = function(){
    console.log("Entrou na função de conexão com mongoDB");
    let db = new mongo.Db(
        'got',
        new mongo.MongoClient(
            'localhost',
            27017,
            {}
        ),
        {}
    );
    return db;
}

module.exports = function () { 
    return connMongoDB;
} 