"use client";
import { useEffect, useState } from 'react';
import './Header.css';
// import Link from 'next/link';
import {Link} from 'react-scroll';
import Hamburger from './Hamburger';

export default function Header({selectedPage, setSelectedPage}){
          const [check,setCheck] = useState(true);


          useEffect(() => {
                    const width = window.innerWidth;
                    if(width <= 681){
                              setCheck(false);
                    }
          },[])

          return(
                    <>
                    {check? 
                              <div className="header-section">
                                                  <div className="header-logo">
                                                  
                                                  </div>
                                                  <div className="header-details flex">
                              <Link  to={'home'} smooth={true} offset={-10} duration={400} onClick={() => setSelectedPage('home')}>
                                                  <div className='heading w'> <p>{'<'}Home{'/>'}</p>
                                                  <div className='line'></div>
                                                            </div> 
                                                            </Link>
                              <Link  to={'skill'} smooth={true} duration={500} onClick={() => setSelectedPage('skill')}>
                                                  <div className='heading w'> <p>{'<'}Skill{'/>'}</p>
                                                  <div className="line"></div>
                                                            </div> 
                                                            </Link>
                              <Link  to={'project'} smooth={true} duration={600} onClick={() => setSelectedPage('project')}>
                                        
                                                  <div className='heading w'>
                                                            <p>{'<'}Project{'/>'}</p>
                                                            <div className='line'></div>
                                                            </div>
                                                            </Link>
                              <a href='/about' onClick={() => setSelectedPage('about')}>

                                                  <div className='heading w'><p>{'<'}About{'/>'}</p>
                                                  <div className='line'></div>
                                                  </div>
                                                  </a>
                              <a href='https://drive.google.com/file/d/1w7er9nratfDbbiWAiNNBOb5wxbL9JC06/view?usp=sharing' target='_blank' onClick={() => setSelectedPage('resume')}>

                                                  <div className='heading w'><p>{'<'}Resume{'/>'}</p>
                                                  <div className='line'></div>
                                                  </div>
                                                  </a>
                              <Link  to={'contact'} smooth={true} duration={700} onClick={() => setSelectedPage('contact')}>

                                                  <div className='heading w'><p>{'<'}Contacts{'/>'}</p>
                                                  <div className='line'></div>
                                                  </div>
                                                  </Link>
                                                  </div>
                                        </div>
                    :
                     <div>
                              <Hamburger setSelectedPage={setSelectedPage}/>
                     </div>
                    }

                    </>
          )
}
