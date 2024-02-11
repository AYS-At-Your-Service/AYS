import Button from './../cardAndButton/Button.jsx';
import "./Recommended.css";
import './../../../css/Text.css';

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Choose the Vendor</h2>
        <div className="recommended-flex">
          <Button class="btn" onClickHandler={handleClick} value="" title="All Vendors" />
          <Button class="btn" onClickHandler={handleClick} value="Carpenter" title="Carpenter" />
          <Button class="btn" onClickHandler={handleClick} value="Plumber" title="Plumber" />
          <Button class="btn" onClickHandler={handleClick} value="Electrician" title="Electrician" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
