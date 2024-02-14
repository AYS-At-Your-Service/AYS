// Ratings.jsx
import InputRadioBoxRatings from "./../../inputRadioBoxes/InputRadioBoxRating";

import './../../../../css/text.module.css';
const Ratings = ({ handleChangeRatings }) => {
  return (
    <>
      <div>
        <h4 className="base-text" style={{padding:"10px"}}>Ratings Of the service</h4>
        <label className="sidebar-label-container">
          <input onChange={handleChangeRatings} type="radio" value="" name="ratings" />
          <span className="checkmark"></span>All
          </label>
        <div>
          <InputRadioBoxRatings
            handleChangeRatings={handleChangeRatings}
            value="1"
            title="1 and up"
            name="ratings"
          />
          <InputRadioBoxRatings
            handleChangeRatings={handleChangeRatings}
            value="2"
            title="2 and up"
            name="ratings"
          />
          <InputRadioBoxRatings
            handleChangeRatings={handleChangeRatings}
            value="3"
            title="3 and up"
            name="ratings"
          />
          <InputRadioBoxRatings
            handleChangeRatings={handleChangeRatings}
            value="4"
            title="4 and up"
            name="ratings"
          />
        </div>
      </div>
    </>
  );
};

export default Ratings;
