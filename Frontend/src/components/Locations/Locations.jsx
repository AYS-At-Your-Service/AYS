import { memo } from "react";
import './Locations.css'
import locationImage from '../../assets/location.svg'
const Locations=memo(({data})=>{
    return(
        <div className="locations-container">
            {data.map((ele)=>{ 
                return(
                <>
                    <div className="location-container">
                        <div className="image">
                        <img src={locationImage}></img>
                        </div>
                       
                        <div className="location-text">
                            <div className="main-location">{ele.main}</div>
                            <div className="sub-location">{ele.sub}</div>
                        </div>
                    </div>
                    <div className="breaker-small"></div>
                </>
                )
            })}
        </div>
    )

})

export default Locations