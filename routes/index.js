var express = require('express');
var router = express.Router();
var passport = require('passport');

const userController = require('../controllers/userController');
const Message = require('../models/Message');



/* GET home page. */
router.get('/', function(req, res, next) {
  Message.find()
  .exec(function (err, results){
    if(err){
        return next(err);
    }
    console.log(results)
    res.render('index', {title:"Welcome!", user: res.locals.currentUser, messages: results});
});
});

/* GET sign-up page. */
router.get('/sign-up', function(req, res, next) {
  res.render('sign-up', { title: 'Create account', errors: null});
});

router.post('/sign-up', userController.user_signup_post);

router.get('/join',)

router.get('/log-in', function(req,res,next){
  res.render('log-in',{title:'log in', errors: null})
});

router.post(
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "/join",
    failureRedirect: "/log-in"
  })
);

router.get("/log-out", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

router.get("/join", userController.user_join_get);

router.post("/join", userController.user_join_post);






module.exports = router;
