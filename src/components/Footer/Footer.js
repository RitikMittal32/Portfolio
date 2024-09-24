"use client";
import Image from "next/image";
import './Footer.css';
import Link from "next/link";
import axios from "axios";
import { useState } from "react";

export default function Footer() {
          const [name, setName] = useState('');
          const [email, setEmail] = useState('');
          const [message, setMessage] = useState('');


          const handleSubmit = async (e) => {
            e.preventDefault();
    
            if (!name || !email || !message) {
                alert('Please fill out all fields');
                return;
            }
        
        
            try {
              const response = await axios.post('https://portfoliobackend-q5a4.onrender.com/mail', {
                userName: name,
                userEmail: email,
              });
        
              if (response.status === 201) {
                alert('Email sent successfully!');
              } else {
                alert('Failed to send email.');
              }
            } catch (error) {
              alert('An error occurred while sending the email.');
            }
        
            // Optionally, clear the form fields after submission
            setName('');
            setEmail('');
            setMessage('');
          };
          return (
                    <>
                              <section id="contact">
                                        <div className="footer">
                                                  <div className="footer-box">
                                                            <div className="footer-text w">
                                                                      Let{`'`}s Connect
                                                            </div>

                                                            <div className="contact-form">
                                                                      <form onSubmit={(e) => handleSubmit(e)}>
                                                                                <div className="form-group">
                                                                                          <label htmlFor="name">Name</label>
                                                                                          <input
                                                                                                    type="text"
                                                                                                    id="name"
                                                                                                    value={name}
                                                                                                    onChange={(e) => setName(e.target.value)}
                                                                                                    placeholder="Enter your name"
                                                                                                    required
                                                                                          />
                                                                                </div>
                                                                                <div className="form-group">
                                                                                          <label htmlFor="email">Email</label>
                                                                                          <input
                                                                                                    type="email"
                                                                                                    id="email"
                                                                                                    value={email}
                                                                                                    onChange={(e) => setEmail(e.target.value)}
                                                                                                    placeholder="Enter your email"
                                                                                                    required
                                                                                          />
                                                                                </div>
                                                                                <div className="form-group">
                                                                                  <label htmlFor="message">Message</label>
                                                                                  <textarea
                                                                                    id="message"
                                                                                    value={message}
                                                                                    onChange={(e) => setMessage(e.target.value)}
                                                                                    placeholder="Enter your message"
                                                                                    required
                                                                                  />
                                                                                </div>
                                                                                <button type="submit" className="submit-button">Send</button>
                                                                      </form>
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
                                                  <div className="footer-bottom w">
                                                            <p>Designed and Developed by Ritik Mittal</p>
                                                  </div>
                                        </div>
                              </section>
                    </>
          )
}