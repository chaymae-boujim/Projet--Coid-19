const mongoose = require('mongoose');

var regionVillesSchema = new mongoose.Schema({ 
    idRegion : {
        type : Number
    },
    Villes : {
        type : Array
    }
},{collection : "Regions-villes"});

const regionvilles =  mongoose.model('Region-villes', regionVillesSchema);

module.exports = regionvilles;