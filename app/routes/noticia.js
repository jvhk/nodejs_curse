module.exports = function(application){
    

    application.get('/noticia', function(req,res){

        const connection = application.config.dbconnection();
        const noticiaModel = application.app.models.noticiasModel();

        noticiaModel.getNoticia(connection, function(error, result){
            res.render("noticias/noticia", {noticia: result});
        });

        
    });
    
};
