const dbconnection = require("../../config/dbconnection");

const dbConnection = require("../../config/dbconnection");

module.exports = function(app){

    let connection = dbconnection();

    app.get('/noticias', function(req,res){

        connection.query("select * from noticias", function (erro, result) {
            res.render("noticias/noticias", {noticias: result});
        });

        
    });

};
