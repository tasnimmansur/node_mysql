var connection = require('./../config');
var express=require("express");
var app = express();

module.exports.register=function(req,res) {
    //var today = new Date();
    var users = {
        "name": req.body.name,
        "email": req.body.email,
        "password": req.body.password,
    };

    app.get('/', function (req, res) {
        res.render('register.ejs');
        //res.send('../views/register.ejs');
    });

    app.post('/insert', function (error, conn) {
        var query='insert into user set ?,users';
        //var query = "insert into user(name,email,password) values('"+name+"','"+email+"','"+password+"')";
        connection.query(query, function (error, results) {
            if (error) {
                throw error;
            }
            else {
                res.send('Inserted Successfully!');
                res.json({
                    status: true,
                    data: results,
                    message: 'user registered sucessfully'
                })
            }
        })
    });
};
   /* connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
        if (error) {
            res.json({
                status:false,
                message:'there are some error with query'
            })
        }else{
            res.json({
                status:true,
                data:results,
                message:'user registered sucessfully'
            })
        }
    });
};


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
*/