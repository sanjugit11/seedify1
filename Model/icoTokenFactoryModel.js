const mongoose = require('mongoose');

const icoPoolSchema = mongoose.Schema({
    ico_name : {
        type : String,
        unique : true,
        required : true
    },
    total_supply : {
        type :  Number,
        required : true
    },
    ico_symbol : {
        type : String,
        required : true
    },
    token_price : {
        type : Number,
        required : true
    },
    start_date : {
        type: Date,
		default: Date.now,
        required : true,
    },
    end_date : {
        type : Date,
        required : true
    },
   
}, {
    timestamps : true
})

module.exports = mongoose.model('icoPool', icoPoolSchema)