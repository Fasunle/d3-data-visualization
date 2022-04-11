import { color, range } from 'd3';
import './App.css';
import { Face } from './components';

const width = 150;
const height = 160;
// const radius = (width/2 < height/2)? width/2 - strokeOffset: height/2- strokeOffset;
const heads = range(20);


function App() {
  return (
    <div className="App">
      {heads.map((size,key)=> <Face key={key}
        height={height}
        width={width}
        eyeOffSetX={30}
        eyeOffSetY={35}
        mouthRadius={17 + Math.random() * 30 }
        mouthWidth={1 + Math.random() * 10}
        radius={80}
        />)}

    </div>
  );
}

export default App;
