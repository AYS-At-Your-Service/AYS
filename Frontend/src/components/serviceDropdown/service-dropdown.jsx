import modalStyles from '../../css/modal.module.css'
import btnStyles from '../../css/button.module.css'
import textStyles from '../../css/text.module.css'
import classnames from 'classnames'
import serviceDropdownStyles from './service-dropdown.module.css'
import * as consts from './service-dropdown.consts.js'
import trendingSVG from '../../assets/trending.svg'

function ServiceDropdown(btnTextArr){
    let textArr = ['Professional Cleaning','Salon','Electricians','Plumbers','Carpenters','Washing machine repair'];

    let textList = [];
    let textclasses = classnames(textStyles['sub-title'],textStyles['sub-title-sm'])
    let btnclasses = classnames(btnStyles['btn'],btnStyles['small-btn-non-bold'])

    textArr.forEach(element => {
        textList.push(
        <>
            <button className={btnclasses}>
                <img src={trendingSVG} alt='trend' className={serviceDropdownStyles['searchsvg']}></img>
                 {element}
                </button>
        </>
        );
    })

    return <><div className={modalStyles['modal-vertical-container']}>
        <ul>               
            <div className={textclasses}> {consts.TRENDINGSEARCHES} </div>
            {textList}
        </ul>
        </div>
    </>
}

export default ServiceDropdown