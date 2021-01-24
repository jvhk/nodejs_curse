const { MongoClient } = require("mongodb");

function UsuariosDAO (connection) { 
    this._connection = connection();
}


UsuariosDAO.prototype.inserirUsuario = function(usuario, res){
    
    /*this._connection.open(function(err, mongoclient){
        mongoclient.collection("usuarios", function(err, collection){
            collection.insert(usuario);
        });
    });
    */
 
   
	var dados = {
		operacao: "inserir",
		usuario: usuario,
		collection: "usuarios",
		callback: function(err, result) {
		}
    };
    
	this._connection(dados);


}



UsuariosDAO.prototype.autenticar = function(usuario, req, res){
    
    var dados = {
		operacao: "find",
		usuario: usuario,
		collection: "usuarios",
		callback: function(err, result) {
			if(result == null){
				req.session.autorizado = false;
			}else{
				req.session.autorizado = true;
				req.session.usuario = result.usuario;
				req.session.casa = result.casa;
			}
			if(req.session.autorizado){
        		res.redirect("jogo");
   			}else {
   				res.render("index", {validacao: {}});
   			}
		}
	};
	this._connection = connection(dados);
}


module.exports = function(){
    return UsuariosDAO;
}