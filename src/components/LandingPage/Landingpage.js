"use client";
import './landingpage.css';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter'

export default function Landingpage() {
          return (
                    <section id='home'>
                    <div className='main-page'>
                              <div className="home">
                                        <div className="home-details">
                                                  <div className="title">
                                                            <p>Hi there, <br/>
                                                            
                                                            <Typewriter
                                                                      words={[`I'am Ritik Mittal`]}
                                                                      cursor
                                                                      cursorStyle='|'
                                                                      typeSpeed={70}
                                                                      delaySpeed={1000}
                                                            />
                                                            </p>
                                                                       
                                                  </div>
                                                  <div className="description">
                                                  
                                                  </div>
                                        </div>
                                        <div className="home-photo">
                                                  <div className='computer-photo'>
                                                            <Image 
                                                            src='/Coding.svg' 
                                                            height={500}
                                                            width={500}
                                                            alt='computer'
                                                            className='cimage'
                                                            />
                                                            
                                                  </div>
                                        </div>
                              </div>
                    </div>
                    </section>
          )
}