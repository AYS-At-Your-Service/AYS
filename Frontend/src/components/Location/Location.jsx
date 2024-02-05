import './Location.css'
import locationImage from '../../assets/location.svg'

export default function Location({data}){
    return(
        <>
            <div className="location-container" >

                <div className="image">
                    <img src={locationImage}></img>
                </div>
                
                <div className="location-text">
                    <div className="main-location">{data.main}</div>
                    <div className="sub-location">{data.sub}</div>
                </div>

            </div>
            <div className="breaker-small"></div>
        </>
    )
}