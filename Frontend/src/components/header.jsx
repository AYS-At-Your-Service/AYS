import headerStyles from '../css/header.module.css'
import inputStyles from '../css/input.module.css'
import searchSVG from '../assets/search.svg'
import classNames from 'classnames';
import Typewriter from './type-writer';



function SiteHeader() {

    let logo = "width: 154px";
    let spacer = "padding-right: 32px; width: 102.667px;"
    let city = "width: 308px;"; 
    let headerStyle = classNames(headerStyles['header']);
    return <>
    <div className={headerStyle}>
        <div className={logo}>logo</div>
        <div className={spacer}></div>
        <div className={city}>city dd</div>
        <div className={inputStyles['search-box-container']}>
            <img className={inputStyles['image']} src={searchSVG} alt='search'></img>
            <input type='text' className={inputStyles['text']}>
            </input>
            <h6><Typewriter text="My React App" delay={100} ></Typewriter></h6>
        </div>
        <div></div>
    </div>
    </>
}

export default SiteHeader