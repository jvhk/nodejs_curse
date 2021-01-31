const express = require('express'),
bodyParser = require('body-parser'),
mongodb = require('mongodb').MongoClient,
objectID = require('mongodb').ObjectId;
const { ObjectID } = require('mongodb');

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let port = 3000;

app.listen(port);

let dbName = 'instagram';
let mongoURL = 'mongodb://localhost:27017/' + dbName;

let connMongoDB = function(data) {
    mongodb.connect(mongoURL, { useNewUrlParser: true }, function(err, client) {
        let db = client.db(dbName);
        query(db, data);
    client.close();
});
}

function query(db, data) {
    let collection = db.collection(data.collection);
        switch (data.operacao) {
            case 'atualizar':
                collection.update(data.where, data.set);
            break;
            case 'inserir':
                collection.insertOne(data.dados, data.callback);
            break;
            case 'pesquisar':
                collection.find(data.dados).toArray(data.callback);
            break;
            case 'remover':
                data.where._id = objectID(data.where._id);
                collection.remove(data.where, data.callback);
            break;
        }
}

console.log('Servidor HTTP escutando na porta ' + port);

app.get('/api', function(req, res){
    db.collection('postagens').find().toArray()
        .then(results => {
        res.json(results);
        })
        .catch(error => res.json(error))
    // ...

    /*collections = client.get().collection('postagens');
    collections.find().toArray(function (err, docs){
        if(err){
            res.json(err);
        }else{
            res.json(docs);
        }
        client.close();
    })*/
});

//GET BY ID
app.get('/api/:id', function(req, res){
    db.collection('postagens').find(ObjectID(req.params.id)).toArray()
        .then(results => {
            res.json(results);
        })
        .catch(error => res.json(error))
    
    /*collections = dbName.get().collection('postagens');
    collections.find().toArray(function (err, docs){
        if(err){
            res.json(err);
        }else{
            res.json(docs);
        }
        client.close();
    })*/
});

app.post('/api', function(req, res){
    let data = req.body;
    let dados = {
        operacao: 'inserir',
        dados: data,
        collection: 'postagens',
        callback: function(err, records){
            if (err) {
                res.json(err);
            } else {
                res.json(records);
            }
        }
    }

    connMongoDB(dados);
});