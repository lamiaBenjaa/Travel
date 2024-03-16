import React from 'react'
import Header from '../components/Header'
import {motion} from 'framer-motion'

export default function Ticket() {
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
      duration:0.7
    }}
    exit={{
      y:'100vh',
    }}
     className='bg-purple-200 w-full h-screen'>
      <Header/>
    </motion.div>
  )
}
