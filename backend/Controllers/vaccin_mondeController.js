const express = require('express');
const Vaccin_monde = require('../models/vaccin_monde');

var router = express.Router();
//getting number of vaccinated people
router.get('/', async (req,res)=>{
    try{
        const vaccinMonde = await Vaccin_monde.find();
        res.json(vaccinMonde);
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
        vaccinNumber = await Vaccin_monde.findById(req.params.id);
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