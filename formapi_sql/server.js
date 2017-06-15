var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); //extension of views
app.use(bodyParser.urlencoded({ extended: false }));

//mysql
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit : 100,
    host : 'localhost',
    user : 'root',
    password : 'lanetteam1',
    database : 'dummy_db'


});
//opening view

app.get('/', function(req,res){
    res.render('index');
});

//insert data
app.post('/insert', function(req,res){

    pool.getConnection(function(error,conn){

        var queryString = "insert into members(fname,lanme,email,phone) values('"+req.body.fname+"','"+req.body.lname+"','"+req.body.email+"','"+req.body.phone+"')";

        conn.query(queryString,function(error,results){
            if(error)
            {
                throw error;
            }
            else
            {
                res.send('Inserted Successfully!')
            }
        });
        conn.release();
    });
});

/*app.post('/delete',function (req,res)
{
    pool.getConnection(function (error,conn)
    {
        conn.query('DELETE FROM `members` WHERE `id`=?', [req.body.id], function (error,result)
        {
            if(error)
            {
                throw error;
            }
            else
            {
                res.send('Deleted Successfully');
            }
        });
        conn.release();
    });
});
*/

var server = app.listen(8000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

});