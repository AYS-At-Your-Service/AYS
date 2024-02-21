import React from 'react';
import cardStyles from './../../../css/card.module.css';
import {
  CARD_BORDER_STYLE,
  HOURLY_RATE_LABEL,
  EXPERIENCE_LABEL,
  ACCEPTED_REQUESTS_LABEL,
  CUSTOMER_RATING_LABEL,
  VIEW_DETAILS,
} from './CardConstants.js';

const Card = ({ image, name, category, hourlyRate, experienceYears, acceptedRequests, customerRating }) => {
  return (
    <div className={cardStyles.card} style={CARD_BORDER_STYLE}>
      <img src={image} alt={name} className={cardStyles['card-worker-pic']} />
      <div className={cardStyles['card-content-section']}>
        <h2 className={cardStyles['card-name-section-worker']}>{name}</h2>
        <p className={cardStyles['card-category']}>{category}</p>
        <p className={cardStyles['card-rate']}>{HOURLY_RATE_LABEL}{hourlyRate}</p>
        <p className={cardStyles['card-experience']}>{EXPERIENCE_LABEL}{experienceYears} years</p>
        <p className={cardStyles['card-requests']}>{ACCEPTED_REQUESTS_LABEL}{acceptedRequests}</p>
        <p className={cardStyles['card-rating']}>{CUSTOMER_RATING_LABEL}{customerRating}</p>
        <div className={cardStyles['card-line-between']}></div>
        <div className={cardStyles['card-ImgBtn-section']}>
          <button className={cardStyles['card-view-details']}>{VIEW_DETAILS}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;