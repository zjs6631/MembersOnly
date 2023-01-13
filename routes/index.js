var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET sign-up page. */
router.get('/sign-up', function(req, res, next) {
  res.render('sign-up', { title: 'Create account', errors: null});
});

router.post('/sign-up', userController.user_signup_post);

module.exports = router;
