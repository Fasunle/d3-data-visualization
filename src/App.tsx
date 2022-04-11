/**
 * 
 * @returns App component entry point
 */
import {MouseEvent} from "react";

export const App = () =>  {
  
  /**
   * gets mouse coordinates and set it to local state of the app component
   * @param event 
   */
  const handleMouseMove = (event: MouseEvent<SVGSVGElement>) =>{
    console.log({x: event.clientX, y:event.clientY});
  }

  return (
    <div className="App">
      <svg height={500} width={500} onMouseMove={handleMouseMove}>
        <circle cx={250} cy={250} r={10} />
      </svg>
    </div>
  );
}