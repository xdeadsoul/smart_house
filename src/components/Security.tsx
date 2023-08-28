import React from 'react';
import SecurityControlsList from './securitycontrollist';

const SecurityPage: React.FC = () => {
  const handleControlClick = (controlName: string) => {
    


    console.log(` ${controlName}`);
  };

  return (
    <div>
      <div className='title'><h2> Security And Emergency </h2></div>
      <SecurityControlsList onControlClick={handleControlClick} />
    </div>
  );
};

export default SecurityPage;
