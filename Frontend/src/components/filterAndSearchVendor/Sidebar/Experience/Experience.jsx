// Experience.jsx
import React from 'react';
import InputRadioBoxExperience from "./../../inputRadioBoxes/InputRadioBoxExperience";
import textStyle from './../../../../css/text.module.css';
import { EXPERIENCE_CONSTANTS } from './ExperinceConstants.js';

const Experience = ({ handleChangeExperience }) => {
  return (
    <>
      <div>
        <h4 className={textStyle["base-text"]} style={{ padding: "10px" }}>{EXPERIENCE_CONSTANTS.TITLE}</h4>
        <div>
          {EXPERIENCE_CONSTANTS.RADIO_BOXES.map((radioBox) => (
            <InputRadioBoxExperience
              key={radioBox.value}
              handleChangeExperience={handleChangeExperience}
              value={radioBox.value}
              title={radioBox.label}
              name="experience"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
