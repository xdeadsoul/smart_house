import React from 'react';
import SquareTimeTemperature from './homesquare';

const Home: React.FC = () => {
  return (
    <div>
        <div className="title">
            <h2 className='animated-text' >Welcome Home !</h2>
        </div>
        <SquareTimeTemperature />
    </div>
  );
};

export default Home;
