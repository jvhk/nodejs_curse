module.exports = function(application){

    application.get('/formulario_inclusao_noticia', function(req,res){
        res.render("admin/form_add_noticia");
    });

    application.post('/noticias/salvar', function(req, res){
        let noticia = req.body;
        
        
        //recuperando conec
        const connection = application.config.dbconnection();
        //recuperando o model
        const noticiasModel = application.app.models.noticiasModel();

        //salvando noticias
        noticiasModel.salvarNoticia(noticia, connection,function(error, result) {
            res.redirect('/noticias');
            //alert("Noticia adicionada!");
        });

    });

}