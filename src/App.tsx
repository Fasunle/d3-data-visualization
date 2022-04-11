/**
 * 
 * @returns App component entry point
 */
import {useState, MouseEvent} from "react";


const initialMousePosition = {x: 250, y:250}; // mouse stays ar the center on initial render


export const App = () =>  {

  // local state
  const [mousePosition, setMousePosition] = useState(initialMousePosition);

  /**
   * gets mouse coordinates and set it to local state of the app component
   * @param event 
   */
  const handleMouseMove = (event: MouseEvent<SVGSVGElement>) =>{
    setMousePosition({x: event.clientX, y:event.clientY});  // local mouse state
  }

  return (
    <div className="App">
      <svg height={500} width={500} onMouseMove={handleMouseMove}>
        <circle cx={mousePosition.x} cy={mousePosition.y} r={10} />
      </svg>
    </div>
  );
}