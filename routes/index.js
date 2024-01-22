const express = require('express');
const router = express.Router();
const passport = require('passport');
const userModel = require('../models/users');
const localStrategy = require('passport-local');
const {isLoggedIn} = require('../middlewares/isLoggedIn')

// Passport configuration
passport.use(new localStrategy(userModel.authenticate()));

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/register', (req, res) => {
  res.render('register');
});
router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/register', (req, res, next) => {
  const data = new userModel({
    username: req.body.username,
    fullName: req.body.fullName,
    email: req.body.email,
  });

  userModel.register(data, req.body.password)
    .then(() => {
      passport.authenticate('local')(req, res, () => {
        res.redirect('/');
      });
    })
    .catch((error)=>{
      res.send(error.message)
    }); 
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
}));

router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

module.exports = router;
