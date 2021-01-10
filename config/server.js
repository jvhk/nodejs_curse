const express  = require("express");
const consign  = require("consign");

const app = express();


//view
app.set("view engine", "ejs");
app.set("views", "./app/views");

// settando o consign
consign()
    .include('app/routes')
    .then('/config/dbconnection.js')
    .into(app);

module.exports = app;