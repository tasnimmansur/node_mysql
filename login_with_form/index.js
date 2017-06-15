var express=require("express");
var bodyParser=require('body-parser');
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var authCon=require('./controllers/authenticate_controller');
var regCon=require('./controllers/register_controller');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.post('/api/register',regCon.register);
app.post('/api/authenticate',authCon.authenticate);
app.listen(8000);