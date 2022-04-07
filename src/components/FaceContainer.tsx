import { PropsWithChildren } from "react"

type TFaceContainer = {
    width: number,
    height: number,
    centerX?: number,
    centerY?: number
}

export const FaceContainer = ({children, height, width, centerX, centerY }: PropsWithChildren<TFaceContainer>) => (
    <svg width={width} height={height}>
        <g transform={`translate(${centerX || width / 2},${centerY || height / 2})`}>{children}</g></svg>
)
