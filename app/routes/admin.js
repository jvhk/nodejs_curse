const { render } = require("../../config/server");

module.exports = function(application){

    application.get('/formulario_inclusao_noticia', function(req,res){
        //res.render("admin/form_add_noticia", {validacao: {}, noticia: {}});
        res.render("admin/form_add_noticia");
    });

    application.post('/noticias/salvar', function(req, res){
        let noticia = req.body;
        
        req.assert('titulo','O título é um campo obrigatório!').notEmpty();
        req.assert('resumo','O resumo é um campo obrigatório!').notEmpty();
        req.assert('resumo','O resumo deve conter entre 10 e 100 caracteres!').len(10,100);
        req.assert('autor','O autor é um campo obrigatório!').notEmpty();
        req.assert('data_noticia','A data é um campo obrigatório!').notEmpty();
        req.assert('noticia','A descrição é um campo obrigatório!').notEmpty();
        
        let errors = req.validationErrors();

        if(errors){
            res.render("admin/form_add_noticia", {validacao : errors});
            return; // para não executar os próximos passos
        }

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