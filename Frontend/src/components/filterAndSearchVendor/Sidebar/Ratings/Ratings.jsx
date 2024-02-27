// Ratings.jsx
import React from 'react';
import InputRadioBoxRatings from "./../../inputRadioBoxes/InputRadioBoxRating";
import textStyle from './../../../../css/text.module.css';
import { RATINGS_CONSTANTS } from './RatingConstant.js';

const Ratings = ({ handleChangeRatings }) => {
  return (
    <>
      <div>
        <h4 className={textStyle["base-text"]} style={{ padding: "10px" }}>{RATINGS_CONSTANTS.TITLE}</h4>
        <div>
          {RATINGS_CONSTANTS.RADIO_BOXES.map((radioBox) => (
            <InputRadioBoxRatings
              key={radioBox.value}
              handleChangeRatings={handleChangeRatings}
              value={radioBox.value}
              title={radioBox.label}
              name="ratings"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Ratings;
