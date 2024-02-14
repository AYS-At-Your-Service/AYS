import InputRadioBoxPrice from "./../../inputRadioBoxes/InputRadioboxPrice";

import textStyle from './../../../../css/text.module.css';
const Price = ({ handleChangePrice }) => {
  return (
    <>
      <div>
        <h4 className={textStyle["base-text"]} style={{padding:"10px"}}>Hourly price Range</h4>
        <div>
          <label className="sidebar-label-container">
            <input onChange={handleChangePrice} type="radio" value="" name="price" />
            <span className="checkmark"></span>All
          </label>

          <InputRadioBoxPrice
            handleChangePrice={handleChangePrice}
            value="200"
            title="under200"
            name="price"
          />
          <InputRadioBoxPrice
            handleChangePrice={handleChangePrice}
            value="500"
            title="under500"
            name="price"
          />
          <InputRadioBoxPrice
            handleChangePrice={handleChangePrice}
            value="700"
            title="under700"
            name="price"
          />
          <InputRadioBoxPrice
            handleChangePrice={handleChangePrice}
            value="1000"
            title="under1000"
            name="price"
          />
          <InputRadioBoxPrice
            handleChangePrice={handleChangePrice}
            value="2000"
            title="under2000"
            name="price"
          />
        </div>
      </div>
    </>
  );
};

export default Price;
