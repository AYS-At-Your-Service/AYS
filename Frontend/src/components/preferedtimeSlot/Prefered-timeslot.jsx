
import React, { useState, useEffect } from 'react';
import { DEFAULTCONTENTOFH3,DEFAULTCONTENTOFH32,DEFAULTCONTENTOFP,DEFAULTBUTTON } from './prefered-timeslot.consts';
import './timeslot.module.css';

const PreferedTimeSlot = ({ onClose, onProceed }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const generateDates = () => {
      const currentDate = new Date();
      const nextTwoDays = [0, 1, 2].map((day) => {
        const date = new Date();
        date.setDate(currentDate.getDate() + day);
        return date;
      });
      setDates(nextTwoDays);
      setSelectedDate(nextTwoDays[0]); // Select the first date by default
    };

    generateDates();
  }, []);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null); 
  };

  const handleTimeSlotClick = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  const handleProceedClick = () => {
    onProceed(selectedDate, selectedTimeSlot); //This will return the selected date and time slot
    onClose();
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-cross-outer">
          <div className="modal-cross" onClick={onClose}>
            X
          </div>
        </div>
        <div className="content-container">
          <div>
            <h3>{DEFAULTCONTENTOFH3}</h3>
            <p>{DEFAULTCONTENTOFP}</p>
          </div>
         
          {/* Date Section */}
          <div className="date-section">
            {dates.map((date, index) => (
              <button
                key={index}
                onClick={() => handleDateClick(date)}
                className={`date-button ${selectedDate === date ? 'selected' : ''}`}
              >       {date.toLocaleDateString('en-US', { weekday: 'short' })}
                   <br />
                {date.getDate()}
              </button>
            ))}
          </div>
          <h3>{DEFAULTCONTENTOFH32}</h3>
          {/* Time section */}
          <div className="time-section">
            {Array.from({ length: 26 }).map((_, index) => {
              const hours = Math.floor(index / 2) + 7;
              const minutes = index % 2 === 0 ? '00' : '30';
              const time = `${hours}:${minutes}`;
              return (
                <button
                  key={index}
                  onClick={() => handleTimeSlotClick(time)}
                  disabled={!selectedDate}
                  className={`time-button ${selectedTimeSlot === time ? 'selected' : ''}`}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>
        {/* Proceed Button */}
        <button className="proceed-button" onClick={handleProceedClick} disabled={!selectedTimeSlot} >
          {DEFAULTBUTTON}
        </button>
      </div>
    </div>
  );
};

export default PreferedTimeSlot;
