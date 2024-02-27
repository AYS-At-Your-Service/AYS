// Category.jsx
import React from 'react';
import InputRadioBoxcategory from "./../../inputRadioBoxes/InputRadioBoxcategory.jsx";
import textStyle from './../../../../css/text.module.css';
import { CATEGORY_CONSTANTS } from './CategoryConstants.js';

function Category({ handleChangecategory }) {
  return (
    <div>
      <h2 className={textStyle["base-text"]} style={{ padding: "10px" }}>{CATEGORY_CONSTANTS.TITLE}</h2>

      <div>
        {CATEGORY_CONSTANTS.RADIO_BOXES.map((radioBox) => (
          <InputRadioBoxcategory
            key={radioBox.value}
            handleChangecategory={handleChangecategory}
            value={radioBox.value}
            title={radioBox.label}
            name="category"
          />
        ))}
      </div>
    </div>
  );
}

export default Category;
