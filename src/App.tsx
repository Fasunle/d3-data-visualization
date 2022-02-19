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

type EyeType =  {
  centerX:number;
  centerY:number;
  OffsetX:number; 
  OffsetY:number; 
  radius:number; 
  fill:string;
  right: boolean;
}

const Eye = (eye:EyeType) => <circle 
          cx={eye.right ? eye.centerX + eye.OffsetX: eye.centerX - eye.OffsetX } 
          cy={eye.centerY - eye.OffsetY}
          r={eye.radius}
          fill={eye.fill} 
        />;

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
        
        <Eye 
          OffsetX={eyeOffsetX}
          OffsetY={eyeOffsetY}
          centerX={centerX}
          centerY={centerY}
          radius={eyeRadius}
          fill="black"
          right={false}
        />
        <Eye 
          OffsetX={eyeOffsetX}
          OffsetY={eyeOffsetY}
          centerX={centerX}
          centerY={centerY}
          radius={eyeRadius}
          fill="black"
          right={true}
        />
      </svg>
    </div>
  );
}

export default App;
