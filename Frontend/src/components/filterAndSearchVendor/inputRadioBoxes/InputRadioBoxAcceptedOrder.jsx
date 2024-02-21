import inputCss from'./InputBoxes.module.css';

const InputRadioBoxAcceptedOrder = ({ handleChangeAcceptedOrder, value, title, name, color }) => {
  return (
    <label className={inputCss["sidebar-label-container"]}>
      <input onChange={handleChangeAcceptedOrder} type="radio" value={value} name={name} />
      <span className={inputCss["checkmark"]} style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
};

export default InputRadioBoxAcceptedOrder;
