//@ts-nocheck
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const typing = keyframes`
  from { width: 0 }
`;

const StyledInput = styled.input`
  color: #f5f5f5;
  background: none;
  border: none;
  padding: 0 10px;
  width: 80%;
  outline: none;
  font-family: ${props => props.fontFamily || 'monospace'};
  font-size: 15px;
  &::placeholder {
    animation: ${typing} 2s steps(100, end);
    overflow: hidden;
    white-space: nowrap;
  }
`;
const searchFor = 'Search for ';

const TypingAnimation = ({placeholders=[], value='', onChange, renderIcon, fontFamily, containerStyle={}, inputStyle={}}) => {
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
      <StyledInput fontFamily={fontFamily} placeholder={searchFor + placeholder} onChange={(e) => {
        onChange && onChange(e.target.value);
      }} value={value} style={{...inputStyle}}/>
  );
};

export default TypingAnimation;