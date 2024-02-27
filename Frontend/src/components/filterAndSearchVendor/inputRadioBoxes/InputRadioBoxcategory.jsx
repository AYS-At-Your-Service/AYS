import inputCss from './InputBoxes.module.css';
const InputRadioBoxcategory = ({ handleChangecategory, value, title, name }) => {
  return (
    <label className={inputCss["sidebar-label-container"]}>
      <input onChange={handleChangecategory} type="radio" value={value} name={name} />
      <span className={inputCss["checkmark"]}  ></span>
      {title}
    </label>
  );
};

export default InputRadioBoxcategory;
