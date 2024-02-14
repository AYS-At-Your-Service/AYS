// Card.jsx
import React from 'react';
import cardStyles from './../../../css/card.module.css';

const Card = ({ image, name, category, hourlyRate, experienceYears, acceptedRequests, customerRating }) => {
  return (
    <div className={cardStyles.card} style={{ border: '5px solid #ededed', padding: '10px', margin: '10px' }}>
      <img src={image} alt={name} className={cardStyles['card-worker-pic']} />
      <div className={cardStyles['card-content-section']}>
        <h2 className={cardStyles['card-name-section-worker']}>{name}</h2>
        <p className={cardStyles['card-category']}>{category}</p>
        <p className={cardStyles['card-rate']}>Hourly Rate: ₹{hourlyRate}</p>
        <p className={cardStyles['card-experience']}>Experience: {experienceYears} years</p>
        <p className={cardStyles['card-requests']}>Accepted Requests: {acceptedRequests}</p>
        <p className={cardStyles['card-rating']}>Customer Rating: {customerRating}</p>
        <div className={cardStyles['card-line-between']}></div>
        <div className={cardStyles['card-ImgBtn-section']}>
          <button className={cardStyles['card-view-details']}>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
