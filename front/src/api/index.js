import axios from 'axios' ;

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
    try {
        const {data : {confirmed,recovered,deaths,lastUpdate}} = await axios.get(url) ;
        //console.log(response)
        const modifiedData = {
            confirmed ,
            recovered ,
            deaths ,
            lastUpdate ,
        }
        return modifiedData;
    }catch(error) {

    }
}
//api for all data
export const fetchDatar = async () => {
    try {
        const reponse = await axios.get("http://localhost:3010/stats/covid") ;
        //console.log(response)
        
        return reponse;
    }catch(error) {
    }
}
//testt
export const fetchRegion = async () => {
    try {
        const reponse = await axios.get("http://localhost:3010/stats/regionsvilles") ;        
        return reponse;
    }catch(error) {
    }
}
// fin test
export const fetchDailyData = async () => {
    try {
        const  {data} = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate,
        }))
        return modifiedData;
    } catch (error){

    }
}
export const fetchCountries =  async ()=> {
    try {
        const {data : {countries}} = await axios.get(`${url}/countries`);
        //console.log(countries.map((country)=>country.name));
        return countries.map((country)=>country.name)
    }catch (error){
    }
}

export const fetchDataCountryy = async (country) => {
    try {
        const {data : {confirmed,recovered,deaths,lastUpdate}} = await axios.get(`${url}/countries/${country}`) ;
        //console.log(response)
        const modifiedData = {
            confirmed ,
            recovered ,
            deaths ,
            lastUpdate ,
        }
        // console.log("before")
        // console.log(modifiedData);
        // console.log("after")
        return modifiedData;
    }catch(error) {
    }
}