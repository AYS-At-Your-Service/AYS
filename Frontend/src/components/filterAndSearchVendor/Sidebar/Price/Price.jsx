// Price.jsx
import React from 'react';
import InputRadioBoxPrice from "./../../inputRadioBoxes/InputRadioboxPrice";
import textStyle from './../../../../css/text.module.css';
import { PRICE_CONSTANTS } from './PriceConstant.js';

const Price = ({ handleChangePrice }) => {
  return (
    <>
      <div>
        <h4 className={textStyle["base-text"]} style={{ padding: "10px" }}>{PRICE_CONSTANTS.TITLE}</h4>
        <div>
          {PRICE_CONSTANTS.RADIO_BOXES.map((radioBox) => (
            <InputRadioBoxPrice
              key={radioBox.value}
              handleChangePrice={handleChangePrice}
              value={radioBox.value}
              title={radioBox.label}
              name="price"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Price;
