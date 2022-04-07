import { BackgroundCircle } from "./BackgroundCircle";
import { Eye } from "./Eye";
import { FaceContainer } from "./FaceContainer";
import { Mouth } from "./Mouth";



type TFace = {
    height: number,
    width: number,
    radius: number,
    eyeOffSetX: number,
    eyeOffSetY: number,
    mouthRadius: number,
    mouthWidth: number
}

export const Face = ({
    height, 
    width, 
    radius, 
    eyeOffSetX,
    eyeOffSetY,
    mouthRadius,
    mouthWidth
}: TFace) => {
  return (
    <FaceContainer height={height} width={width}>
        <BackgroundCircle radius={radius}/>
        <Eye 
        OffsetX={eyeOffSetX}
        OffsetY={eyeOffSetY}
        right={false}
        />
        <Eye 
        OffsetX={eyeOffSetX}
        OffsetY={eyeOffSetY}
        right={true}
        />
        <Mouth radius={mouthRadius} width={mouthWidth} />
    </FaceContainer>
  );
}
