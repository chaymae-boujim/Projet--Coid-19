const mongoose = require('mongoose');

var regionSchema = new mongoose.Schema({ 
    date: {type : String},
    cas: {
        features:{
            attributes:{
                Cases: {type:Number}, 
                Deaths: {type:Number},
                Nom_Region_FR: {type : String},
                OBJECTID: {type:Number},
                Recoveries: {type:Number},
                }
            }
        }
},{collection : "region"});

const region =  mongoose.model('region', regionSchema);

module.exports = region;