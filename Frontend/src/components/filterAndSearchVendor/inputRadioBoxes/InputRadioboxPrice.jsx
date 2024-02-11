import './inputBoxes.css';
const InputRadioBoxPrice = ({ handleChangePrice, value, title, name, color }) => {
    return (
      <label className="sidebar-label-container">
        <input onChange={handleChangePrice} type="radio" value={value} name={name} />
        <span className="checkmark" style={{ backgroundColor: color }}></span>
        {title}
      </label>
    );
  };
  
  export default InputRadioBoxPrice;
  