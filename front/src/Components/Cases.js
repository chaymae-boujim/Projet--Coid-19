import React from 'react'
import './css/Cases.css';
import CountUp from 'react-countup'
function Cases({datacases}) {
    
    if(!datacases ){
        return 'loading...';
    }
    /*var nf = new Intl.NumberFormat();
    var myvar =nf.format(props.datacases.recovered.value);*/
    return (
    <div className="forintroduction">
        <div className="miniintro">
        Last updated: {new Date(datacases.Date).toDateString()} EDT</div>
        <div className="mycases">
            <div className="total blocks">
                <div className="totocase"> <span className="bg-warning"></span>TOTAL CASES</div>   
                <strong className="inline-block" >
                    <CountUp start={0} end= {datacases.Maroc.TotalConfirmed} duration= {2.9} separator = "," />
                </strong>
            </div>
            <div className="firstc blocks">
            <div className="totocase"> <span className="bg-warning cblanc"></span>FIRST CASE</div>   
                <strong className="inline-block" ><CountUp start={0} end= {datacases.Maroc.TotalActif} duration= {2.9} separator = "," /> <div className="dayago">14DAYS AGO</div></strong>
            </div>
            <div className="recoverd blocks">
            <div className="totocase"> <span className="bg-warning cvert"></span>RECOVERED</div>   
                <strong className="inline-block" >
                <CountUp start={0} end= {datacases.Maroc.TotalRecovered} duration= {2.9} separator = "," />
                </strong>
            </div>
            <div className="death blocks">
            <div className="totocase"> <span className="bg-warning crouge"></span>DEATHS</div>   
                <strong className="inline-block" >
                <CountUp start={0} end= {datacases.Maroc.TotalDeaths} duration= {2.9} separator = "," />
                </strong>
            </div>
        </div>
     </div>  
    )
}

export default Cases
