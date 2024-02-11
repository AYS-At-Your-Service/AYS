import './inputBoxes.css';

const InputRadioBoxAcceptedOrder = ({ handleChangeAcceptedOrder, value, title, name, color }) => {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleChangeAcceptedOrder} type="radio" value={value} name={name} />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
};

export default InputRadioBoxAcceptedOrder;
