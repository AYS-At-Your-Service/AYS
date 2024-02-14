import Button from './../cardAndButton/Button.jsx';
import "./Recommended.css";
import './../../../css/text.module.css';
import './../../../css/button.module.css';
const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Choose the Vendor</h2>
        <div className="recommended-flex">
          <Button class="login-btn:hover " onClickHandler={handleClick} value="" title="All Vendors" />
          <Button class="login-btn:hover " onClickHandler={handleClick} value="Carpenter" title="Carpenter" />
          <Button class="login-btn:hover " onClickHandler={handleClick} value="Plumber" title="Plumber" />
          <Button class="login-btn:hover " onClickHandler={handleClick} value="Electrician" title="Electrician" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
