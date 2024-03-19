import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Ticket from "./pages/Ticket"
import Explore from "./pages/Explore"
import { AnimatePresence } from "framer-motion"
import About from "./pages/About"
import Footer from "./components/Footer"


export default function App() {
  const location =useLocation();
  return (
    <div>
      <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname} >
        <Route path="/" element={<Home/>}/>
        <Route path="/Ticket" element={<Ticket/>}/>
        <Route path="/Explore" element={<Explore/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
      <Footer/>
     </AnimatePresence>
    </div>
    
  )
}