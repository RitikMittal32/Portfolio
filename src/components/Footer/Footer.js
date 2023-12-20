"use client";
import Image from "next/image";
import './Footer.css';
import Link from "next/link";

export default function Footer(){
          return(
                    <>
                    <section id="contact">
                    <div className="footer">
                              <div className="footer-box">
                                        <div className="footer-text">
                                                            Let{`'`}s Connect
                                        </div>
                                        <div className="all-sites">
                                                  <div className="instagram">
                                                            <Link href='https://www.instagram.com/ritikmittal_3?igshid=OGQ5ZDc2ODk2ZA==' target="_blank">
                                                                      <Image
                                                                      src='/sites/Instagram.png'
                                                                      height={50}
                                                                      width={50}
                                                                      alt="Instagram"
                                                                      />
                                                            </Link>
                                                  </div>
                                                  <div className="linked-in">
                                                  <Link href='https://www.linkedin.com/in/ritik-mittal-010443256/' target="_blank">
                                                  <Image
                                                                      src='/sites/LinkedIn.png'
                                                                      height={50}
                                                                      width={50}
                                                                      alt="LinkedIn"
                                                                      />
                                                            </Link>

                                                  </div>
                                                  <div className="github">
                                                  <Link href='https://github.com/RitikMittal32' target="_blank">
                                                            <Image
                                                                      src='/sites/Github.png'
                                                                      height={50}
                                                                      width={50}
                                                                      alt="Github"
                                                            />
                                                  </Link>

                                                  </div>
                                                  <div className="twitter">
                                                            <Link href='https://twitter.com/mittalritik_3' target="_blank">
                                                                      <Image
                                                                                src='/sites/Twitter.png'
                                                                                height={50}
                                                                                width={50}
                                                                                alt="Twitter"
                                                                      />
                                                            </Link>
                                                  </div>
                                        </div>
                              </div>
                              <div className="footer-bottom">
                                        <p>Designed and Developed by Ritik Mittal</p>
                              </div>
                    </div>
                    </section>
                    </>
          )
}