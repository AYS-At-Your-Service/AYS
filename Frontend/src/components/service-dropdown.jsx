import modalStyles from '../css/modal.module.css'
import btnStyles from '../css/button.module.css'
import textStyles from '../css/text.module.css'
import classnames from 'classnames'

function ServiceDropdown(btnTextArr){
    let textArr = ['Professional Cleaning','Salon','Electricians','Plumbers','Carpenters','Washing machine repair'];

    let textList = [];
    let textclasses = classnames(textStyles['sub-title'],textStyles['sub-title-sm'])
    let btnclasses = classnames(btnStyles['btn'],btnStyles['small-btn-non-bold'])
    let w = "13px";
    let h = "13px";
    textArr.forEach(element => {
        textList.push(
        <>
            <button className={btnclasses}>
                <svg height={h} width={w} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                </svg> {element}
                </button>
        </>
        );
    })

    return <><div className={modalStyles['modal-vertical-container']}>
        <ul>               
            <div className={textclasses}> Trending searches </div>
            {textList}
        </ul>
        </div>
    </>
}

export default ServiceDropdown