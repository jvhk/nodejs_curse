const express  = require("express");
const app = express();

//view
app.set("view engine", "ejs");
app.set("views", "./app/views");

module.exports = app;