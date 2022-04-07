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



type EyeType =  {
  OffsetX:number; 
  OffsetY:number; 
  radius?:number; 
  fill?:string;
  right: boolean;
}

type TBackgroundCircle = {
  radius: number,
  strokeWidth?:number,
  strokeColor?: string,
  bgColor?:string
}

type TMouth = {
  radius: number,
  width: number
}

const Eye = (eye:EyeType) => <circle 
          cx={eye.right ? eye.OffsetX: -eye.OffsetX } 
          cy={-eye.OffsetY}
          r={eye.radius || 0.30 * (eye.OffsetX + eyeOffsetY)}
          fill={eye.fill || "black"} 
        />;

const BackgroundCircle = ({radius, strokeColor, bgColor, strokeWidth}: TBackgroundCircle) => (
  <circle 
    r={radius}
    fill={bgColor || "yellow"} 
    stroke={strokeColor || 'black'} 
    strokeWidth={strokeWidth || 0}
  />
  );

const Mouth = ({radius, width}: TMouth) => {
  // arc generates a function which is used to build the arc. This generated function accept data object
  const mouthArc = arc()({
    endAngle: Math.PI * 3/2,
    innerRadius: radius, 
    outerRadius: radius + width,
    startAngle: Math.PI / 2
  })?.toString()
  
  return (<path d={mouthArc}/>);
}

function App() {
  return (
    <div className="App">
      <svg width={width} height={height} >
        <g transform={`translate(${centerX},${centerY})`}>
          <BackgroundCircle radius={radius}/>
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
          <Mouth radius={mouthRadius} width={mouthWidth} />
        </g>
      </svg>
    </div>
  );
}

export default App;
