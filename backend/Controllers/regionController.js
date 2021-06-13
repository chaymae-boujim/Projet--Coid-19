const express = require('express');
const regionModel = require('../models/region');

var router = express.Router();
//getting number of vaccinated people
/*router.get('/', (req,res)=>{
        regionModel.find((err, docs) => {
            if(!err){
                res.render("stats/show_all",{
                    list: docs
                });
            }
            else{
                res.status(500).json({message: err.message});
            }

            });
        });*/

router.get('/', async (req,res)=>{
    try{
        const regiondata = await regionModel.find({date : "28/05/2021"}, { date: 1});
        res.json(regiondata);
    }catch(err) {
        res.status(500).json({message: err.message});
    }
    //res.json('sample text');
});

//getting number of vaccinated people in a date
router.get('/:id', getRegion , (req,res)=>{
    res.send(res.region);
});

async function getRegion(req, res, next){
    let region;
    try{
        region = await regionModel.findById(req.params.id);
        if(region == null){
            return res.status(404).json({message : 'NO DATA FOR THIS DATE'});
        }
    }catch(err){
        return res.status(500).json({message : err.message });
    }
    res.region = region;
    next();
}


module.exports = router;