import headerStyles from '../css/header.module.css'
import inputStyles from '../css/input.module.css'
import searchSVG from '../assets/search.svg'
import classNames from 'classnames';
import TypingAnimation from './typing-animation';
import { useEffect, useState } from 'react';
import ServiceDropdown from './service-dropdown';



function SiteHeader() {
    let headerStyle = classNames(headerStyles['header']);
    const placeholders = ['\'Carpenter\'', '\'Painter\'', '\'Electrician\''];
    const [editSearch, setIsEditSearch] = useState(true);
    const [openDropdown, setOpenDropdown] = useState(false);
    
    function handleSearchClick() {
        setIsEditSearch(!editSearch);
    }

    function handleDropdown(){
        setOpenDropdown(!openDropdown);
    }

    const staticPlaceholder = 'Search for services'

    return <>
    <div className={headerStyle}>
        <div></div>
        <div></div>
        <div></div>
        <div className={inputStyles['search-box-container']} onClick={handleSearchClick} onBlur={handleSearchClick}>
            <img className={inputStyles['img']} src={searchSVG} alt='search'></img>
            { editSearch ? <TypingAnimation
                placeholders={placeholders} /> :
                <input type='text' className={inputStyles['text']} 
                placeholder={staticPlaceholder}
                onFocus={handleDropdown}
                onBlur={handleDropdown}
                autoFocus
                ></input>
            }
        </div> 

        <div></div>
        <div></div>
    </div>
    <div className={headerStyles['dd']}>
        <div></div>
        <div></div>
        <div></div>
        {openDropdown ? <ServiceDropdown/> : <div></div>}
        <div></div>
        <div></div>
    </div>
    </>
}

export default SiteHeader