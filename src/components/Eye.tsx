
type EyeType =  {
  OffsetX:number; 
  OffsetY:number; 
  radius?:number; 
  fill?:string;
  right: boolean;
}

export const Eye = (eye:EyeType) => (<circle 
          cx={eye.right ? eye.OffsetX: -eye.OffsetX } 
          cy={-eye.OffsetY}
          r={eye.radius || 0.30 * (eye.OffsetX + eye.OffsetY)}
          fill={eye.fill || "black"} 
        />);

