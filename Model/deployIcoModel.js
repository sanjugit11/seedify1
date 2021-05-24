const mongoose = require('mongoose');

const deployIcoPoolSchema = mongoose.Schema({
    set_maxcap : {
        type : Number,
        required : true
    },
    sale_start_time : {
        type: Date,
        default: Date,
        required : true
    },
    sale_end_time : {
        type: Date,
        required : true
    },
    limit_tier_one : {
        type : Number,
        required : true
    },
    limit_tier_two : {
        type : Number,
        required : true,
    },
    limit_tier_three : {
        type : Number,
        required : true
    },
   
}, {
    timestamps : true
})

module.exports = mongoose.model('deployIcoPool', deployIcoPoolSchema)