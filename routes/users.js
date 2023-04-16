const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/user_controller');

console.log('router loaded');

router.get('/sign-in', userController.signIn);
router.get('/sign-up', userController.signUp);
router.post('/create', userController.create);
//use passport as midleware to authenticate
router.post('/createSession', passport.authenticate(
    'local',
    { failureRedirect: '/users/sign-in' },
), userController.createSession)
router.get('/sign-out', userController.destroySession);
module.exports = router;