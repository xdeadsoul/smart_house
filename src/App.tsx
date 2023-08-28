import React, { useState } from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Lights from './components/lightC';
import Temperature from './components/tempC';
import Security from './components/Security';
import './App.css';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home />;
      case 'lights':
        return <Lights />;
      case 'temperature':
        return <Temperature />;
      case 'security':
        return <Security />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Navbar setActivePage={setActivePage} />
      <div className="container">{renderPage()}</div>
    </div>
  );
};

export default App;