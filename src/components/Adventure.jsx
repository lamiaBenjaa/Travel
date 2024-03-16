import React from 'react'
import paris from '../components/adventure/paris.jpg'
import newYork from '../components/adventure/newYork.jpg'
import seoul from '../components/adventure/seoul.jpg'
import bali from '../components/adventure/bali.jpg'
import { PiAirplaneTiltFill } from "react-icons/pi";
import vedio from '../components/adventure/adventure.mp4'
import { motion } from 'framer-motion'

export default function Adventure() {
  return (
    <>
        <div className='w-full m-auto lg:pt-28 '>
          <div className='text-center space-y-2 py-8'>
              <motion.h1
              variants={{
                hidden:{opacity:0 , x:-50},
                visible:{opacity:1 , x:0 , transition:{duration:1 , delay:0.25}},
              }} 
              initial='hidden'
              whileInView='visible'
               className='text-5xl font-bold'>Let's go on an adventure</motion.h1>
              <motion.p
              variants={{
                hidden:{opacity:0 , x:50},
                visible:{opacity:1 , x:0 , transition:{duration:1 , delay:0.25}},
              }} 
              initial='hidden'
              whileInView='visible' 
               className='text-lg'>Find and book a great experience</motion.p>
          </div>
      <motion.div
      variants={{
        hidden:{opacity:0 , y:200},
        visible:{opacity:1 , y:0 , transition:{duration:1 , delay:0.4}},
      }}
      initial='hidden'
      whileInView='visible'
       className='grid grid-cols-2 md:grid-cols-4 gap-8 w-[90%] m-auto md:px-4 lg:px-12 px-12 py-10 relative'>
         <div className='border-dashed border-4 border-zinc-200 opacity-90 w-fit p-2 space-y-2 m-auto'>
              <img className='w-44 m-auto' src={paris} alt='paris' />
              <p className='text-center text-gray-400 font-semibold'>PARIS</p>
              <p className='absolute top-[5%] left-[10%] md:left-[1%] lg:left-[5%]'><PiAirplaneTiltFill className='text-5xl text-white bg-cyan-600 py-2 rounded-full' /></p>
         </div>
         <div className='border-dashed border-4 border-zinc-200  opacity-90 w-fit p-2 space-y-2  m-auto'>
              <img className='w-44 m-auto' src={newYork} alt='new york' />
              <p className='text-center text-gray-400 font-semibold'>NEW YORK</p>
              <p className='absolute top-[5%] left-[53%]  md:left-[25%] lg:left-[29%]'><PiAirplaneTiltFill className='text-5xl text-white bg-cyan-600 py-2 rounded-full' /></p>
         </div>
         <div className='border-dashed border-4 border-zinc-200 opacity-90 w-fit p-2 space-y-2  m-auto'>
              <img className='w-44 m-auto' src={seoul} alt='seoul' />
              <p className='text-center text-gray-400 font-semibold'>SEOUL</p>
              <p className='absolute top-[50%] left-[10%] md:top-[5%] md:left-[50%] lg:left-[53%]'><PiAirplaneTiltFill className='text-5xl text-white bg-cyan-600 py-2 rounded-full' /></p>
         </div>
         <div className='border-dashed border-4 border-zinc-200 opacity-90 w-fit p-2 space-y-2 m-auto'>
              <img className='w-44 m-auto' src={bali} alt='bali' />
              <p className='text-center text-gray-400 font-semibold'>BALI</p>
              <p className='absolute top-[50%] left-[53%] md:top-[5%] md:left-[75%] lg:left-[77%]'><PiAirplaneTiltFill className='text-5xl text-white bg-cyan-600 py-2 rounded-full' /></p>
         </div>
      </motion.div>
    </div>
    <div className='w-full py-12 space-y-10'>
        <div className='flex justify-between w-[80%] m-auto'>
            <motion.h1
             variants={{
               hidden:{opacity:0 , x:-40},
               visible:{opacity:1 , x:0 , transition:{duration:1 , delay:0.25}},
             }} 
             initial='hidden'
             whileInView='visible'
             className='text-4xl font-bold'>Book tickets and go now!</motion.h1>
            <motion.button
             variants={{
               hidden:{opacity:0 , x:40},
               visible:{opacity:1 , x:0 , transition:{duration:1 , delay:0.25}},
             }} 
             initial='hidden'
             whileInView='visible'
             className=' bg-teal-500 text-gray-100 px-4 drop-shadow-lg py-1 font-bold rounded-lg'>Book now</motion.button>
        </div>
        <div className='w-[77%] m-auto drop-shadow-md '>
           <video src={vedio} loop autoPlay muted className=' rounded-3xl w-full m-auto h-'>
           </video>
           
        </div>
        <p className='border-b w-[80%] m-auto'></p>
    </div>
    </>

  )
}
