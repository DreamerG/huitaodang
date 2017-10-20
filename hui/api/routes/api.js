var express = require("express");
var router = express.Router();
var user = require("../model/user");


/*router.post("/register",function(res,req){
    user.find({
        username:req.body.username
    },function(error,data){

            if(data.length === 0){
                user.create({
                    username:req.body.username,
                    password:md5(req.body.password)
                },function(error,data){
                    if(!error){
                        res.send(true)
                    }else{
                        res.send(false)
                    }
                })
            }else{
                res.send(false)
            }

    })
})*/

router.post("/register",function(req,res){
    user.find({
        username:req.body.username
    },function(error,result){
        if(!error){
            if(result.length == 0){
                user.create({
                    username:req.body.username,
                    password:req.body.password
                },function(error,result){
                    if(!error){
                        res.send(true)
                    }
                    else{
                        res.send(false);
                    }
                })
            }
            else{
                res.send(false)
            }
        }else{
            res.send(error)
        }
    })
})

/*router.post('/register',function(req,res,next){
    user.find({
        username:req.body.username
    },function(error,data){
        if(data){
            res.send(true);
        }else{
            user.create({
                username:req.body.username,
                password:req.body.password
            },function(error,data){
                if(!error){
                    res.send(true);
                }else{
                    res.send(false);
                }
            })
        }
    })
})*/




router.post("/login",function(req,res){
    user.find({
        username:req.body.username,
        password:req.body.password
    },function(error,result){
        if(!error){
            if(result.length > 0){
                req.session.pool = result[0];
                res.cookie("currentname",result[0].username);
                res.cookie("flag",true)
                res.send(true)
            }
            else{
                res.send(false)
            }
        }else{
            res.send(false)
        }
    })
})







module.exports = router;
