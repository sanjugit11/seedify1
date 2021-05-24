const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    project_id : {
        type : String,
        required : true,   
    },
    tier_limit : {
        type : String,
        required : true,
        trim : true
    },
    address : {
        type : String,
        required : true
    },
    status : {
        type : Number,
        default : 0
    } 
},{
    timestamps: true
})

module.exports = mongoose.model('projects', projectSchema)