// Recommended.jsx
import React from 'react';
import Button from './../cardAndButton/Button.jsx';
import RecommendedCss from  "./Recommended.module.css";
import btnStyle from './../../../css/button.module.css';
import { RECOMMENDED_TEXT } from './RecommendedConstants.js';  

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h4 className={RecommendedCss["recommended-title"]}>{RECOMMENDED_TEXT.title}</h4>
        <div className={RecommendedCss["recommended-flex"]}>
          <Button class={btnStyle["login-btn:hover"]} onClickHandler={handleClick} value="" title={RECOMMENDED_TEXT.allVendors} />
          <Button class={btnStyle["login-btn:hover"]} onClickHandler={handleClick} value="Carpenter" title={RECOMMENDED_TEXT.carpenter} />
          <Button class={btnStyle["login-btn:hover"]} onClickHandler={handleClick} value="Plumber" title={RECOMMENDED_TEXT.plumber} />
          <Button class={btnStyle["login-btn:hover"]} onClickHandler={handleClick} value="Electrician" title={RECOMMENDED_TEXT.electrician} />
        </div>
      </div>
    </>
  );
};

export default Recommended;
