import React , {useState,useEffect} from 'react'
import './css/SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {fetchCountries,fetchRegion } from '../api/index'
import { faArrowAltCircleDown, faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'

const Accordion = ({title,name,active,setActive,setTransfer,confirm}) => {
     return(
         <div className="accordion">
             <div className="accordionHeading">
                 <div className="container1">
                      <div className="specificRegion" >
                            <div className="toleftt" >{name}</div>
                            <div className="torightt">{confirm}</div>
                      </div>
                     <span onClick={function(){setActive(title);setTransfer(name)}} >
                         {active === title ? <FontAwesomeIcon icon={faArrowAltCircleDown} /> : <FontAwesomeIcon icon={faArrowAltCircleUp} />}
                     </span>
                 </div>
             </div>
             <div className={(active === title ? "show" : "" )+ " accordionContent"}>
                 <div className="container">
                   <li className="ourfirst">
                        <ul  >
                        {/* {mesvilles?mesvilles.Regions.map((country,index) => <li><a href="/" >element 1</a></li> ):null} */}
                        </ul>
                    </li>
                 </div>
             </div>
         </div>
     )
}
function SearchBar({setCountryGraph,mesRegion}) {
    //console.log(mesRegion);
    const [searchTerms,setSearch]= useState("")
    const [active,setActive] = useState("")
    const [changeto,setChangeto]=useState(true)
    const [TransfereCount , setTransfer]=useState()
    const [fetchedCountries, setFetchedCountries] = useState([])
    const [FetchedRegion, setFetchedRegion] = useState([])
    useEffect(() => {
        const fetchApi = async ()=> {
            setFetchedCountries( await fetchCountries())
        }
        const myRegion = async ()=> {
            setFetchedRegion( await fetchRegion())
        }
        fetchApi();
        myRegion();
        setCountryGraph(TransfereCount);
    },[setFetchedCountries,setCountryGraph,TransfereCount,setFetchedRegion])
    //console.log(FetchedRegion.data)
    function handleChange(){
        setChangeto(!changeto);
    }
    return (
        <div className="Controler">
            <div className="searchbar">
            <label className="search"><FontAwesomeIcon icon={faSearch} /></label>
                 <input type="search" id="search" className="form-control" placeholder="Search by country or region" onChange={e=>{setSearch(e.target.value)}} />
            </div>
            <div className="twosection">
                <div className="sect1 commensect"><span onClick={handleChange}>Total of Ville</span> </div>
                <div className="sect2 commensect"><span onClick={handleChange}>Total of Région</span> </div>
            </div>
            {changeto ?
            <div className="section_region">
        {mesRegion?mesRegion.Cities.filter((val)=>{
            if(searchTerms==""){
                return val
            }else if(val.NameFR.toLowerCase().includes(searchTerms.toLowerCase())) {
                return val
            }
        }).map((val,index) =>  <Accordion setTransfer={setTransfer} title={index} confirm= {val.NewConfirmed} mesvilles={FetchedRegion.data} key={index} name={val.NameFR} active={active} setActive={setActive} /> ):null}
            </div>
            :<div className="section_region">
            {mesRegion?mesRegion.Regions.filter((val)=>{
                if(searchTerms==""){
                    return val
                }else if(val.NameFR.toLowerCase().includes(searchTerms.toLowerCase())) {
                    return val
                }
            }).map((val,index) =>  <Accordion setTransfer={setTransfer} title={index} confirm= {val.NewConfirmed} mesvilles={FetchedRegion.data} key={index} name={val.NameFR} active={active} setActive={setActive} /> ):null}
            </div>}
        </div>
    )
}

export default SearchBar
