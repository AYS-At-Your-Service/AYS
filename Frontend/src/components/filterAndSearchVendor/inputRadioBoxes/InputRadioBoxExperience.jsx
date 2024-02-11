import './inputBoxes.css';
const InputRadioBoxExperience = ({ handleChangeExperience, value, title, name, color }) => {
    return (
      <label className="sidebar-label-container">
        <input onChange={handleChangeExperience} type="radio" value={value} name={name} />
        <span className="checkmark" style={{ backgroundColor: color }}></span>
        {title}
      </label>
    );
  };
  
  export default InputRadioBoxExperience;
  