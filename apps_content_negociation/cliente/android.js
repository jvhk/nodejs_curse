const http = require('http');


// necessario ter esse servidor ouvindo para conectar com o client no GET abaixo

http.createServer(function (req, res) { 
    req.pipe(res);
}).listen(4000);

//console.log("Ouvindo na porta 3000");

let buffer_corpo_response = [];

let opcoes = {
    hostname: 'localhost',
    port: 4000,
    path: '/',
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
}

//Content type (x-www-form-urlencoded)

let html = "Nome=José";     //x-www-form-urlencoded
let json = {nome: 'José'};
let string_json = JSON.stringify(json)

let req = http.request(opcoes, (res) => {
 
    res.on('data', (pedaco) => {
        buffer_corpo_response.push(pedaco);
    });

    res.on('end', function() {
       let corpo_reponse = Buffer.concat(buffer_corpo_response).toString();
       
       console.log(corpo_reponse);
    });
 
});

req.write(string_json);
req.end();