import InputRadioBoxcategory from "./../../inputRadioBoxes/InputRadioBoxcategory.jsx";

import './../../../../css/Text.css';

function Category({ handleChangecategory }) {
  return (
    <div>
      <h2 className="base-text">Choose the service </h2>

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
