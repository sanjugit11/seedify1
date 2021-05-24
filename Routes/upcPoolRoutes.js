const router = require('express').Router()
const upcPoolCtrl = require('../Controller/upcPoolCtrl')


router.post('/create_upcPool', upcPoolCtrl.createUpcPool)
router.get('/get_upcPool', upcPoolCtrl.getUpcPool)
router.get('/getPool/:id', upcPoolCtrl.getPoolbyId)
router.get("/getPool_byPagignation", upcPoolCtrl.getPoolByPagignation);
router.put("/update_upcPool", upcPoolCtrl.updateUpcPool);



router.post('/upload', (req, res) => {
    try {
        var file = req.files.file
        var filename = file.name
        var id = req.body.id
        var name = id + filename
        file.mv('./frontend/src/static/'+name)
        
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
})

router.post('/update_img', (req, res) => {
    try{
        var file = req.files.file
        var imgname = req.body.imgname
        console.log(imgname, "hey Ashu")
        console.log(file)
        file.mv('./frontend/src/static/'+imgname)
    }catch(err){
        res.status(500).json({msg : err.message})
    }
})
module.exports = router