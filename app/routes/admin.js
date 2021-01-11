module.exports = function(application){

    application.get('/formulario_inclusao_noticia', function(req,res){
        res.render("admin/form_add_noticia");
    });

    application.post('/noticias/salvar', function(req, res){
        let noticia = req.body;
        
        
        //recuperando conec
        const connection = application.config.dbconnection();
        //recuperando o model
        const noticiasModel = new application.app.models.NoticiasDAO(connection);

        //salvando noticias
        noticiasModel.salvarNoticia(noticia, function(error, result) {
            res.redirect('/noticias');
            //alert("Noticia adicionada!");
        });

    });

}