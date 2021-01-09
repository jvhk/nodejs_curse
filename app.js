const app = require("./config/server");

const rotaHome = require("./app/routes/home")(app);
//rotaHome(app);

const rotaNoticias = require("./app/routes/noticias")(app);
//rotaNoticias(app);

const rotaFormInc = require("./app/routes/formulario_inclusao_noticia")(app);
//rotaFormInc(app);

//equivalente ao server.listen do http
app.listen(3000, function(){
    console.log("Servidor rodando com express");
});

