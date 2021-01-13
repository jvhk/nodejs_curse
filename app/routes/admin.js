const { render } = require("../../config/server");

module.exports = function(application){

    application.get('/formulario_inclusao_noticia', function(req,res){
        //res.render("admin/form_add_noticia", {validacao: {}, noticia: {}});
       // res.render("admin/form_add_noticia", {validacao: {}, noticia : {}});
       application.app.controllers.admin.formulario_inclusao_noticia(application, req, res);
    });

    application.post('/noticias/salvar', function(req, res){
        application.app.controllers.admin.noticias_salvar(application, req, res);
    });

}