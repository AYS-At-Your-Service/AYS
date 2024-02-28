import React, { useState } from 'react';
import feedbackStyles from './feedback.module.css';

const Feedback = () => {
  const [showInitialModal, setShowInitialModal] = useState(true);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const handleYesClick = () => {
    setShowInitialModal(false);
    setShowRatingModal(true);
  };

  const handleNoClick = () => {
    setShowInitialModal(false);
  };

  const handleRatingChange = (selectedRating) => {
    setRating(selectedRating);
    setSubmitDisabled(false);
  };

  const handleFeedbackChange = (event) => {
    setFeedbackText(event.target.value);
  };

  const handleRatingSubmit = () => {
    setShowRatingModal(false);
  };

  return (
    <div className={feedbackStyles['modal-container']}>
      {showInitialModal && (
        <div className={feedbackStyles['modal1']}>
          <div className={feedbackStyles['modal-cross-outer']} onClick={handleNoClick}>
            X
          </div>
          <h3>Is the work completed?</h3>
          <button className={feedbackStyles['proceed-button']} onClick={handleYesClick}>
            Yes
          </button>
          <button className={feedbackStyles['proceed-button']} onClick={handleNoClick}>
            No
          </button>
        </div>
      )}

      {showRatingModal && (
        <div className={feedbackStyles['modal2']}>
          <div className={feedbackStyles['modal-cross-outer']} onClick={() => setShowRatingModal(false)}>
            X
          </div>
          <div className={feedbackStyles['image-div']}>
            <img src="your_image_url.jpg" alt="Vendor" className={feedbackStyles['vendor-image']} />
          </div>
          <p>Rate your service by [vendor name]</p>
          <div className={feedbackStyles['star-icons']}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className={star <= rating ? feedbackStyles['star-selected'] : ''} onClick={() => handleRatingChange(star)}>
                ★
              </span>
            ))}
          </div>
          <label>Please give your feedback</label>
          <textarea rows="4" value={feedbackText} onChange={handleFeedbackChange}></textarea>
          <button className={feedbackStyles['proceed-button']} onClick={handleRatingSubmit} disabled={submitDisabled}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Feedback;
