import React, { useState , useEffect } from 'react';
import RoomCard from './roomcard';


interface Light {
  id: string;
  isOn: boolean;
  roomName :  string;
}


const LightsControl: React.FC = () => {
  const [lights, setLights] = useState<Light[]>([]);

  const fetchLightsData = async () => {
    try {
      const response = await fetch('http://localhost:3001/lights');
      const lightsData = await response.json() as Light[];
      setLights(lightsData);
    } catch (error) {
      console.error('Error fetching lights data:', error);
    }
  };

  useEffect(() => {
    fetchLightsData();
  }, []);

  const toggleLight = async (roomId: string) => {
    
      const updatedLights = lights.map((light) =>
        light.id === roomId ? { ...light, isOn: !light.isOn } : light
      );
      setLights(updatedLights);
      try {
      await fetch(`http://localhost:3001/lights/${roomId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isOn: !lights.find((light) => light.id === roomId)?.isOn }),
      });
    } catch (error) {
      console.error('Error toggling light:', error);
    }
  
  };
  return (
    <div>
      <div className='title'>
        <h2>Lights Control</h2>
      </div>
      <div className='room-cards-container'>
      {lights.map((light) => (
        <RoomCard
          id={light.id}
          roomName={light.roomName}
          key={light.id}
          isOn={light.isOn}
          toggleLight={() => toggleLight(light.id)}
        />
        
      ))}
      </div>
    </div>
  );
};

export default LightsControl;