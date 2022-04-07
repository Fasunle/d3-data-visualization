import './App.css';
import { Face } from './components';

const width = 960;
const height = 500;
const strokeOffset = 10;
const radius = (width/2 < height/2)? width/2 - strokeOffset: height/2- strokeOffset;
const eyeOffsetX = 100;
const eyeOffsetY = 50;
const mouthWidth = 20;
const mouthRadius = 130;

function App() {
  return (
    <div className="App">
      <Face 
        height={height}
        width={width}
        eyeOffSetX={eyeOffsetX}
        eyeOffSetY={eyeOffsetY}
        mouthRadius={mouthRadius}
        mouthWidth={mouthWidth}
        radius={radius}
        />

    </div>
  );
}

export default App;
