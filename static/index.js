var express = require("Express");
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/home.html')
});

app.get('/about', function(req, res){
    res.sendFile(__dirname + '/public/about.html')
});

app.get('/blog', function(req, res){
    res.sendFile(__dirname + '/public/blog.html')
});

app.get('/upload', function(req, res){
    res.sendFile(__dirname + '/public/upload.html')
});

app.get('/contact', function(req, res){
    res.sendFile(__dirname + '/public/contact.html')
});

app.get('/profile', function(req, res){
    res.sendFile(__dirname + '/public/profile.html')
});

var server = app.listen(4000, function(){
    console.log('Server running at http://localhost:4000');
})