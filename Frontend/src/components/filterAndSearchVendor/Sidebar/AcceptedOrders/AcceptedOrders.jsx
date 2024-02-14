// AcceptedOrders.jsx

import './../../../../css/text.module.css';
import InputRadioBoxAcceptedOrder from './../../inputRadioBoxes/InputRadioBoxAcceptedOrder.jsx';
const AcceptedOrders = ({ handleChangeAcceptedOrder }) => {
  return (
    <>
      <div>
        <h4 className="base-text" style={{padding:"10px"}}>Number of Accepted Orders</h4>
        <label className="sidebar-label-container">
          <input onChange={handleChangeAcceptedOrder} type="radio" value="" name="acceptedOrders" />
          <span className="checkmark"></span>All
        </label>
        <div>
          <InputRadioBoxAcceptedOrder
            handleChangeAcceptedOrder={handleChangeAcceptedOrder}
            value="0-10"
            title="0-10"
            name="acceptedOrders"
          />
          <InputRadioBoxAcceptedOrder
            handleChangeAcceptedOrder={handleChangeAcceptedOrder}
            value="11-20"
            title="11-20"
            name="acceptedOrders"
          />
          <InputRadioBoxAcceptedOrder
            handleChangeAcceptedOrder={handleChangeAcceptedOrder}
            value="21-30"
            title="21-30"
            name="acceptedOrders"
          />
          <InputRadioBoxAcceptedOrder
            handleChangeAcceptedOrder={handleChangeAcceptedOrder}
            value="31-50"
            title="31-50"
            name="acceptedOrders"
          />
          <InputRadioBoxAcceptedOrder
            handleChangeAcceptedOrder={handleChangeAcceptedOrder}
            value="51-80"
            title="51-80"
            name="acceptedOrders"
          />
          <InputRadioBoxAcceptedOrder
            handleChangeAcceptedOrder={handleChangeAcceptedOrder}
            value="81-100"
            title="81-100"
            name="acceptedOrders"
          />
          <InputRadioBoxAcceptedOrder
            handleChangeAcceptedOrder={handleChangeAcceptedOrder}
            value="100+"
            title="100+"
            name="acceptedOrders"
          />
        </div>
      </div>
    </>
  );
};

export default AcceptedOrders;
