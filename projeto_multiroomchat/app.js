const app = require('./config/server'); 


//porta
let server = app.listen(80, function(){
    console.log("Server rodando na porta 80");
});

let io = require('socket.io').listen(server);

// conn com websocket

io.on('connection', function(socket){
    console.log("Usuário conectou!");

    socket.on('disconnect', function(){
        console.log("Usuário desconectou!");
    });
});