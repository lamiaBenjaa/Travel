import Adventure from "../components/Adventure"
import Header from "../components/Header"
import Hero from "../components/Hero"
import LifeStyle from "../components/LifeStyle"
import Places from "../components/Places"
import Footer from "../components/Footer"
import {motion} from 'framer-motion'


const Home = () => {
  return (
    
    <motion.div
    initial={{
      y:'100vh',
      opacity:0
    }}
    animate={{
      y:0,
      opacity:1
    }}
    transition={{
      duration:0.7
    }}
    exit={{
      y:'100vh',
    }}
     >
       <Header />
       <Hero />
       <LifeStyle/>
       <Places/>
       <Adventure/>
       <Footer/>
    </motion.div>
    
  )
}

export default Home