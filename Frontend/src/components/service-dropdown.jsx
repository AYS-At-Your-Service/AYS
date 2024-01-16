import modalStyles from '../css/modal.module.css'
import btnStyles from '../css/button.module.css'
import textStyles from '../css/text.module.css'
import classnames from 'classnames'

function ServiceDropdown(){
let textclasses = classnames(textStyles['sub-title'],textStyles['sub-title-sm'])
let btnclasses = classnames(btnStyles['btn'],btnStyles['medium-btn'])

    return <><div className={modalStyles['modal-vertical-container']}>
        
        <ul>
            <li>
            <div className={textclasses}>Trending searches </div>
            </li>
            <div className={btnclasses} >
            <li>
            <button >1111</button>
            <button>2222</button></li>
            <li><button>3333</button>
            <button>4444</button></li>
            <li><button>5555</button></li>
            </div>
        </ul>
        </div>
    </>
}

export default ServiceDropdown