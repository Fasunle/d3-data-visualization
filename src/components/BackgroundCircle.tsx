type TBackgroundCircle = {
  radius: number,
  strokeWidth?:number,
  strokeColor?: string,
  bgColor?:string
}



export const BackgroundCircle = ({radius, strokeColor, bgColor, strokeWidth}: TBackgroundCircle) => (
  <circle 
    r={radius}
    fill={bgColor || "yellow"} 
    stroke={strokeColor || 'black'} 
    strokeWidth={strokeWidth || 0}
  />
);