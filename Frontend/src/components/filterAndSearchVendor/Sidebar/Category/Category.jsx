import InputRadioBoxcategory from "./../../inputRadioBoxes/InputRadioBoxcategory.jsx";

import './../../../../css/text.module.css';

function Category({ handleChangecategory }) {
  return (
    <div>
      <h4 className="base-text" style={{padding:"10px"}}>Choose the service</h4>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChangecategory} type="radio" value="" name="category" />
          <span className="checkmark"></span>All
        </label>

        <InputRadioBoxcategory
          handleChangecategory={handleChangecategory}
          value="Electrician"
          title="Electrician"
          name="category"
        />
        <InputRadioBoxcategory
          handleChangecategory={handleChangecategory}
          value="Plumber"
          title="Plumber"
          name="category"
        />
        <InputRadioBoxcategory
          handleChangecategory={handleChangecategory}
          value="Carpenter"
          title="Carpenter"
          name="category"
        />
      </div>
    </div>
  );
}

export default Category;
