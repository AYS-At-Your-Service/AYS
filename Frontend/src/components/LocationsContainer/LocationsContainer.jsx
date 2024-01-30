import { memo } from "react";
import './LocationsContainer.css'
import Location from "../Location/Location";
const LocationsContainer=memo(({data})=>{
    return(
        <div className="locations-container">
            {data.map((ele)=>{ 
                return(
                    <Location key={ele.key} data={ele}></Location>
                )
            })}
        </div>
    )

})

export default LocationsContainer