"use client";
import './about.css';
import Link from 'next/link';
import Image from 'next/image';

export default function About(){
          return(

                    <div className="main">
                              <div className="about">
                                        <div className='header-side'>
                                                  <div className="left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
                                                          <Link href={'/'}><div className='back'>
                                                                      <p className='w'>Back to Home</p>
                                                                      <div className='line'></div>
                                                           </div> </Link>
                                                  </div>
                                        </div>
                                        <div className='description'>                                        
                                        <div className="about-description w">
                                        I{"'"}m Ritik Mittal, a MERN Stack Web Developer with expertise in creating scalable web applications using ReactJS, NextJS, NodeJS, and MongoDB. I specialize in frontend design with HTML, CSS, and Tailwind CSS, and implement secure backend solutions with JWT tokens and Nodemailer.

My skills include API development and testing with Postman, version control with Git and GitHub, and MATLAB for technical computing. I focus on clean, efficient code, responsive design, and seamless user experiences across all platforms.


                                        </div>
                                        <div className="about-photo">
                                                        <Image 
                                                        src='/Ritik.jpg'
                                                        width={400}
                                                        height={600}
                                                        alt='ritik'
                                                        className='ritikimg'
                                                        />
                                        </div>
                                        </div>
                              </div>                   
                    </div>
          )
}