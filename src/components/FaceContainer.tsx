import { PropsWithChildren } from "react"

type IFaceContainer = {
    width: number,
    height: number
}

export const FaceContainer = ({children, height, width }: PropsWithChildren<IFaceContainer>) => (
    <svg width={width} height={height}>
        <g transform={`translate(${width / 2},${height / 2})`}>{children}</g></svg>
)
