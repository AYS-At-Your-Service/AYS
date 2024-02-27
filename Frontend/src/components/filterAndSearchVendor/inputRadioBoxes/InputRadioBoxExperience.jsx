import inputCss from'./InputBoxes.module.css';
const InputRadioBoxExperience = ({ handleChangeExperience, value, title, name, color }) => {
    return (
      <label className={inputCss["sidebar-label-container"]}>
        <input onChange={handleChangeExperience} type="radio" value={value} name={name} />
        <span className={inputCss["checkmark"]}  style={{ backgroundColor: color }}></span>
        {title}
      </label>
    );
  };
  
  export default InputRadioBoxExperience;
  