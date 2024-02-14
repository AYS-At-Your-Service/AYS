// Experience.jsx
import InputRadioBoxExperience from "./../../inputRadioBoxes/InputRadioBoxExperience";
import textStyle from './../../../../css/text.module.css';

const Experience = ({ handleChangeExperience }) => {
  return (
    <>
      <div>
        <h4 className={textStyle["base-text"]} style={{padding:"10px"}}>Years of Experience</h4>
        <div>
        <label className="sidebar-label-container">
          <input onChange={handleChangeExperience} type="radio" value="" name="experience" />
          <span className="checkmark"></span>All
          </label>

          <InputRadioBoxExperience 
            handleChangeExperience={handleChangeExperience}
            value="0"
            title="0+"
            name="experience"
          />
          <InputRadioBoxExperience 
            handleChangeExperience={handleChangeExperience}
            value="1"
            title="1+"
            name="experience"
          />
          <InputRadioBoxExperience 
            handleChangeExperience={handleChangeExperience}
            value="2"
            title="2+"
            name="experience"
          />
          <InputRadioBoxExperience 
            handleChangeExperience={handleChangeExperience}
            value="3"
            title="3+"
            name="experience"
          />
          <InputRadioBoxExperience 
            handleChangeExperience={handleChangeExperience}
            value="4"
            title="4+"
            name="experience"
          />
          <InputRadioBoxExperience 
            handleChangeExperience={handleChangeExperience}
            value="5"
            title="5+"
            name="experience"
          />
          <InputRadioBoxExperience 
            handleChangeExperience={handleChangeExperience}
            value="7"
            title="7+"
            name="experience"
          />
          <InputRadioBoxExperience 
            handleChangeExperience={handleChangeExperience}
            value="10"
            title="10+"
            name="experience"
          />
        </div>
      </div>
    </>
  );
};

export default Experience;
