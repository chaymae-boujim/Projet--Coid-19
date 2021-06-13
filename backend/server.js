require('./db');

const express = require('express');
const cors = require('cors');

const vaccin_marocController = require('./controllers/vaccin_marocController');
const vaccin_mondeController = require('./controllers/vaccin_mondeController');
const regionController = require('./controllers/regionController');
const villeController = require('./controllers/villeController');
const regionsVillesController = require('./controllers/regionsvillesController');
const Covid19CollController = require('./controllers/Covid19CollController');
const path = require('path');
const exphbs = require('express-handlebars');

var app = express();
app.use(cors());

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({extname : 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname+'/views/layouts/'}));
app.set('view engine', 'hbs');
app.listen(3010, ()=>{
    console.log("EXPRESS SERVER : PORT 3010");
});

app.use(express.json());

//app.use('/vaccin/maroc', vaccin_marocController);

//app.use('/vaccin/monde', vaccin_mondeController);

//app.use('/stats/region', regionController);

//app.use('/stats/ville', villeController);

app.use('/stats/covid', Covid19CollController);

app.use('/stats/regionsvilles', regionsVillesController);