import './inputBoxes.css';
const InputRadioBoxcategory = ({ handleChangecategory, value, title, name }) => {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleChangecategory} type="radio" value={value} name={name} />
      <span className="checkmark" ></span>
      {title}
    </label>
  );
};

export default InputRadioBoxcategory;
