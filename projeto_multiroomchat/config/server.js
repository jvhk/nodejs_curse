const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();


//views
app.set('view engine', 'ejs');
app.set('views', './app/views');


//middleware - express.static
app.use(express.static('./app/public'));

//middleware bodyparser
app.use(bodyParser.urlencoded({extended : true}));

//middleware express-validator
app.use(expressValidator());


// upload das rotas e controllers para o objeto app
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;


