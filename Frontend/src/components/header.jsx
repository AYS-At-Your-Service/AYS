import headerStyles from '../css/header.module.css'
import inputStyles from '../css/input.module.css'
import searchSVG from '../assets/search.svg'
import classNames from 'classnames';
import TypingAnimation from './typing-animation';
import { useState } from 'react';



function SiteHeader() {

    let logo = "width: 154px";
    let spacer = "padding-right: 32px; width: 102.667px;"
    let city = "width: 308px;"; 
    let headerStyle = classNames(headerStyles['header']);
    const placeholders = ['\'Carpenter\'', '\'Painter\'', '\'Electrician\''];
    const [website, setWebsite] = useState('');
    const [editSearch, setIsEditSearch] = useState(true);
    
    function handleSearchClick(){
        setIsEditSearch(false);
    }
    return <>
    <div className={headerStyle}>
        <div className={logo}>logo</div>
        <div className={spacer}></div>
        <div className={city}>city dd</div>
        <div className={inputStyles['search-box-container']} onClick={handleSearchClick}>
            <img className={inputStyles['img']} src={searchSVG} alt='search'></img>
            { editSearch && (<TypingAnimation
      placeholders={placeholders}
      value={website}
      onChange={(value) => {
        setWebsite(value)
      }}
      fontFamily={'Sergoe UI'}
    />)}
    {!editSearch && (<input type='text' className={inputStyles['text']}></input>)}
        </div> 
        
        <div></div>
    </div>
    </>
}

export default SiteHeader