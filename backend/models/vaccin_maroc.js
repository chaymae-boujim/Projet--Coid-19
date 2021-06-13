const mongoose = require('mongoose');

var vaccinMarocSchema = new mongoose.Schema({
    date:{
        type:String
    } ,
    nbr:{
        type:Number
    }      
},{collection:"vaccin_maroc"});

const vm =  mongoose.model('vaccin_maroc', vaccinMarocSchema);

module.exports = vm;