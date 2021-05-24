const router = require('express').Router()
const icoPoolCtrl = require('../Controller/icoPoolCtrl')

router.post('/create_IcoToken', icoPoolCtrl.createIcoToken)
router.get('/get_IcoPool', icoPoolCtrl.getIcoToken)
router.put('/update_token/:_id', icoPoolCtrl.updateIcoToken)
router.delete('/delete_token/:_id', icoPoolCtrl.deleteIcoToken)

module.exports = router