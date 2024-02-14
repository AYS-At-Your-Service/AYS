import Button from './../cardAndButton/Button.jsx';
import "./Recommended.css";
import btnStyle from './../../../css/button.module.css';

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h4 className="recommended-title">Choose the Vendor</h4>
        <div className="recommended-flex">
          <Button class={btnStyle["login-btn:hover"]} onClickHandler={handleClick} value="" title="All Vendors" />
          <Button class={btnStyle["login-btn:hover"]} onClickHandler={handleClick} value="Carpenter" title="Carpenter" />
          <Button class={btnStyle["login-btn:hover"]} onClickHandler={handleClick} value="Plumber" title="Plumber" />
          <Button class={btnStyle["login-btn:hover"]} onClickHandler={handleClick} value="Electrician" title="Electrician" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
