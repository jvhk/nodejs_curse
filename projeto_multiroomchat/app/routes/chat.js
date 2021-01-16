module.exports = function(application){
    application.post('/chat', function(req, res){
        res.send("chat");      //arquivo index.ejs
    });

    application.get('/chat', function(req, res){
        res.send("chat");      //arquivo index.ejs
    });

}