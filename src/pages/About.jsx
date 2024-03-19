import React, { useState } from 'react'
import Header from '../components/Header'
import {motion} from 'framer-motion'
import img from './about/a.jpg'
import img1 from './about/b.jpg'
import img2 from './about/c.jpg'
import img3 from './about/d.jpg'
import { FaUmbrellaBeach } from "react-icons/fa6";
import { GiCommercialAirplane } from "react-icons/gi";
import { BiBusSchool } from "react-icons/bi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { LuBaggageClaim } from "react-icons/lu";
import { RiTeamFill } from "react-icons/ri";
import man1 from './about/man1.jpeg'
import man2 from './about/man2.jpeg'
import man3 from './about/man3.jpeg'
import women1 from './about/women1.jpeg'
import women2 from './about/women2.jpeg'



export default function About() {
  const [Card,setCard] =useState(false)
  return (
    <motion.div
    initial={{
      x:'-100vw',
      opacity:0
    }}
    animate={{
      x:0,
      opacity:1
    }}
    transition={{
      duration:0.3
    }}
    exit={{
      y:'100vh',
    }}
     >
      <div className='w-full h-[400px] bg-no-repeat bg-cover object-cover shadow-xl ' style={{backgroundImage:`url(${img})`}}>
             <Header/>
       <div className='text-gray-100 text-center pt-24  space-y-5'>
         <motion.h1 
         initial={{
          y:-100,
          opacity:0
         }}
         whileInView={{
          y:0,
          opacity:1
         }}
         transition={{
          duration:1
         }}
         className='text-6xl font-extrabold '> About Us <GiCommercialAirplane  className='inline'/> </motion.h1>
         <motion.p
          whileInView={{scale:1.1}} transition={{duration:1}}
         className=' text-xl py-2 font-extralight text-cyan-700 bg-gray-200 shadow-inner shadow-blue-200'><i>Let us Take you to your Dream Destinations</i></motion.p>
      </div>
      </div>
      <div className='grid  lg:grid-cols-2 gap-4 p-24 '>
        <div className='w-[80%] px-3 text-center m-auto space-y-10'>
          <motion.h1
           initial={{
            opacity:0,
            x:-60
           }}
           whileInView={{
            opacity:1,
            x:0
           }}
           transition={{
            duration:1,
            delay:0.20
           }}
          className='font-extrabold text-4xl'>"Meet Our <p className='inline text-transparent bg-clip-text text-clip bg-gradient-to-r from-cyan-700 via-lime-600 to-yellow-600'>Travel Family</p>  Crafting Unforgettable Adventures Together <FaUmbrellaBeach  className='inline'/> "</motion.h1>
          <motion.p
          initial={{
            opacity:0,
            x:-60
           }}
           whileInView={{
            opacity:1,
            x:0
           }}
           transition={{
            duration:1,
            delay:0.40
           }}
          className='text-lg'>Begin your journey with us, where wanderlust meets exceptional experiences. 
            Our passion for travel fuels our commitment to curate unforgettable adventures,
             tailored to your dreams. Explore the world with confidence, guided by our 
             expertise and dedication to creating memories that last a lifetime. Welcome to our
             travel community, where every destination is a story waiting to be told.</motion.p>
            <motion.button
            initial={{
              opacity:0,
              x:-60
             }}
             whileInView={{
              opacity:1,
              x:0
             }}
             transition={{
              duration:1,
              delay:0.25
             }}
            className='px-5 py-2 bg-cyan-600 text-white font-bold rounded-3xl shadow-xl'>Learn more</motion.button>
        </div>
        <div className='grid grid-cols-2 gap-1 m-auto pt-10 lg:py-0'>
            <motion.img
            initial={{
              opacity:0,
              x:60
             }}
             whileInView={{
              opacity:1,
              x:0
             }}
             transition={{
              duration:1,
              delay:0.60
             }}
            src={img1} alt='islands' className='w-[320px] h-[520px] row-span-2 object-cover rounded-3xl shadow-lg shadow-amber-100 p-2 border-2 border-dashed border-blue-50'/>
            <motion.img
             initial={{
              opacity:0,
              x:60
             }}
             whileInView={{
              opacity:1,
              x:0
             }}
             transition={{
              duration:1,
              delay:0.80
             }}
            src={img2} alt='islands' className=' w-72 h-64 object-cover rounded-3xl  shadow-lg  shadow-amber-100 p-2 border-2 border-dashed border-blue-50'/>
            <motion.img
             initial={{
              opacity:0,
              x:60
             }}
             whileInView={{
              opacity:1,
              x:0
             }}
             transition={{
              duration:1,
              delay:0.90
             }}
            src={img3} alt='islands' className='w-72 h-64 object-cover rounded-3xl shadow-lg  shadow-amber-100 p-2 border-2 border-dashed border-blue-50'/>
        </div>
      </div>
       <div className='bg-gradient-to-b from-gray-50 via-slate-50 to-gray-50 py-16 drop-shadow'>
              
      <div className='text-center space-y-5 '>
           <motion.h1
           initial={{
            opacity:0,
            x:-60
           }}
           whileInView={{
            opacity:1,
            x:0
           }}
           transition={{
            duration:1,
            delay:0.25
           }}
           className='text-5xl font-extrabold w-[90%] lg:w-[40%] m-auto'>You Will Get Always Awesome Services</motion.h1>
           <motion.p
           initial={{
            opacity:0,
            x:60
           }}
           whileInView={{
            opacity:1,
            x:0
           }}
           transition={{
            duration:1,
            delay:0.25
           }}
           className='text-lg text-yellow-600 font-semibold'>We always focus on best Benifits as well as Professional Service</motion.p>
      </div>
      <motion.div
       initial={{
        y:100,
        opacity:0
       }}
       whileInView={{
        y:0,
        opacity:1
       }}
       transition={{
        duration:1
       }}
      className='w-[80%] m-auto grid md:grid-cols-3 gap-10 pt-24'>
        <motion.div
        whileHover={{scale:1.1}} transition={{duration:0.5}}
        className='text-center w-[80%] m-auto space-y-4'>
          <p className='text-[150px]'><BiBusSchool className='m-auto text-blue-200 drop-shadow-lg' /></p>
          <p className='font-bold text-xl'>Exclusive Trip</p>
          <p className='lg:px-10 text-lg'>"Indulge in exclusive journeys tailored to your wildest travel dreams."</p>
        </motion.div>
        <motion.div
        whileHover={{scale:1.1}} transition={{duration:0.5}}
        className='text-center w-[80%] m-auto space-y-4'>
          <p className='text-[150px]'><HiOutlineClipboardDocumentList  className='m-auto text-blue-200 drop-shadow-lg' /></p>
          <p className='font-bold text-xl'>Lot of Options</p>
          <p className='lg:px-10 text-lg'>"Explore endless possibilities and tailor-made adventures on our website."</p>
        </motion.div>
        <motion.div
        whileHover={{scale:1.1}} transition={{duration:0.5}}
        className='text-center w-[80%] m-auto space-y-4'>
          <p className='text-[150px]'><LuBaggageClaim  className='m-auto text-blue-200 drop-shadow-lg' /></p>
          <p className='font-bold text-xl'>Professionnel Guide</p>
          <p className='lg:px-10 text-lg'>"Expert guides: Navigate the world with seasoned professionals leading the way."</p>
        </motion.div>
      </motion.div>
      </div>
      <div>
        <div className='w-[90%] m-auto block md:grid md:grid-cols-8 gap-5 pt-20 text-center'>
          <motion.p
           initial={{
            opacity:0,
            x:-60
           }}
           whileInView={{
            opacity:1,
            x:0
           }}
           transition={{
            duration:1,
            delay:0.20
           }}
          className=' col-span-2 text-5xl font-extrabold md:border-r-8'>Our Team <RiTeamFill className=' inline text-amber-600'/></motion.p>
          <motion.p
           initial={{
            opacity:0,
            x:60
           }}
           whileInView={{
            opacity:1,
            x:0
           }}
           transition={{
            duration:1,
            delay:0.20
           }}
          className='col-span-6 text-lg'>"At TRAVEL, we're a close-knit team of travel aficionados dedicated to turning your wanderlust into reality. 
            Led by our visionary founder and supported by a blend of creativity and meticulous attention to detail, we strive to craft 
            bespoke adventures tailored to your dreams. With each member bringing their expertise to the table, we're committed to
             making every journey with us an unforgettable experience."</motion.p>
        </div>
        <motion.div
         initial={{
          opacity:0,
          y:100
         }}
         whileInView={{
          opacity:1,
          y:0
         }}
         transition={{
          duration:1,
          delay:0.20
         }}
        className='grid lg:grid-cols-4 py-28 w-[90%] m-auto space-x-5 space-y-6 lg:space-y-0'>
             <motion.div
             whileHover={{scale:1.1}} transition={{duration:1}}
             className='space-y-6 text-center shadow-xl'>
                <img src={man2} alt='person' className='m-auto rounded-full w-48 h-60'/>
                <p className='font-extrabold text-xl'>Oskar Evans</p>
                <p className='text-blue-400 font-semibold'>Founder and CEO</p>
                <motion.div className='bg-gray-50 px-12 py-2 rounded-xl drop-shadow-xl space-y-3'
                whileHover={{scale:1.1}}
                transition={{layout:{duration:1 , type:'spring'}}}
                layout onClick={()=>setCard(!Card)} >
                  <motion.button className='bg-gray-300 px-3 py-1 rounded-3xl text-lg font-semibold shadow-lg'>more Info</motion.button>
                   {
                    Card && (
                      <motion.p className='w-full' initial={{opacity:0}} animate={{opacity:1}}>
                        Background: Olivia is a passionate travel enthusiast with a background in
                         business and entrepreneurship. She founded the travel website with the goal
                          of simplifying travel planning and inspiring wanderlust in others.

                      </motion.p>
                    )
                   }
                </motion.div>
             </motion.div>
             <motion.div 
             whileHover={{scale:1.1}} transition={{duration:1}}
             className='space-y-6 text-center shadow-xl'>
                <img src={women1} alt='person' className='m-auto rounded-full w-48 h-60'/>
                <p className='font-extrabold text-xl'>Jane Reynolds</p>
                <p className='text-blue-400 font-semibold'>Head of Marketing</p>
                <motion.div className='bg-gray-50 px-12 py-2 rounded-xl drop-shadow-xl space-y-3'
                whileHover={{scale:1.1}}
                transition={{layout:{duration:1 , type:'spring'}}}
                layout onClick={()=>setCard(!Card)} >
                  <motion.button className='bg-gray-300 px-3 py-1 rounded-3xl text-lg font-semibold shadow-lg'>more Info</motion.button>
                   {
                    Card && (
                      <motion.p className='w-full' initial={{opacity:0}} animate={{opacity:1}}>
                    - Background: Mark is a seasoned marketing professional with expertise in digital marketing, branding, and customer acquisition. He has a creative approach to engaging with the travel audience.
                    - Responsibilities: Develops and implements marketing strategies, manages advertising campaigns, and monitors market trends to drive website traffic and user engagement.

                      </motion.p>
                    )
                   }
                </motion.div>
             </motion.div>
             <motion.div
             whileHover={{scale:1.1}} transition={{duration:1}}
             className='space-y-6 text-center shadow-xl'>
                <img src={man1} alt='person' className='m-auto rounded-full w-48 h-60'/>
                <p className='font-extrabold text-xl'>Nathan Pate</p>
                <p className='text-blue-400 font-semibold'>Head of Technology</p>
                <motion.div className='bg-gray-50 px-12 py-2 rounded-xl drop-shadow-xl space-y-3'
                whileHover={{scale:1.1}}
                transition={{layout:{duration:1 , type:'spring'}}}
                layout onClick={()=>setCard(!Card)} >
                  <motion.button className='bg-gray-300 px-3 py-1 rounded-3xl text-lg font-semibold shadow-lg'>more Info</motion.button>
                   {
                    Card && (
                      <motion.p className='w-full' initial={{opacity:0}} animate={{opacity:1}}>
                  - Background: Nathan is a seasoned tech expert with a strong background in web development and information technology. He is dedicated to optimizing the website's technology stack and user experience.
                  - Responsibilities: Manages the technical aspects of the website, including development, maintenance, security, and ensuring optimal performance for users.

                      </motion.p>
                    )
                   }
                </motion.div>
             </motion.div>
             <motion.div
             whileHover={{scale:1.1}} transition={{duration:1}}
             className='space-y-6 text-center shadow-xl'>
                <img src={women2} alt='person' className='m-auto rounded-full w-48 h-60'/>
                <p className='font-extrabold text-xl'>Sophie Anderson</p>
                <p className='text-blue-400 font-semibold'>Content Creator</p>
                <motion.div className='bg-gray-50 px-12 py-2 rounded-xl drop-shadow-xl space-y-3'
                whileHover={{scale:1.1}}
                transition={{layout:{duration:1 , type:'spring'}}}
                layout onClick={()=>setCard(!Card)} >
                  <motion.button className='bg-gray-300 px-3 py-1 rounded-3xl text-lg font-semibold shadow-lg'>more Info</motion.button>
                   {
                    Card && (
                      <motion.p className='w-full' initial={{opacity:0}} animate={{opacity:1}}>
                    - Background: Michelle is a seasoned travel writer and photographer with a passion for sharing immersive travel experiences through captivating storytelling and visually appealing content.
                    - Responsibilities: Creates engaging and informative content, including travel guides, destination features, and blog posts, to inspire and educate users on travel destinations and experiences.
                      </motion.p>
                    )
                   }
                </motion.div>
             </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
