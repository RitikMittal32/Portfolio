"use client";
import './about.css';
import Link from 'next/link';

export default function About(){
          return(

                    <div className="main">
                              <div className="about">
                                        <div className='header-side'>
                                                  <div className="left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                                                          <Link href={'/'}><div className='back'>
                                                                      <p>Back to Home</p>
                                                                      <div className='line'></div>
                                                           </div> </Link>
                                                  </div>
                                        </div>
                                        <div className='description'>                                        
                                        <div className="about-description">
                                                  I'm Ritik Mittal student of LNM Institue of Information and technology. A MERN StacK Web Developer and tech enthusiast seeking growth and create learning environment . My competencies are in creating dynamic and responsive website and provide cutting-edge output, UI Improvements, Code Debugging. If My skillset is compatible with your requirement than I will give my finest output.
                                        </div>
                                        <div className="about-photo">

                                        </div>
                                        </div>
                              </div>                   
                    </div>
          )
}