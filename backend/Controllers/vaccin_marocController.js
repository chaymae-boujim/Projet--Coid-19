const express = require('express');
const Vaccin_maroc = require('../models/vaccin_maroc');

var router = express.Router();
//getting number of vaccinated people
router.get('/', async (req,res)=>{
    try{
        const vaccinMaroc = await Vaccin_maroc.find();
        res.json(vaccinMaroc);
    }catch(err) {
        res.status(500).json({message: err.message});
    }
    //res.json('sample text');
});
//getting number of vaccinated people in a date
router.get('/:id', getVaccin , (req,res)=>{
    res.send(res.vaccinNumber);
});

async function getVaccin(req, res, next){
    let vaccinNumber;
    try{
        vaccinNumber = await Vaccin_maroc.findById(req.params.id);
        if(vaccinNumber == null){
            return res.status(404).json({message : 'NO DATA FOR THIS DATE'});
        }
    }catch(err){
        return res.status(500).json({message : err.message });
    }
    res.vaccinNumber = vaccinNumber;
    next();
}


module.exports = router;