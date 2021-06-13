const mongoose = require('mongoose');


//const URL = "mongodb+srv://db01-mongo:db01-mongo@cluster0.bgnjg.mongodb.net/Covid19?retryWrites=true&w=majority";

mongoose.connect('mongodb://localhost:27017/Covid', { useNewUrlParser: true, useUnifiedTopology: true }, (err)=>{
    if(!err){console.log('CONNECTION SUCCEEDED')}
    else{ console.log('ERROR : ',+err)}
});


//require('./models/vaccin_maroc');