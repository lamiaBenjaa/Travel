import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Ticket from "./pages/Ticket"
import Explore from "./pages/Explore"
import Activity from "./pages/Activity"
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Ticket" element={<Ticket/>}/>
        <Route path="/Explore" element={<Explore/>}/>
        <Route path="/Activity" element={<Activity/>}/>
      </Routes>
    
    </div>
    
  )
}