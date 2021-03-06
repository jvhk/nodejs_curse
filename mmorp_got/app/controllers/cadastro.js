module.exports.cadastro = function(application, req, res){
    res.render('cadastro', {validacao : {}, dadosForm: {}});
}

module.exports.cadastrar = function(application, req, res){
    
    let dadosForm = req.body;

    //Validações dos campos
    req.assert('nome', 'Nome não pode ser vazio').notEmpty();
    req.assert('usuario', 'Usuário não pode ser vazio').notEmpty();
    req.assert('senha', 'Senha não pode ser vazio').notEmpty();
    req.assert('casa', 'Casa não pode ser vazio').notEmpty();

    let erros = req.validationErrors();

    if(erros){
        res.render('cadastro', {validacao : erros, dadosForm: dadosForm});
        return;
    }

    let connection = application.config.dbConnection;
    
    let UsuariosDAO = new application.app.models.UsuariosDAO(connection);

    UsuariosDAO.inserirUsuario(dadosForm);

    res.send('Cadastrado com sucesso');
}