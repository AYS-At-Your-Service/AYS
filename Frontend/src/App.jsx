import React, { useState } from 'react';
import PreferedTimeSlot from '../components/prefered-timeslot';
import './App.css';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button onClick={handleModal}>Toggle Modal</button>

      {isModalOpen && <PreferedTimeSlot onClose={handleModal} onProceed={(date, time) => console.log(date, time)} />}
    </div>
  );
}

export default App;
