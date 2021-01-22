module.exports.home = function(application, req, res){

		res.render('index', {validacao : {}});

}

module.exports.autenticar = function(application, req, res){

	let dadosForm = req.body;

	//Validação
	req.assert('usuario', 'Usuário é um campo obrigatório').notEmpty();
	req.assert('senha', 'Senha é um campo obrigatório').notEmpty();

	let erros = req.validationErrors();

	if(erros){
		res.render("index", {validacao : erros});
		return;
	}

	res.send("Tudo ok para criar sessão");

}