import React , {useState , useEffect} from 'react'
import {FormControl, NativeSelect} from '@material-ui/core'
import {fetchCountries } from '../api/index'
import {  Bar } from 'react-chartjs-2'
import styles from './css/BarChart.css';
import CardComponent from './Cards';


function BarChart(props) {
    const [fetchedCountries, setFetchedCountries] = useState([])
    useEffect(() => {
        const fetchApi = async ()=> {
            setFetchedCountries( await fetchCountries())
        }
        fetchApi();
    },[setFetchedCountries])
//console.log(props.bardata.Regions)
const [Valonchange, setValeOnchange] = useState()
const [infect, setinfec] = useState()
const [death, setdeath] = useState()

 function HandleValue(event){
     //console.log(event)
     setValeOnchange(event);
 }
    return (
        
        <div className="mychartbar">
            <FormControl>
                <NativeSelect defaultValue="" onChange={(e)=>HandleValue(e.target.value)} style={{borderBottom:"1px solid rgb(255, 255, 255)" , color:"white" , marginLeft:"500px" , textAlignLast:"center"}}>
                 <option value="Global">Global</option>
                 {props.bardata?props.bardata.Regions.map((country,index) => <option   key={index} value={country.NameFR}>{country.NameFR}</option> ):null}
                </NativeSelect>
            </FormControl>
              {props.bardata ? 
             (
                props.bardata.Regions.map((country) =>  
                
                {if(Valonchange ===country.NameFR ){
                    
                    return(
                        <div className="resulttt">
                     <Bar
                     
                 data = {{
                     labels : ['Infected','Deaths'],
                     datasets : [{
                         label : 'People',
                         backgroundColor : ['#1eadb6','red'],
                         data : [country.NewConfirmed , country.NewDeaths ]
                     }]
                 }}
                  option = {{
                     scales: {yAxes:{
                         gridLines : {
                             display:false
                         }
                     }},
                     legend: {display: true},
                     title : {display: true , text: `Current state in ${props.contry}`},
                 }}
                />
                <div className="detailsData">
                <CardComponent
                className={styles.infected}
                cardTitle="Infected"
                value={ country.NewConfirmed}
                cardSubtitle="Number of active cases from COVID-19."
                /> <br/>
                <CardComponent
                className={styles.infected}
                cardTitle="Death"
                value={country.NewDeaths}
                cardSubtitle="Number of recoveries from COVID-19."
                /> 
                </div>
                </div>
                )
                    }
                }  )
             )  : null
            }
                
        </div>
    )
}

export default BarChart
