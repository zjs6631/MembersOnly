const async = require("async")

const User = require('../models/User');
const Message = require('../models/Message');

const {body, validationResult} = require("express-validator");

const bcrypt = require('bcryptjs');

exports.index = function (req, res, next){

}

exports.user_signup_post = [
    
    //sanitize and validate all of the inputs
    body("firstname", "first name required").trim().isLength({min: 1}).escape(),
    body("lastname", "last name required").trim().isLength({min: 1}).escape(),
    body("username", "username required, must be email format").normalizeEmail().isEmail().escape(),
    body("password", "password required").trim().isLength({min: 1}).escape(),
    body("confirmpassword", "passwords do not match").custom((val, {req}) => val ===req.body.password).escape(),
    
    
    (req, res, next) =>{

        const errors = validationResult(req); //returns an array of errors if any

        if(!errors.isEmpty()){
            console.log(errors);
            res.render("sign-up", {title: "there were errors", errors: errors.array()});
            return;
        }

        bcrypt.hash(req.body.password, 10, (err, hashedPassword) =>{
            let isAdmin = false;
            if(req.body.isAdmin === process.env.adminpass){
                isAdmin = true;
            }
            const user = new User({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                username: req.body.username,
                password: hashedPassword,
                isMember : false,
                isAdmin: isAdmin,
            }).save((err)=>{
                if(err){
                    return next(err);
                }
                console.log("error is right here");
                res.render('index', {title: "user created!", user: user});
            });

        });
        
    },

]

exports.user_join_get = function (req, res, next) {
    
}