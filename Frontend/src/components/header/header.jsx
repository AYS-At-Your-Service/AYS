import headerStyles from './header.module.css'
import inputStyles from '../../css/input.module.css'
import searchSVG from '../../assets/search.svg'
import classNames from 'classnames';
import TypingAnimation from '../shared/typing-animation.jsx';
import { useState } from 'react';
import ServiceDropdown from '../serviceDropdown/service-dropdown.jsx';
import * as consts from './header.consts.js';
import dropdownStyles from '../../css/dropdown.module.css'


function SiteHeader() {
    
    const placeholders = ['\'Carpenter\'', '\'Painter\'', '\'Electrician\''];

    const [editSearch, setIsEditSearch] = useState(true);
    const [openDropdown, setOpenDropdown] = useState(false);
    
    let headerStyle = classNames(headerStyles['header']);

    function handleSearchClick() {
        setIsEditSearch(!editSearch);
    }

    function handleDropdown(){
        setOpenDropdown(!openDropdown);
    }

    

    return <>
    <div className={headerStyle}>
        <div>
            {/* LOGO */}
        </div>
        <div>
            {/* SPACER */}
        </div>
        <div>
            {/* CITY */}
        </div>
        <div className={inputStyles['search-box-container']} onClick={handleSearchClick} onBlur={handleSearchClick}>
            <img className={inputStyles['img']} src={searchSVG} alt='search'></img>
            { editSearch ? <TypingAnimation
                placeholders={placeholders} /> :
                <input type='text' className={inputStyles['text']} 
                placeholder={consts.STATICPLACEHOLDER}
                onFocus={handleDropdown}
                onBlur={handleDropdown}
                autoFocus
                ></input>
            }
        </div> 

        <div>
            {/* SPACER */}
        </div>
        <div>
            {/* LOGIN */}
        </div>
    </div>
    <div className={dropdownStyles['dropdown']}>
        <div>
            {/* SPACER */}
        </div>
        <div>
            {/* SPACER */}
        </div>
        <div>
            {/* SPACER */}
        </div>
        {openDropdown ? <ServiceDropdown/> : <div></div>}
        <div>
            {/* SPACER */}
        </div>
        <div>
            {/* SPACER */}
        </div>
    </div>
    </>
}

export default SiteHeader