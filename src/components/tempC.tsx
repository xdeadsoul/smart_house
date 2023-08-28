import React, { useState } from 'react';

const TemperatureControl: React.FC = () => {
  const [temperature, setTemperature] = useState(20);

  const handleIncreaseTemp = () => {
    setTemperature((prevTemp) => prevTemp + 1);
  };

  const handleDecreaseTemp = () => {
    setTemperature((prevTemp) => prevTemp - 1);
  };
  return (
    <div>
      <div className='title'>
        <h2 >House Temperature Control</h2>
      </div>

      <div className="temperature-control-square">
      <p>Current Temperature: {temperature}°C</p>
      <button className='bt' onClick={handleIncreaseTemp}>Increase Temperature</button>
      <button className='bt' onClick={handleDecreaseTemp}>Decrease Temperature</button>
      </div>
      
    </div>
  );
};

export default TemperatureControl;
