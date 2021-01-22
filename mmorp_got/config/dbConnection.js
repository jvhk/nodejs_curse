/* import do mongodb */

const mongo = require('mongodb');

const connMongoDB = function(){
    console.log("Entrou na função de conexão com mongoDB");
    
    const url = "mongodb://localhost:27017/?useUnifiedTopology=true";
    const db = new mongo.MongoClient(url);

    return db;

}

module.exports = function () { 
    return connMongoDB;
} 