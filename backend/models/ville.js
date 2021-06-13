const mongoose = require('mongoose');

var villeSchema = new mongoose.Schema({ 
    date: {type : String},
    cas: {
        features:{
            attributes:{
                cas_confir: {type : Number},
                NOM: {type : String},
                OBJECTID: {type : Number},
                PRECE: {type : Number},
                VILLES_ID: {type : Number},
                }
            }
        }
}, {collection : "ville"});

const ville =  mongoose.model('ville', villeSchema);

module.exports = ville;