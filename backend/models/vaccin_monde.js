const mongoose = require('mongoose');

var vaccinMondeSchema = new mongoose.Schema({
    date:{
        type:String
    } ,
    nbr:{
        type:Number
    }      
},{collection:"vaccin_monde"});

const vmonde =  mongoose.model('vaccin_monde', vaccinMondeSchema);

module.exports = vmonde;