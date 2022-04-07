import {arc} from "d3-shape";     // handles various shapes in d3

type TMouth = {
  radius: number,
  width: number
}

export const Mouth = ({radius, width}: TMouth) => {
  // arc generates a function which is used to build the arc. This generated function accept data object
  const mouthArc = arc()({
    endAngle: Math.PI * 3/2,
    innerRadius: radius, 
    outerRadius: radius + width,
    startAngle: Math.PI / 2
  })?.toString()
  
  return (<path d={mouthArc}/>);
}