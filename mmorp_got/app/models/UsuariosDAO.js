const { MongoClient } = require("mongodb");

function UsuariosDAO (connection) { 
    this._connection = connection();
}


UsuariosDAO.prototype.inserirUsuario = function(usuario){
    
    /*this._connection.open(function(err, mongoclient){
        mongoclient.collection("usuarios", function(err, collection){
            collection.insert(usuario);
        });
    });
    */

    const client = this._connection;

    async function run () { 
        try{
            await client.connect();
            const database = client.db("got");
            const collection = database.collection("usuario");
            const result = await collection.insertOne(usuario);
            console.log("Usuario inserido no banco com sucesso");
        } finally {
            await client.close();
        }
    }

    run().catch(console.dir);

}

module.exports = function(){
    return UsuariosDAO;
}