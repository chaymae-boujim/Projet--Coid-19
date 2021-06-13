import React from 'react'
import './css/Average.css';
import { Tooltip } from 'chart.js';

function Average({dataAverage}) {
    function toarround(Toto){
        var myvr = Toto/34700000*100
        var totalvacin1 = myvr.toFixed(2);
        return totalvacin1
    }
    
    return (
        
        <div className="myAverage">
            <div className="toleft">
                <div className="twoweekfirst changeIn">
                    <div className="titleone">
                        <div className="lefthand sametil">First Category of Injection Dose</div>
                        <div className="righthand samenum">{dataAverage?toarround(dataAverage.Maroc.TotalVaccinated1):null}%</div>
                    </div>
                    <div className="tothebar">
                        <div className="barr">
                        </div>
                    </div>
                    <div className="titiletwo">
                        <div className="lefthand sametil">Average New Cases Yesterday</div>
                        <div className="righthand samenum">{dataAverage?dataAverage.Maroc.TotalVaccinated1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):null}</div>
                    </div>
                    <div className="titlethree">
                        <div className="lefthand sametil">Average New Cases 2 Weeks Ago</div>
                        <div className="righthanda">556,003</div>
                    </div>
                </div>
            </div>
            <div className="toright">
            <div className="twoweekfirst changeIn">
                    <div className="titleone">
                        <div className="lefthand sametil sl">Second Category of Injection Dose</div>
                        <div className="righthand samenum">{dataAverage?toarround(dataAverage.Maroc.TotalVaccinated2):null}%</div>
                    </div>

                    <div className="tothebar">
                        <div className="barra">
                        </div>
                    </div>

                    
                    <div className="titiletwo">
                        <div className="lefthand sametil sp">Average Deaths Yesterday</div>
                        <div className="righthand samenum">{dataAverage?dataAverage.Maroc.TotalVaccinated2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):null}</div>
                    </div>
                    <div className="titlethree">
                        <div className="lefthand sametil sq">Average Deaths 2 Weeks Ago</div>
                        <div className="righthanda">11,910</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Average
