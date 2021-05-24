const router = require('express').Router()
const deployIcoPoolCtrl = require('../Controller/deployIcoPoolCtrl')

router.post('/create_deployIco', deployIcoPoolCtrl.createDeployIco)
router.get('/get_deployIco', deployIcoPoolCtrl.getDeployIco)
router.put('/update_deployIco/:_id', deployIcoPoolCtrl.updateDeployIco)
router.delete('/delete_deployIco/:_id', deployIcoPoolCtrl.deleteDeployIco)

module.exports = router