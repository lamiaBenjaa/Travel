import Header from '../components/Header'
import {motion} from 'framer-motion'

export default function Explore() {
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
     className='bg-white w-full h-screen'>
     <Header/>

    </motion.div>
  )
}
