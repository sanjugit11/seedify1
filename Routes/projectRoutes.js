const router = require('express').Router();
const projectCtrl = require('../Controller/projectCtrl')


router.post('/create_project', projectCtrl.createProject)
router.get('/checkwhitelist', projectCtrl.getProjectRes)

module.exports = router