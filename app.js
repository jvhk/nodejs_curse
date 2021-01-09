const app = require("./config/server");

const rotaHome = require("./app/routes/home");
rotaHome(app);

const rotaNoticias = require("./app/routes/noticias");
rotaNoticias(app);

const rotaFormInc = require("./app/routes/formulario_inclusao_noticia");
rotaFormInc(app);

//equivalente ao server.listen do http
app.listen(3000, function(){
    console.log("Servidor rodando com express");
});

