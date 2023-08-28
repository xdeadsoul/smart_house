import React, { useState ,useEffect} from 'react';

interface RoomCardProps {
  id : string;
  isOn: boolean;
  toggleLight: (id: string) => void;
}
  const RoomCard: React.FC<RoomCardProps> = ({ id , isOn, toggleLight }) => {
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
      console.log(lightsData)
      setLights(lightsData);

    } catch (error) {
      console.error('Error fetching lights data:', error);
    }
  };
  fetchLightsData();
}, []);


  return (
    <div className={`room-card ${isLightOn ? 'light-on' : 'light-off'}`}>
      <h2>{id}</h2>
      <div className="light-switch" onClick={handletoggle}>
        {isLightOn ? 'Light On' : 'Light Off'}
      </div>
    </div>
  );
};

export default RoomCard;