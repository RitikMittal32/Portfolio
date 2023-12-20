"use client";
import './Carousel.css';
import { skills } from "@/data/skills/skills";
import Image from 'next/image';
import { hrScrollIntoView, scrollNext, scrollPrevious } from './CardScrollLogic';
import { useEffect, useRef } from 'react';


export function LeftArrow() {
	return (
	  <svg
	    xmlns="http://www.w3.org/2000/svg"
	    shapeRendering="geometricPrecision"
	    width="40"
	    height="40"
	    viewBox="0 0 65 65"
	    fill="none"
	    className="group border-none outline-none focus:outline-none"
	  >
	    <circle
	      strokeWidth="1.5px"
	      cx="32.5"
	      cy="32.5"
	      r="32"
	      stroke="white"
	      className="transition-[stroke] group-hover:stroke-[#DA0400]"
	    />
	    <circle
	      cx="32.5"
	      cy="32.5"
	      fill="#0000FF"
	      r="32"
	      className="origin-center scale-0 transition-transform group-hover:scale-100"
	    />
	    <path
	      strokeWidth="1.5px"
	      d="M18.4697 32.4697C18.1768 32.7626 18.1768 33.2374 18.4697 33.5303L23.2426 38.3033C23.5355 38.5962 24.0104 38.5962 24.3033 38.3033C24.5962 38.0104 24.5962 37.5355 24.3033 37.2426L20.0607 33L24.3033 28.7574C24.5962 28.4645 24.5962 27.9896 24.3033 27.6967C24.0104 27.4038 23.5355 27.4038 23.2426 27.6967L18.4697 32.4697ZM47 32.25L19 32.25L19 33.75L47 33.75L47 32.25Z"
	      fill="white"
	    />
	  </svg>
	);
        }
        
        export function RightArrow() {
	return (
	  <svg
	    xmlns="http://www.w3.org/2000/svg"
	    shapeRendering="geometricPrecision"
	    width="40"
	    height="40"
	    viewBox="0 0 65 65"
	    fill="none"
	    className="group border-none outline-none focus:outline-none"
	  >
	    <circle
	      strokeWidth="1.5px"
	      cx="32.5"
	      cy="32.5"
	      r="32"
	      stroke="white"
	      className="transition-[stroke] group-hover:stroke-[#DA0400]"
	    />
	    <circle
	      cx="32.5"
	      cy="32.5"
	      fill="#0000FF"
	      r="32"
	      className="origin-center scale-0 transition-transform group-hover:scale-100"
	    />
	    <path
	      className="group-hover:stroke-white"
	      strokeWidth="1.5px"
	      d="M47.5303 33.5303C47.8232 33.2374 47.8232 32.7626 47.5303 32.4697L42.7574 27.6967C42.4645 27.4038 41.9896 27.4038 41.6967 27.6967C41.4038 27.9896 41.4038 28.4645 41.6967 28.7574L45.9393 33L41.6967 37.2426C41.4038 37.5355 41.4038 38.0104 41.6967 38.3033C41.9896 38.5962 42.4645 38.5962 42.7574 38.3033L47.5303 33.5303ZM19 33.75L47 33.75L47 32.25L19 32.25L19 33.75Z"
	      fill="white"
	    />
	  </svg>
	);
}


let slideInterval;     
const Carousel = () => {
	let currCardIndex = useRef(0);
	const leftScroll = useRef(null),
	cardsScrollElm = useRef(null),
	cardsParentElm = useRef(null),
	lastScrollTime = useRef(null),
	scrollCoolDownTime = 400, //in ms
	parentHasMouseOver = useRef(false);


	useEffect(() => {
		cardsParentElm.current.addEventListener("mouseenter", pauseSlider);
		cardsParentElm.current.addEventListener("mouseleave", startSlider);
		startSlider();
	}, []);

	const startSlider = () => {
		slideInterval = setInterval(() => {
			scrollNext(
				cardsScrollElm,
				currCardIndex,
				lastScrollTime,
				scrollCoolDownTime,
				skills
			);
		}, 2000);
	};

	const pauseSlider = () => {
		clearInterval(slideInterval);
	};
	


	return(
		<>
		<div className='skills-set'>
		<div className="carousel" ref={cardsParentElm}>
			<div className="carousel-backward carousel-arrow">
				<button onClick={() => {
					scrollPrevious(
						cardsScrollElm,
						currCardIndex,
						lastScrollTime,
						scrollCoolDownTime,
						skills
					)
				}}>
					<LeftArrow />
				</button>
					
			</div>
			<div className="carousel-body">
			<div className="Carousel-slider" ref={cardsScrollElm}>
                              
                              {skills.map((item,index) => {
                                        return (
                                        <div
				key={index}
				onClick={() => hrScrollIntoView(
					cardsScrollElm.current,
					cardsScrollElm.current.children[index]
				)}
				 className={`slider-item superHero${index+1}`}>
                                        <div className="skill-logo">
                                                  <Image 
                                                            src={item.logo}
                                                            height={100}
                                                            width={100}
                                                            alt={`${item.name}`}
                                                  />
                                                  
                                        </div>
                                        <div className="skills-name">
                                                  {item.name}
                                        </div>
                                        </div>
                                        )

                              })}
                              

                    </div>
			</div>
			<div className="carousel-forward carousel-arrow">
				<button
					onClick={() => {
					scrollNext(
						cardsScrollElm,
						currCardIndex,
						lastScrollTime,
						scrollCoolDownTime,
						skills
					);
					}}
				>

				<RightArrow />
				</button>
			</div>
		</div>
		</div>
		</>
	)
}

export default Carousel;