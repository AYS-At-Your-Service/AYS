import currentLocation from '../../assets/currentLocation.svg'
import './currentLocation.css'
import {USECURRENTLOCATION} from './CurrentLocation.constant';
const CurrentLocation = () => {
  const getCurrentCity = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback);
    } 
  };

  const successCallback = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
      .then(response => response.json())
      .then(data => {
        const city = data.city;
      })
  };

  return (
    <div className='current-location-container'  onClick={getCurrentCity}>
      <img src={currentLocation} alt="" className='image' />
      <div className="text">{USECURRENTLOCATION}</div>
    </div>
  );
};

export default CurrentLocation;
