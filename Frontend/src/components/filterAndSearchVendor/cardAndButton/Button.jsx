import React from 'react';
import './../../../css/button.module.css';

const Button = ({ onClickHandler, value, title }) => {
  return (
    <button onClick={onClickHandler} value={value} className="btn">
      {title}
    </button>
  );
};

export default Button;
