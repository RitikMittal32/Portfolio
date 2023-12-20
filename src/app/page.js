"use client";

import Background from '@/components/Background/Background'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Landingpage from '@/components/LandingPage/Landingpage'
import Projects from '@/components/Projectdetails/Projects'
import Skill from '@/components/Skills/Skill'
import Image from 'next/image';
import { useState,useEffect } from 'react';
import { HashLoader } from 'react-spinners';
import {motion} from "framer-motion";
// import ClipLoader from "react-spinners/ClipLoader";


export default function Home() {
  const [loading,setLoading]  = useState(false);
  const [selectedPage, setSelectedPage] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setSelectedPage("home");
      }
    };
    window.addEventListener("scroll", handleScroll);
    
    // return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() =>  {

    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    },2000)

  },[])
  return (
    <main>
      {loading?
      <div className='loader'>
        <HashLoader
        color={'#0000FF'}
        loading={loading}
        // cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> 
      </div>: 
      <div className='main'>
      <div className="left-0 top-0  w-full  border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 main-heading">
        <Header selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      </div>
      <motion.div onViewportEnter={() => setSelectedPage("home")}>
      <div className='landing-page'><Landingpage /></div>
      </motion.div>
      <motion.div onViewportEnter={() => setSelectedPage("skills")}>
      <div className='skillset'><Skill /></div>
      </motion.div>
      <motion.div onViewportEnter={() => setSelectedPage("projects")}>
      <div className='projects'><Projects /></div>
      </motion.div>
      <motion.div onViewportEnter={() => setSelectedPage("footer")}>
      <div className='footer'><Footer /></div>
      </motion.div>
    </div>
      }

        
    </main>
  )
}
