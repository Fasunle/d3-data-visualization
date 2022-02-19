import React from 'react';
import './App.css';

const width = 960;
const centerX= width/2;
const height = 500;
const centerY= height/2;
const strokeOffset = 10;
const radius = (width/2 < height/2)? width/2 - strokeOffset: height/2- strokeOffset;
const eyeRadius = 50;
const eyeOffsetX = 100;
const eyeOffsetY = 50;

function App() {
  return (
    <div className="App">
      <svg width={width} height={height} >
        <circle 
          cx={centerX} 
          cy={centerY}
          r={radius}
          fill="yellow" 
          stroke='black' 
          strokeWidth={strokeOffset}
        />
        <circle 
          cx={centerX - eyeOffsetX } 
          cy={centerY - eyeOffsetY}
          r={eyeRadius}
          fill="black" 
        />
        <circle 
          cx={centerX + eyeOffsetX } 
          cy={centerY - eyeOffsetY}
          r={eyeRadius}
          fill="black" 
        />
      </svg>
    </div>
  );
}

export default App;
