import React, { useState ,useEffect} from 'react';

interface RoomCardProps {
  id : string;
  isOn: boolean;
  roomName : string;
  toggleLight: (id: string) => void;
}
  const RoomCard: React.FC<RoomCardProps> = ({ id , isOn,roomName, toggleLight }) => {
    const [isLightOn, setIsLightOn] = useState(isOn);
    const handletoggle = () => {
    toggleLight(id);
    setIsLightOn((prevIsLightOn) => !prevIsLightOn);
  };



  const [lights, setLights] = useState([]);

useEffect(() => {
  const fetchLightsData = async () => {
    try {
      const response = await fetch('http://localhost:3001/lights');
      const lightsData = await response.json();
      setLights(lightsData);

    } catch (error) {
      console.error('Error fetching lights data:', error);
    }
  };
  fetchLightsData();
}, []);
const handleRoomNameChange = async (roomId: string, newName: string) => {
  try {
    await fetch(`http://localhost:3001/lights/${roomId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ roomName: newName }),
    });
  } catch (error) {
    console.error('Error updating room name:', error);
  }
};

  return (
    <div className={`room-card ${isLightOn ? 'light-on' : 'light-off'}`}>
      <h2 contentEditable="true"  onBlur={e => handleRoomNameChange(id, e.currentTarget.textContent || '')}>{roomName}</h2>
      <div className="light-switch" onClick={handletoggle}>
        {isLightOn ? 'Light On' : 'Light Off'}
      </div>
    </div>
  );
};

export default RoomCard;