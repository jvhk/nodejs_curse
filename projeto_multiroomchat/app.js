const app = require('./config/server'); 


//porta
let server = app.listen(80, function(){
    console.log("Server rodando na porta 80");
});

let io = require('socket.io').listen(server);

app.set('io', io);

// conn com websocket

io.on('connection', function(socket){
    console.log("Usuário conectou!");

    socket.on('disconnect', function(){
        console.log("Usuário desconectou!");
    });

    socket.on('msgParaServidor', function(data){

        /* Eventos de diálogo */
        socket.emit(
            'msgParaCliente',
            {apelido: data.apelido, mensagem: data.mensagem }
        );

        socket.broadcast.emit(
            'msgParaCliente',
            {apelido: data.apelido, mensagem: data.mensagem }
        );
        
        /* Participantes */
        if(parseInt(data.apelido_atualizado_nos_clientes) == 0){

            socket.emit(
                'participantesParaCliente',
                {apelido: data.apelido}
            );

            socket.broadcast.emit(
                'participantesParaCliente',
                {apelido: data.apelido} 
            );

        }
    });
});