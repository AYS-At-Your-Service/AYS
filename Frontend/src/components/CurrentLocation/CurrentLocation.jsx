import currentLocation from '../../assets/currentLocation.svg'
import './currentLocation.css'
const CurrentLocation = () => {
  const getCurrentCity = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const successCallback = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
      .then(response => response.json())
      .then(data => {
        const city = data.city;
        console.log(`Current city: ${city}`);
      })
      .catch(error => {
        console.error("Error fetching city information:", error);
      });
  };

  const errorCallback = (error) => {
    console.error("Error getting location:", error.message);
  };

  return (
    <div className='current-location-container'  onClick={getCurrentCity}>
      <img src={currentLocation} alt="" className='image' />
      <div className="text">Use current location</div>
    </div>
  );
};

export default CurrentLocation;
