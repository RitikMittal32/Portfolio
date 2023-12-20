"use client";
import { useEffect } from "react";
import Carousel from "../Carousel/Carousel";
import Image from "next/image";
import { skills } from "@/data/skills/skills";
import './Skill.css';

export default function Skill () {

          // useEffect (() => {
          //           Carousel();
          // })
          return(
                    <section id="skill">
                    <div className="sliders">
                    <div className="skill-title">
                              <h1>{'<'}SKILLS{'/>'}</h1>
                              <div className="single-line"></div>
                    </div>
                    <Carousel>

                    </Carousel>
                    </div>
                    </section>
          )
}