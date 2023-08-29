import React, { useState , useEffect} from 'react';

const TemperatureControl: React.FC = () => {
  const [houseTemperature, setHouseTemperature] = useState<number>();

  useEffect(() => {
    fetch('http://localhost:3001/temperature') 
      .then(response => response.json())
      .then(data => {
        setHouseTemperature(data.house);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const increaseTemperature = () => {
    if (houseTemperature !== undefined) {
      setHouseTemperature(prevTemp => (prevTemp !== undefined ? prevTemp + 1 : undefined));
      updateHouseTemperature(houseTemperature + 1); 
    }
  };

  const decreaseTemperature = () => {
    if (houseTemperature !== undefined) {
      setHouseTemperature(prevTemp => (prevTemp !== undefined ? prevTemp - 1 : undefined));
      updateHouseTemperature(houseTemperature - 1);
    }
  };
  const updateHouseTemperature = (newTemperature: number) => {
    fetch('http://localhost:3001/temperature', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ house: newTemperature }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
      })
      .catch(error => {
        console.error('Error updating house temperature:', error);
      });
  };

  if (houseTemperature === undefined) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className='title'>
        <h2 >House Temperature Control</h2>
      </div>

      <div className="temperature-control-square">
      <p>Current Temperature: {houseTemperature}°C</p>
      <button className='bt' onClick={increaseTemperature}>Increase Temperature</button>
      <button className='bt' onClick={decreaseTemperature}>Decrease Temperature</button>
      </div>
      
    </div>
  );
};

export default TemperatureControl;
