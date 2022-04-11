/**
 * 
 * @returns App component entry point
 */
import {useState, useCallback ,MouseEvent} from "react";


const initialMousePosition = {x: 250, y:250}; // mouse stays ar the center on initial render


export const App = () =>  {

  // local state
  const [mousePosition, setMousePosition] = useState(initialMousePosition);

  /**
   * gets mouse coordinates and set it to local state of the app component for perfomance gain, the function is wrapped with useCallback.
   * 
   * This hook function prevent unnecessary re-render when the component reload because of other effects that are not related to the setMousePosition.
   * 
   * Therefore, the component rerender only when setMousePosition is called!
   * 
   * @param event 
   */
  const handleMouseMove = useCallback((event: MouseEvent<SVGSVGElement>) =>{
    setMousePosition({x: event.clientX, y:event.clientY});  // local mouse state
  }, [setMousePosition]);

  return (
    <div className="App">
      <svg height={500} width={500} onMouseMove={handleMouseMove}>
        <circle cx={mousePosition.x} cy={mousePosition.y} r={10} />
      </svg>
    </div>
  );
}