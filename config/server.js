const express  = require("express");
const consign  = require("consign");
const bodyParser = require("body-parser");

const app = express();


//view
app.set("view engine", "ejs");
app.set("views", "./app/views");

//middleware
app.use(bodyParser.urlencoded({extended : true}));

// settando o consign
consign()
    .include('app/routes')
    .then('/config/dbconnection.js')
    .then('app/models/NoticiasDAO.js')
    .into(app);

module.exports = app;