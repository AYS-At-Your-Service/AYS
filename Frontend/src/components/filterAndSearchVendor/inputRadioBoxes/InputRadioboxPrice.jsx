import inputCss from'./InputBoxes.module.css';
const InputRadioBoxPrice = ({ handleChangePrice, value, title, name, color }) => {
    return (
      <label className={inputCss["sidebar-label-container"]}>
        <input onChange={handleChangePrice} type="radio" value={value} name={name} />
        <span className={inputCss["checkmark"]} style={{ backgroundColor: color }}></span>
        {title}
      </label>
    );
  };
  
  export default InputRadioBoxPrice;
  