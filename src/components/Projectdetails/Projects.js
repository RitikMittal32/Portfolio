"use client";
import { projects } from "@/data/projects/projectlist";
import './Project.css';
import Image from "next/image";
import Background from "../Background/Background";

const Projects = () => {

          return(
                    <>
                    <section id="project">
                    <div className="main-title">
                              <h1>{"<"}Projects{"/>"}</h1>
                              <div className="project-line"></div>
                    </div>
                    
                    <div className="main-project">
                              <div className="project-structure">
                                        {projects.map((item,index) => {
                                                  return(
                                                            <div className="top">
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
                                                                      <Image 
                                                                      src='/uk.jpg'
                                                                      height={100}
                                                                      width={100}
                                                                      alt="uk"
                                                                      />
                                                                      
                                                            </div>
                                                            
                                                            <div className="verticle-line"></div>
                                                            <div className="project-text">
                                                            <div className="project-title">
                                                                      {/* {item.name} */}
                                                                      IDAAR CELL LNMIIT
                                                            </div >
                                                            
                                                            <div className="single-line"></div>
                                                            <div className="project-description">
                                                                     <p> Mdondnfksjnfksj  fnsijdnfkjsnfkjsnfjsdnfnfk jsadfbuwshbfuwbsfwghv fhuasbc shbdcwiuebdw qiuebdwiubfdiwejbi </p>
                                                            </div>
                                                            <div className="project-view">
                                                                      <div className="pview">
                                                                                <button>VIEW</button>
                                                                      </div>
                                                                      <div className="demo">
                                                                                <button>DEMO</button>
                                                                      </div>
                                                            </div>
                                                            </div>
                                                  </div>
                                                  <div className="downside-effect"></div>
                                                  </div>
                                                  </div>
                                         )})}
                              </div>
                    </div>
                    
                    </section>
                    </>
          )
}

export default Projects;