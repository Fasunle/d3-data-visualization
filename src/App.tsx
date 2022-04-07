import {arc} from "d3-shape";     // handles various shapes in d3
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
const mouthWidth = 20;
const mouthRadius = 130;

// arc generates a function which is used to build the arc. This generated function accept data object
const mouthArc = arc()({
  endAngle:Math.PI * 3/2,
  innerRadius:mouthRadius, 
  outerRadius:mouthRadius+mouthWidth,
  startAngle: Math.PI / 2
})?.toString()

type EyeType =  {
  OffsetX:number; 
  OffsetY:number; 
  radius?:number; 
  fill?:string;
  right: boolean;
}

const Eye = (eye:EyeType) => <circle 
          cx={eye.right ? eye.OffsetX: -eye.OffsetX } 
          cy={-eye.OffsetY}
          r={eye.radius || 0.30 * (eye.OffsetX + eyeOffsetY)}
          fill={eye.fill || "black"} 
        />;

function App() {
  return (
    <div className="App">
      <svg width={width} height={height} >
        <g transform={`translate(${centerX},${centerY})`}>
          <circle 
            r={radius}
            fill="yellow" 
            stroke='black' 
            strokeWidth={strokeOffset}
          />
          
          <Eye 
            OffsetX={eyeOffsetX}
            OffsetY={eyeOffsetY}
            right={false}
          />
          <Eye 
            OffsetX={eyeOffsetX}
            OffsetY={eyeOffsetY}
            right={true}
          />
          <path d={mouthArc}/>
        </g>
      </svg>
    </div>
  );
}

export default App;
