var express = require('express')
    , routes = require('./routes')
    , http = require('http')
    , path = require('path'),
    busboy = require("then-busboy"),
    fileUpload = require('express-fileupload'),
    app = express(),
    mysql      = require('mysql'),
    bodyParser=require("body-parser");

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'lanetteam1',
    database : 'dummy_db'
});

connection.connect(function (err) {
    if (err) throw err;
    else console.log("Connection Successfull");
});

global.db = connection;

// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

// development only

app.get('/', routes.index);//call for main index page
app.post('/', routes.index);//call for signup post
app.get('/profile/:id',routes.profile);//to render users profile

//Middleware
app.listen(8079);