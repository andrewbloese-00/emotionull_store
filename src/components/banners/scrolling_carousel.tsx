"use client"
import Link from "next/link"
import { useCallback, useEffect, useState } from "react"

//types 
export interface iCarouselItem { 
    href:string
    text:string
    image?:string
}
type ScrollSpeed = "super_slow" | "slow" | "medium" | "fast" | "super_fast"
interface iCarouselConfig { 
    speed:ScrollSpeed 
    direction: -1 | 0 |  1
}


interface iCarouselProps {
    items:Array<iCarouselItem>
    config?:iCarouselConfig
} 


//# of times to repeat the provided items
const N_REPITITIONS:number = 5

const ScrollingCarousel = (props:iCarouselProps) => {

    return ( 
        // Container
        <div className="min-w-full inline-flex flex-nowrap group">
            {
                Array(N_REPITITIONS).fill(0).map((_,i)=> (
                    <ul aria-hidden={i>0} key={`repetition-${i}`}
                        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&img]:max-w-none [&a]:max-w-none animate-infinite-scroll group-hover:animation-play-state-paused  bg-neutral-900/50"
                    >
                        {
                            props.items.map((item,idx)=>(
                                <li 
                                key={`carouselItem-${idx}`} className="flex-col justify-center align-middle">
                                    <Link href={item.href}>
                                        <p className="text-center text-3xl">
                                            {item.text}
                                        </p>
                                    </Link>                    
                                </li>
                            ))
                        }
                    </ul>            
                ))
                

            }

        </div>

    )




} 


export default ScrollingCarousel