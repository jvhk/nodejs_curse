//sql part
const mysql = require("mysql");

const connMysql = function () {
    console.log("Conexao com o bd foi estabelecida!");
    return mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'portal_noticias'
    });
}

module.exports = function()  {
    console.log("Módulo de conexao com o db foi carregado");
    return connMysql;
}