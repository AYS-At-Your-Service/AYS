// AcceptedOrders.jsx
import React from 'react';
import textStyle from './../../../../css/text.module.css';
import InputRadioBoxAcceptedOrder from '../../inputRadioBoxes/InputRadioBoxAcceptedOrder.jsx';
import { ACCEPTED_ORDERS_CONSTANTS } from './AcceptedOredersConstants.js';

const AcceptedOrders = ({ handleChangeAcceptedOrder }) => {
  return (
    <>
      <div>
        <h4 className={textStyle["base-text"]} style={{ padding: "10px" }}>{ACCEPTED_ORDERS_CONSTANTS.TITLE}</h4>
        <div>
          {ACCEPTED_ORDERS_CONSTANTS.RADIO_BOXES.map((radioBox) => (
            <InputRadioBoxAcceptedOrder
              key={radioBox.value}
              handleChangeAcceptedOrder={handleChangeAcceptedOrder}
              value={radioBox.value}
              title={radioBox.label}
              name="acceptedOrders"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AcceptedOrders;
