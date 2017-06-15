var connection = require('./../config');

module.exports.authenticate=function(req,res){
    var email=req.body.email;
    var password=req.body.password;

    app.get('/', function (req, res) {
        res.render('login');
    });

    app.post('/login', function (error, conn) {

        connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
            if (error) {
                res.json({
                    status:false,
                    message:'there are some error with query'
                })
            }
            else
            {
                if(results.length >0){
                    if(password==results[0].password){
                        res.send('successfull');
                        res.json({
                            status:true,
                            message:'successfully authenticated'
                        })
                    }else{
                        res.send('not match');
                        res.json({
                            status:false,
                            message:"Email and password does not match"
                        });
                    }

                }
                else{
                    res.send('Email not found');
                    res.json({
                        status:false,
                        message:"Email does not exits"
                    });
                }
            }
        })
    });
};