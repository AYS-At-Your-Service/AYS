import './LocationSearch.css'
import '../../css/modal.css'
import '../../css/Input.css'
import  backImage from  '../../assets/back.svg'
import exitImage from '../../assets/exit.svg'
import { useCallback, useMemo, useRef, useState } from 'react'
import { data } from '../../assets/Data'
import LocationsContainer from '../LocationsContainer/LocationsContainer'
import CurrentLocation from '../CurrentLocation/CurrentLocation'

const LocationSearch=()=>{

   const[query,setQuery]=useState('');
   const inputRef=useRef(null)

   const filteredData=useMemo(()=>{
        if(query.length==0) return [];
        return data.filter((element)=>element.main.toLowerCase().includes(query));
   },[query])

   const debouncedUpdateQuery=useCallback(()=>{
    let id=null
        const updateQuery=()=>{
            if(id) clearTimeout(id);
            id=setTimeout(()=>{setQuery(inputRef.current.value.toLowerCase())},500)
        }
    return updateQuery;
   })
   
   function clearQuery(){
    inputRef.current.value='';
    setQuery('')
   }

    return (
        <div className='modal-vertical-container'>
            <div className='modal-vertical-top'>
                <div className="modal-search-box-container">
                    <img className='image' src={backImage} alt=""  />
                    <input type='text' className='text' onChange={debouncedUpdateQuery()} ref={inputRef} ></input>
                    {query.length>0 && <img className="image" src={exitImage} onClick={clearQuery}></img>}
                </div>
            <CurrentLocation></CurrentLocation>
            </div>
            <div className="breaker-big"></div>
            {filteredData.length>0 && <LocationsContainer data={filteredData}/>}

            <div className="footer"> powered by AYS </div>
        </div>
    )
}
export default LocationSearch;