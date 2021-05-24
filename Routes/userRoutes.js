const router = require('express').Router();
const userController = require('../Controller/userController');

router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.post('/refresh_token', userController.refreshToken)
router.get('/infor', userController.getUser)


module.exports = router