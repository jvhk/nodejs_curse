module.exports = function(application){
	application.get('/', function(req, res){

		res.format({
			html: function(){
				res.send('Bem vindo a sua app NodeJS');
			},

			json:function(){
				let retorno = {
					body: "Bem vindo a sua app NodeJS"
				}
				res.json(retorno);
			}
		})

		res.send('Bem vindo a sua app NodeJS!');
	});

	application.post('/', function(req, res){
		let dados = req.body;
		res.send(dados);
	});
}