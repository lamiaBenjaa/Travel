import React, { useState } from "react";
import vid from "../assets/hero.mp4";
import { Link } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdCalendarMonth, MdFormatAlignLeft } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { FaCalendar, FaMapMarkerAlt, FaSearch, FaUser } from "react-icons/fa";

const Hero = () => {
  const [navActive, setNavActive] = useState("Hostelty");

  return (
    //     <section className="min-h-screen">
    //       <main className="w-full px-20 relative">
    //         <video className="w-full h-[84vh] object-cover rounded-xl" src={vid} muted loop autoPlay></video>

    //         <div className="absolute top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
    //           <h1 className="text-6xl text-white font-extrabold mb-4">Explore the whole world and enjoy its beauty</h1>
    //           <p className="text-white font-semibold">Find and write about your experience around the world</p>
    //         </div>

    //         <div className="border h-[210px] rounded-lg bg-white w-10/12 mx-auto -translate-y-40 px-10">
    //   <div className="flex items-center justify-between">
    //     <div className="flex items-center py-3">
    //       {["Hostelty", "Flights", "Bus", "Cars"].map((navItem) => (
    //         <button
    //           key={navItem}
    //           onClick={() => setNavActive(navItem)}
    //           className={`py-2 text-sm px-10 border-b-4 ${navActive === navItem ? 'border-gray-600' : 'border-gray-200'}`}
    //         >
    //           {navItem}
    //         </button>
    //       ))}
    //     </div>
    //     <div className="">
    //       <Link to="/" className="text-xs text-gray-500">
    //         Last Searching
    //       </Link>
    //     </div>
    //   </div>

    //   <div className={`flex items-center  py-5 ${navActive === 'Hostelty' ? '' : 'hidden'}`}>

    //   <div className="flex flex-col lg:flex-row items-center gap-6 w-full lg:w-auto">
    //   <div className="mb-4 lg:mb-0">
    //     <label htmlFor="destination" className="text-gray-600">Destination</label>
    //     <div className="flex items-center gap-2 bg-slate-100 px-2 py-3 rounded-md w-full">
    //       <FaMapMarkerAlt className="text-cyan-700" />
    //       <select id="destination" className="bg-transparent outline-none border-none text-sm w-full">
    //         <option value="">Bali, Indonesia</option>
    //       </select>
    //     </div>
    //   </div>

    //   <div className="mb-4 lg:mb-0">
    //     <label htmlFor="check-in" className="text-gray-600">Check-in</label>
    //     <div className="flex items-center gap-2 bg-slate-100 px-2 py-3 rounded-md w-full">
    //       <FaCalendar className="text-cyan-700" />
    //       <input type="date" id="check-in" className="bg-transparent outline-none border-none text-sm w-full" />
    //     </div>
    //   </div>

    //   <div className="mb-4 lg:mb-0">
    //     <label htmlFor="check-out" className="text-gray-600">Check-out</label>
    //     <div className="flex items-center gap-2 bg-slate-100 px-2 py-3 rounded-md w-full">
    //       <FaCalendar className="text-cyan-700" />
    //       <input type="date" id="check-out" className="bg-transparent outline-none border-none text-sm w-full" />
    //     </div>
    //   </div>

    //   <div className="mb-4 lg:mb-0">
    //     <label htmlFor="room-guest" className="text-gray-600">Room & Guest</label>
    //     <div className="flex items-center gap-2 bg-slate-100 px-2 py-3 rounded-md w-full">
    //       <FaUser className="text-cyan-700" />
    //       <input type="text" id="room-guest" className="bg-transparent outline-none border-none text-sm w-full" />
    //     </div>
    //   </div>

    //   <div className="flex items-center pt-5 lg:pt-0">
    //     <button className="flex items-center justify-center py-1 px-10 rounded-xl text-white bg-cyan-700">
    //       <FaSearch />
    //       Search
    //     </button>
    //   </div>
    // </div>

    //   </div>
    //   <div className={`flex items-center px-8 py-14 ${navActive === 'Flights' ? '' : 'hidden'}`}>
    //     {/* Flights content */}
    //     {/* ... */}
    //   </div>
    //   <div className={`flex items-center px-8 py-14 ${navActive === 'Bus' ? '' : 'hidden'}`}>
    //     {/* Bus content */}
    //     {/* ... */}
    //   </div>
    //   <div className={`flex items-center px-8 py-14 ${navActive === 'Cars' ? '' : 'hidden'}`}>
    //     {/* Cars content */}
    //     {/* ... */}
    //   </div>
    // </div>

    //       </main>
    //     </section>
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-extrabold mb-4">
            Explore the whole world and enjoy its beauty
          </h1>
          <p className="text-white font-semibold">
            Find and write about your experience around the world
          </p>

          

        </div>

       
      </div>
    </section>
  );
};

export default Hero;
