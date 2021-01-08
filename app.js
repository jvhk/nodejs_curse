const express  = require("express");
const app = express();


//view
app.set("view engine", "ejs");

//Rotas possívies
app.get('/tecnologia', function(req,res){
    res.render("secao/tecnologia");
});


app.get('/', function(req,res){
    res.send("<html<body>Portal de noticias</body></html>");
});



//equivalente ao server.listen do http
app.listen(3000, function(){
    console.log("Servidor rodando com express");
});