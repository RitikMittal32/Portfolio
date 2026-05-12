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
                                                  My name is Ritik Mittal, and I am currently pursuing a B.Tech in Electronics and Communication Engineering at LNMIIT (2022–2026). I have a strong foundation in Data Structures and Algorithms and experience in full-stack development using React.js, Node.js, MongoDB, and Next.js. I have also worked on AI-based systems involving RAG pipelines, Dialogflow, Pinecone, and LangChain.

                                                  I have worked on projects such as Intervue, a platform that enables teachers to create live questions and allows students to participate and view results in real time. I also developed the LNMIIT Chatbot, which helps students access college-related information such as faculty details, library books, and general queries. Additionally, I built E-Mart, an e-commerce platform that allows users to browse products and place orders online.

                                                  Along with this, I have contributed as a Web Developer for TEDxLNMIIT and served as a Core Member of the Google Developer Group on campus.

                                                  I would like to inquire if there are any opportunities for a Software Development Engineer (SDE) role at your organization. I have attached my resume for your reference and would appreciate your time in reviewing my profile.

                                        </div>
                                        <div className="about-photo">
                                                        <Image 
                                                          src='/Ritik(passport).jpeg'
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