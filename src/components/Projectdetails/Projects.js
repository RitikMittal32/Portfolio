"use client";
import { projects } from "@/data/projects/projectlist";
import './Project.css';
import Image from "next/image";
import Background from "../Background/Background";
import Link from "next/link";

const Projects = () => {

          return(
                    <>
                    <section id="project">
                    <div className="main-title w">
                              <h1>{"<"}Projects{"/>"}</h1>
                              <div className="project-line"></div>
                    </div>
                    
                    <div className="main-project">
                              <div className="project-structure">
                                        {projects.map((item,index) => {
                                                  return(
                                                            <div className="top" key={index}>
                                                            <div className="lines">

                                                            
                                                            <div className="box-line">
                                                                      <Image 
                                                                      src={'/sites/coding.png'}
                                                                      height={15}
                                                                      width={15}
                                                                      alt="coding"
                                                                      className="coimg"
                                                                      />
                                                            </div>
                                                            <div className={`main-line line${index+1}`}></div>

                                                            </div>
                                                  <div className="tilt-box-wrap">
                                                  <div className="tilt-box">
                                                            {/* <snap className="t_over"></snap>
                                                            <snap className="t_over"></snap>
                                                            <snap className="t_over"></snap>
                                                            <snap className="t_over"></snap>
                                                            <snap className="t_over"></snap>
                                                            <snap className="t_over"></snap>
                                                            <snap className="t_over"></snap>
                                                            <snap className="t_over"></snap>
                                                            <snap className="t_over"></snap> */}
                                                          
                                                          <div className="project-image">
                                                          {item.img ?
                                                          <Image 
                                                          src={`${item.img}`}
                                                          height={100}
                                                          width={200}
                                                          alt={`${item.name}`}
                                                          /> :
                                                          <>          
                                                          <p className="w"> Revealing Soon!</p>
                                                            </>
                                                          }
                                                          
                                                            </div> 
                                                            
                                                            
                                                            
                                                            <div className="verticle-line"></div>
                                                            <div className="project-text">
                                                            <div className="project-title w">
                                                                      {item.name}
                                                                      
                                                            </div >
                                                            
                                                            <div className="single-line"></div>
                                                            <div className="project-description w">
                                                                     <p> {item.description} </p>
                                                            </div>
                                                            {item.ViewLink ?
                                                            
                                                            <div className="project-view">
                                                            <div className="pview">
                                                            <Link
                                                            href={`${item.ViewLink}`}
                                                            target="_blank"
                                                            >   <button>VIEW</button></Link>
                                                            </div>
                                                            
                                                            </div>:
                                                            <>
                                                            </>
                                                            }

                                                  </div>
                                                             
                                                            
                                                  </div>
                                                  <div className="downside-effect"></div>
                                                  </div>
                                                  </div>
                                         )})}
                                                    <div className="box-line okk">
                                                                      <Image 
                                                                      src={'/sites/coding.png'}
                                                                      height={15}
                                                                      width={15}
                                                                      alt="coding"
                                                                      className="coimg"
                                                                      />
                                                            </div>

                              </div>
                    </div>
                    
                    </section>
                    </>
          )
}

export default Projects;