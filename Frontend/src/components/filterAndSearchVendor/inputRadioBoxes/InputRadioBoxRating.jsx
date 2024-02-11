import './inputBoxes.css';
const InputRadioBoxRatings = ({ handleChangeRatings, value, title, name, color }) => {
    return (
      <label className="sidebar-label-container">
        <input onChange={handleChangeRatings} type="radio" value={value} name={name} />
        <span className="checkmark" style={{ backgroundColor: color }}></span>
        {title}
      </label>
    );
  };
  
  export default InputRadioBoxRatings;
  