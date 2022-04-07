import {BackgroundCircle, Eye, FaceContainer,Mouth} from './components';
import './App.css';

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
      <FaceContainer height={height} width={width}>
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
        </FaceContainer>
    </div>
  );
}

export default App;
