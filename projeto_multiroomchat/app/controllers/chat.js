const { emit } = require("../../config/server");

module.exports.iniciaChat = function(application, req, res){

    let dadosForm = req.body;

    //validações
    req.assert('apelido', 'Nome ou apelido é um campo obrigatório').notEmpty();
    req.assert('apelido', 'Nome ou apelido é um campo que deve possuir de 3 a 15 caracteres').len(3, 15);

    let errosMsgs = req.validationErrors();

    if(errosMsgs){
        res.render('index', {validacao : errosMsgs});
        return;
    }

    application.get('io').emit(
        'msgParaCliente',
        {apelido : dadosForm.apelido, mensagem : ' acabou de entrar no chat!'});

    res.render("chat");
}