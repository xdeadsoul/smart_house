import React from 'react';
import  { useState, useEffect } from 'react';


const SecurityEmergency: React.FC = () => {
  const [electricityOn, setElectricityOn] = useState(true);
  const [gasOn, setGasOn] = useState(true);
  const [waterOn, setWaterOn] = useState(true);
  const [doorsLocked, setDoorsLocked] = useState(true);
  const [windowsClosed, setWindowsClosed] = useState(true);
  const [alarmOn, setAlarmOn] = useState(true);

  useEffect(() => {
    fetchInitialStates();
  }, []);

  const fetchInitialStates = () => {
    fetch('http://localhost:3001/security')
      .then(response => response.json())
      .then(data => {
        setElectricityOn(data.electricity);
        setGasOn(data.gas);
        setWaterOn(data.water);
        setDoorsLocked(data.doorsLocked);
        setWindowsClosed(data.windowsClosed);
        setAlarmOn(data.alarmOn);
      })
      .catch(error => {
        console.error('Error fetching initial states:', error);
      });
  };

  const toggleElectricity = () => {
    setElectricityOn(prevState => !prevState);
    updateServer('electricity', !electricityOn);
  };

  const toggleGas = () => {
    setGasOn(prevState => !prevState);
    updateServer('gas', !gasOn);
  };

  const toggleWater = () => {
    setWaterOn(prevState => !prevState);
    updateServer('water', !waterOn);
  };

  const toggleDoors = () => {
    setDoorsLocked(prevState => !prevState);
    updateServer('doorsLocked', !doorsLocked);
  };

  const toggleWindows = () => {
    setWindowsClosed(prevState => !prevState);
    updateServer('windowsClosed', !windowsClosed);
  };

  const toggleAlarm = () => {
    setAlarmOn(prevState => !prevState);
    updateServer('alarmOn', !alarmOn);
  };

  const updateServer = (utility: string, newState: boolean) => {
    fetch(`http://localhost:3001/security`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ [utility]: newState }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
      })
      .catch(error => {
        console.error(`Error updating ${utility} state:`, error);
      });
  };
  return (
    <div className="security-controls-list">
      <button onClick={toggleElectricity}>
        {electricityOn ? 'Turn Off Electricity' : 'Turn On Electricity'}
      </button>
      <button onClick={toggleGas}>
        {gasOn ? 'Turn Off Gas' : 'Turn On Gas'}
      </button>
      <button onClick={toggleWater}>
        {waterOn ? 'Turn Off Water' : 'Turn On Water'}
      </button>
      <button onClick={toggleDoors}>
        {doorsLocked ? 'Unlock Doors' : 'Lock Doors'}
      </button>
      <button onClick={toggleWindows}>
        {windowsClosed ? 'Open Windows' : 'Close Windows'}
      </button>
      <button onClick={toggleAlarm}>
        {alarmOn ? 'Turn Off Alarm' : 'Turn On Alarm'}
      </button>
    </div>
  );
};

export default SecurityEmergency;