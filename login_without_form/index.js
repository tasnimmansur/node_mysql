var express=require("express");
var bodyParser=require('body-parser');
var app = express();

var authCon=require('./controllers/authenticate-controller');
var regCon=require('./controllers/register-controller');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.post('/api/register',regCon.register);
app.post('/api/authenticate',authCon.authenticate);
app.listen(8000);