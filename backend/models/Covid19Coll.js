const mongoose = require('mongoose');

var Covid19CollSchema = new mongoose.Schema({ 
    date: {type : Date},
    Maroc:{
        NewConfirmed : {
            type: Number
        },
        NewDeaths : {
            type: Number
        },
        NewRecovered : {
            type: Number
        },
        TotalActif: {
            type: Number
        },
        TotalConfirmed : {
            type: Number
        },
        TotalVaccinated1:{
            type : Number
        },
        TotalVaccinated2:{
            type : Number
        }
    },
    Cities:{
        Date : {
            type: String
        },
        IdVille : {
            type: Number
        },
        NameAR : {
            type: String
        },
        NameFR: {
            type: String
        },
        NewConfirmed: {
            type: Number
        },
        NewDeaths:{
            type : Number
        },
    },
},{collection : "Covid19Coll"});

const covid19coll =  mongoose.model('Covid19Coll', Covid19CollSchema);

module.exports = covid19coll;