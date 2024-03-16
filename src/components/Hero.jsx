import React, { useState } from "react";
import vid from "../assets/hero.mp4";
import { Link } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdCalendarMonth, MdFormatAlignLeft } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { FaCalendar, FaMapMarkerAlt, FaSearch, FaUser } from "react-icons/fa";
import {motion} from 'framer-motion'

const Hero = () => {
  const [navActive, setNavActive] = useState("Hostelty");

  return (
  
    <>
    
    <section className="min-h-screen">
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-20  relative">
        <video
          className="w-full h-[84vh] object-cover rounded-xl"
          src={vid}
          muted
          loop
          autoPlay
        ></video>
   
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <motion.h1 
           variants={{
            hidden: { opacity: 0, y: -57 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.25 }}
          
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-extrabold mb-4">
            Explore the whole world and enjoy its beauty
          </motion.h1>
          <motion.p 
           variants={{
            hidden: { opacity: 0, y: -57 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.75 }}
           className="text-white font-semibold">
            Find and write about your experience around the world
          </motion.p>
        </div>

       
      </div>
    </section>
    <section>
      <div className="flex items-center justify-between px-20 pb-10">
        <div className="w-6/12 ">
          <motion.h1 
          variants={{
            hidden: { opacity: 0, x: -57 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.25 }}
           className="text-6xl font-bold mb-4">Popular Place</motion.h1>
          <motion.p 
          variants={{
            hidden: { opacity: 0, x: -57 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.25 }}
           className="text-lg">Let's enjoy this heaven on earth</motion.p>
        </div>
        <div className="w-6/12">
          <motion.p
          variants={{
            hidden: { opacity: 0, x:-200 },
            visible: { opacity: 1, x: 0 ,transition:{ duration:1, delay: 1 }},
          }}
          initial="hidden"
          whileInView="visible"
          className="text-lg ">
            Many places are very famous, beautiful,clean ,and will give a very deep imporession to visitores and will make them come back
          </motion.p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 items-center gap-5 justify-between px-20  ">
        <motion.div 
        whileHover={{scale:1.1}}
        transition={{duration:0.5}}
        className="p-3">
          <img className="h-[400px] w-[340px] rounded-xl" src="https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <div className="py-1 px-1">
            <h1 className="py-1 font-semibold">SC.Mindanou</h1>
            <h1 className="flex items-center gap-1">
              <FaMapMarkerAlt className=" text-cyan-600" />
              Mindanou,Philippines
            </h1>
          </div>
        </motion.div>
        <motion.div
        whileHover={{scale:1.1}}
        transition={{duration:0.5}}
         className="p-3">
          <img className="h-[400px] w-[340px] rounded-xl" src="https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <div className="py-1 px-1">
            <h1 className="py-1 font-semibold">Disneyland Tokyo</h1>
            <h1 className="flex items-center gap-1">
              <FaMapMarkerAlt className=" text-cyan-600" />
              Tokyo,Jaban
            </h1>
          </div>
        </motion.div>
        <motion.div
        whileHover={{scale:1.1}}
        transition={{duration:0.5}}
         className="p-3">
          <img className="h-[400px] w-[340px] rounded-xl" src="https://images.pexels.com/photos/2162891/pexels-photo-2162891.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <div className="py-1 px-1">
            <h1 className="py-1 font-semibold">Tousand Island</h1>
            <h1 className="flex items-center gap-1">
              <FaMapMarkerAlt className=" text-cyan-600" />
              Java,Indonesia
            </h1>
          </div>
        </motion.div>
        <motion.div
        whileHover={{scale:1.1}}
        transition={{duration:0.5}}  
        className="p-3">
          <img className="h-[400px] w-[340px] rounded-xl" src="https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <div className="py-1 px-1">
            <h1 className="py-1 font-semibold">Basililka Santo</h1>
            <h1 className="flex items-center gap-1">
              <FaMapMarkerAlt className=" text-cyan-600" />
              Venice,Italy
            </h1>
          </div>
        </motion.div>
      </div>
    </section>
    
   </>
  );
};

export default Hero;
