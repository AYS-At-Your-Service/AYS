// Card.jsx
import React from 'react';
import './../../../css/card.css';

const Card = ({ image, name, category, hourlyRate, experienceYears, acceptedRequests, customerRating }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-worker-pic" />
      <div className="card-content-section">
        <h2 className="card-name-section-worker">{name}</h2>
        <p className="card-category">{category}</p>
        <p className="card-rate">Hourly Rate: ₹{hourlyRate}</p>
        <p className="card-experience">Experience: {experienceYears} years</p>
        <p className="card-requests">Accepted Requests: {acceptedRequests}</p>
        <p className="card-rating">Customer Rating: {customerRating}</p>
        <div className="card-line-between"></div>
        <div className="card-ImgBtn-section">
          <button className="card-view-details">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
