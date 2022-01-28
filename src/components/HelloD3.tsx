import { RefObject, useEffect,useRef } from "react";
import * as d3 from 'd3';

// 
import "./styles/HelloD3.scss";

const HelloD3 = () => {
    const ref: RefObject<HTMLDivElement> = useRef(null);

    useEffect(()=>{
        draw();
    });

    const draw = () =>{
        d3.select(ref.current)
            .append('p')
            .text("Hello World!");

        d3.select('svg')
            .append('g')
            .attr("transform", 'translate(250, 0)')
            .append('rect')
            .attr('width', '500')
            .attr('height', '500')
            .attr('fill', 'tomato');
    }
    return (
        <div ref={ref} className="HelloD3">
            <svg height={500} width={500}>
                
            </svg>
        </div>
    )
}

export default HelloD3;
