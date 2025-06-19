import React, { useState } from 'react';
import './App.css'; // For custom styles

const ColorChanger = () => {
  const [bgColor, setBgColor] = useState('white'); // Initial color state

  // Function to change background color
  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div className="app-container">
      <div
        className="color-area"
        style={{ backgroundColor: bgColor, transition: 'background-color 0.5s ease' }}
      >
        <h2 className="color-name">{bgColor.charAt(0).toUpperCase() + bgColor.slice(1)}</h2>
      </div>
      <div className="buttons-container">
        <button
          className="color-button red"
          onClick={() => changeColor('red')}
        >
          Red
        </button>
        <button
          className="color-button blue"
          onClick={() => changeColor('blue')}
        >
          Blue
        </button>
        <button
          className="color-button green"
          onClick={() => changeColor('green')}
        >
          Green
        </button>
        <button
          className="color-button brown"
          onClick={() => changeColor('brown')}
        >
          Brown
        </button>
      </div>
    </div>
  );
};

export default ColorChanger;
