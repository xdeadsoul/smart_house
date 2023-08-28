import React from 'react';
import './securitycontrollist.css';

interface SecurityControlsListProps {
  onControlClick: (controlName: string) => void;
}

const SecurityControlsList: React.FC<SecurityControlsListProps> = ({ onControlClick }) => {
  const controls = [
    'Shut Down Electricity',
    'Shut Down Gas',
    'Shut Down Water',
    'Lock Doors',
    'Close Windows',
    'Turn On Alarm System',
  ];

  return (
    <div className="security-controls-list">
      <ul>
        {controls.map((control, index) => (
          <li key={index}>
            <button onClick={() => onControlClick(control)}>{control}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SecurityControlsList;