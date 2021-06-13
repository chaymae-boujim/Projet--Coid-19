import React, {useEffect , useState} from 'react'
import './css/Grapheline.css';
import { Line } from 'react-chartjs-2'
import {fetchDailyData,fetchDataCountryy} from '../api/index'

function Grapheline({country,datagraphe}) {
  const [dailyData, setDailyData]= useState([]);
  const [dataVille ,setDataVille] = useState()

  useEffect(() => {
    const FetchApi = async () => {
      setDailyData(await fetchDailyData());
    }
    async function handleChangeCountry (country){
      const fetchedData = await fetchDataCountryy(country);
      setDataVille(fetchedData)
    }
    handleChangeCountry(country);
    FetchApi();
  }, [country]);
  const [selectedValue,setSelectedValue,]=useState(0)

  function handleChange(e){
    setSelectedValue(e.target.value);
  }
  function ShowAll(event) {
    setSelectedValue(12);
    event.target.style.border = "1px solid rgb(255, 255, 255)"
  }
  
  const size = parseInt(selectedValue) ;
  const items = (size === 12)? datagraphe : datagraphe? datagraphe.slice(size, 6+size) : null;
  
  //console.log(datagraphe);
console.log(items)
  return (
        <div className="globbgraph">
            <div className="tocontrolmyGraph">
                <div className="toleftat">
                    <select className="myoption" value={selectedValue} onChange={handleChange} >
                    <option value="6">First week</option>
                    <option value="1">Second week</option>
                    </select>
                </div>
                <div className="torightat">
                    <div className="sectt" value="12" onClick={ShowAll}  > Cases Over Time</div>
                </div>
            </div>
            <div className="resultGraph">
              {items?
              (
                <Line
                data={{
                  labels:items.map((country)=>country.Date.split('T')[0]),
                  datasets:[{
                    data : items.map((country)=>country.Maroc.NewConfirmed )  ,
                    label : 'Infected',
                    borderColor : 'green',
                    fill : true
                  },{
                    data :items.map((country)=>country.Maroc.NewDeaths ),
                    label : 'Deaths',
                    borderColor : 'red',
                    fill : true
                  },{
                    data :items.map((country)=>country.Maroc.NewRecovered ),
                    label : 'Recovered',
                    borderColor : 'blue',
                    fill : true
                  }],
                }}
                />
              ):null
              }
            </div>
        </div>
    )
}

export default Grapheline
