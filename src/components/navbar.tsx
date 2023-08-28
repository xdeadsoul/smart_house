import React from 'react';

interface NavbarProps {
  setActivePage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setActivePage }) => {
  return (
    <nav>
      <img src="./icon.png" className="nav-icon"></img>
      <h1> Smart House Control</h1>
      <div className="navbar-buttons">
        <button id='btn1' onClick={() => setActivePage('home')}>Home</button>
        <button id='btn1' onClick={() => setActivePage('lights')}>Lights</button>
        <button id='btn1' onClick={() => setActivePage('temperature')}>Temperature</button>
        <button id='btn1' onClick={() => setActivePage('security')}>Security &#38; Emergency</button>
      </div>
    </nav>
  );
};

export default Navbar;

