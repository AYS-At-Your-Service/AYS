//@ts-nocheck
import React, { useState, useEffect } from 'react';
import inputStyles from '../../css/Input.module.css'
import * as consts from '../shared/typing-animation.consts.js'


const TypingAnimation = ({placeholders=[], value='', onChange, containerStyle={}, inputStyle={}}) => {
  const [index, setIndex] = useState(0);
  const [placeholder, setPlaceholder] = useState('');

  useEffect(() => {
    let place = '';
    const typingInterval = setInterval(() => {
      if (place.length < placeholders[index].length) {
        place += placeholders[index][place.length];
        setPlaceholder(place);
      } else {
        clearInterval(typingInterval);
        const deletingInterval = setInterval(() => {
          if (place.length > 0) {
            place = place.slice(0, place.length - 1);
            setPlaceholder(place);
          } else {
            clearInterval(deletingInterval);
            setIndex((index + 1) % placeholders.length);
          }
        }, 80);
      }
    }, 80);
    return () => clearInterval(typingInterval);
  }, [index]);

  return (
      <input className={inputStyles['text']} placeholder={consts.SEARCHFOR + placeholder} onChange={(e) => {
        onChange && onChange(e.target.value);
      }} value={value} />
  );
};
  
export default TypingAnimation;