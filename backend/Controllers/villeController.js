const express = require('express');
const villeModel = require('../models/ville');

var router = express.Router();
//getting all stats
router.get('/', async (req,res)=>{
    try{
        const statsVille = await villeModel.find();
        res.json(statsVille);
    }catch(err) {
        res.status(500).json({message: err.message});
    }
    //res.json('sample text');
});
//getting number of vaccinated people in a date
router.get('/:id', getVille , (req,res)=>{
    res.send(res.ville);
});

async function getVille(req, res, next){
    let ville;
    try{
        ville = await villeModel.findById(req.params.id);
        if(ville == null){
            return res.status(404).json({message : 'NO DATA FOR THIS DATE'});
        }
    }catch(err){
        return res.status(500).json({message : err.message });
    }
    res.ville = ville;
    next();
}


module.exports = router;