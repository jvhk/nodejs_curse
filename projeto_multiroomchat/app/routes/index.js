module.exports = function(application){
    application.get('/', function(req, res){
        res.send("index");      //arquivo index.ejs
    });
}