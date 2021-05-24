const deployIcoFactory = require('../Model/deployIcoModel')

const deployIcoFactoryCtrl = {
    createDeployIco : async (req, res) => {
        try{
            const {set_maxcap, sale_start_time, sale_end_time, limit_tier_one, limit_tier_two, limit_tier_three } = req.body 
            const newDeploy = await deployIcoFactory({
                set_maxcap, sale_start_time, sale_end_time, limit_tier_one, limit_tier_two, limit_tier_three 
            })
           const newDeployed = await newDeploy.save()
           console.log(newDeployed)
           if(newDeployed){
            return res.status(201).json({msg : 'Deploy New Ico is created successfully!'})
           }
            res.json('oh! Deploy New Ico is not created!')
        }catch(err){
            return res.status(500).json({msg : err.message})
        }
    },
    getDeployIco : async (req, res) => {
        try{
            const deploy_ico_factory = await deployIcoFactory.find()
            res.json({deployIcoFactory: deploy_ico_factory})
        }catch(err){
            return res.status(500).json({msg : err.message})
        }
    },

    updateDeployIco : async (req, res) => {
        try{
            const token_id = req.params._id
            const updatedDeployIco = await deployIcoFactory.updateOne({"_id": token_id}, {
                limit_tier_one: req.body.limit_tier_one,
                limit_tier_two: req.body.limit_tier_two,
                limit_tier_three: req.body.limit_tier_three,
    })
        if(updatedDeployIco){
            return res.status(201).json({msg : 'Value of tier One, Two and Three are updated successfully!'})
        }
        res.json({ message: 'tiers are not updated yet' })
        }catch(err){
            return res.status(500).json({msg : err.message})
        }
    },

    deleteDeployIco : async (req, res) => {
        try{
            const token_id = req.params._id
            const deleteToken = await deployIcoFactory.findOneAndRemove({"_id": token_id})
            if(deleteToken){
                return res.status(201).json({msg : 'Deployed New Ico is deleted successfully!'})
            }
         res.json({ message: 'Deployed New Ico is not deleted yet' })
        }catch(err){
            return res.status(500).json({msg : err.message})
        }
    }
}


module.exports = deployIcoFactoryCtrl;
