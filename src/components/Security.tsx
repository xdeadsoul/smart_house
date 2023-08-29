import React from 'react';
import SecurityControlsList from './securitycontrollist';

const SecurityPage: React.FC = () => {
  return (
    <div>
      <div className='title'><h2> Security And Emergency </h2></div>
      <SecurityControlsList/>
    </div>
  );
};

export default SecurityPage;
