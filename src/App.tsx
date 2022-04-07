import {BackgroundCircle, Eye, Mouth} from './components';
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
