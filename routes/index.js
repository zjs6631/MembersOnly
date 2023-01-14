var express = require('express');
var router = express.Router();
var passport = require('passport');

const userController = require('../controllers/userController');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', user: req.user});
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
    successRedirect: "/",
    failureRedirect: "/"
  })
);


module.exports = router;
