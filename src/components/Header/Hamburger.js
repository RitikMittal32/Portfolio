"use client";
import { useRef } from 'react';
import './Header.css';
import {Link} from 'react-scroll';


export default function Hamburger({setSelectedPage}) {
          const first = useRef();
          const third = useRef();
          const list  = useRef();

          const handleMove = () => {
                    first.current.classList.toggle("down");
                    third.current.classList.toggle("up"); 
                    list.current.classList.toggle("show");
          }


          return(
                    <div className='main-list'>
                              <div className='hamburger'>
                                        <div className='three' onClick={() => handleMove()}>
                                                  <div className='structure' ref={first}>
                                                            
                                                            <span></span>
                                                  </div>
                                                  <div className='structure'>
                                                            <span></span>
                                                  </div>
                                                   <div className='structure' ref={third}>
                                                            <span></span>


                                                  </div>
                                        </div>
                              </div>
                              <div className='hamburger-list'ref={list} >
                                        <div className='items'>
                                        <div className="items-details">
                              <Link  to={'home'} smooth={true} offset={-10} duration={400} onClick={() => setSelectedPage('home')}>
                                                  <div className='item-name'> <p>{'<'}Home{'/>'}</p>
                                                  <div className='line'></div>
                                                            </div> 
                                                            </Link>
                              <Link  to={'skill'} smooth={true} duration={500} onClick={() => setSelectedPage('skill')}>
                                                  <div className='item-name'> <p>{'<'}Skill{'/>'}</p>
                                                  <div className="line"></div>
                                                            </div> 
                                                            </Link>
                              <Link  to={'project'} smooth={true} duration={600} onClick={() => setSelectedPage('project')}>
                                        
                                                  <div className='item-name'>
                                                            <p>{'<'}Project{'/>'}</p>
                                                            <div className='line'></div>
                                                            </div>
                                                            </Link>
                              <a href='/about' onClick={() => setSelectedPage('about')}>

                                                  <div className='item-name'><p>{'<'}About{'/>'}</p>
                                                  <div className='line'></div>
                                                  </div>
                                                  </a>
                              <a href='/resume' onClick={() => setSelectedPage('resume')}>

                                                  <div className='item-name'><p>{'<'}Resume{'/>'}</p>
                                                  <div className='line'></div>
                                                  </div>
                                                  </a>
                              <Link  to={'contact'} smooth={true} duration={700} onClick={() => setSelectedPage('contact')}>

                                                  <div className='item-name'><p>{'<'}Contacts{'/>'}</p>
                                                  <div className='line'></div>
                                                  </div>
                                                  </Link>
                                                  </div>
                                        </div>
                              </div>
                    </div>
          )
}