import React from 'react';
import btnStyles from './../../../css/button.module.css';

const Button = ({ onClickHandler, value, title }) => {
  return (
    <button onClick={onClickHandler} value={value} className={btnStyles['large-btn:hover']}>
      {title}
    </button>
  );
};

export default Button;
