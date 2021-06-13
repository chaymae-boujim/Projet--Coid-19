import './App.css';
import {useEffect,useState} from 'react'
import Header from './Components/Header'
import Cases from './Components/Cases';
import Average from './Components/Average';
import SearchBar from './Components/SearchBar';
import Grapheline from './Components/Grapheline';
import {fetchData,fetchDatar} from './api/index'
import {fetchDataCountryy} from './api/index'
//import axios from 'axios' ;

import BarChart from './Components/BarChart';
function App() {
  
  const [data ,setData] = useState()
  const [datarInitial ,setDatarInitial] = useState()
  const [dataForgraph,setDataforGraph]= useState()
  const [countryy ,setCountryy] = useState()
  const [dataBar ,setDataBar] = useState()
  const [countryGraph,setCountryGraph] = useState()

  useEffect( () => {
    async function FetchMyApi() {
      const dataa = await fetchData();
      setData(dataa)
    }
    async function FetchMyApirr() {
      const dataar = await fetchDatar();
      setDatarInitial(dataar.data[0])
      setDataforGraph(dataar.data)
    }
    FetchMyApi()
    FetchMyApirr()
  }, []);

console.log(datarInitial)
//   useEffect(() => {
//     async function fetchDataouch(){
//     try {
//         const response = await axios.get("https://covid19.mathdro.id/api/daily") ;
//         console.log(response)
//         console.log(response.data)
//         return modifiedData;
//     }catch(error) {

//     }
// }
// fetchDataouch()
// }, []);
  //console.log(data)

  async function handleChangeCountry (country){
    const fetchedData = await fetchDataCountryy(country);
    setDataBar(fetchedData)
    setCountryy(country)    
}

//console.log("ma nouvelle ville est "+countryGraph);

  return (
    <div className="App">
      <Header />
      <hr className="trait" />
      <div className="devideCompo">
        <div className="left">
        <SearchBar mesRegion= {datarInitial} setCountryGraph = {setCountryGraph}/>
        </div>
        <div className="right">
          <Cases datacases={datarInitial}/>
          <Average dataAverage={datarInitial}/>
          <Grapheline country={countryGraph} datagraphe={dataForgraph}/>
        </div>
      </div>
      <BarChart HandleCompo ={handleChangeCountry} bardata={datarInitial} contry={countryy} databrr={dataBar} />
    </div>
  );
}

export default App;
