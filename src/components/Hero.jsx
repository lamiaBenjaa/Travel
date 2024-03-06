import React, { useState } from 'react';
import vid from '../assets/hero.mp4';
import { Link } from 'react-router-dom';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdCalendarMonth } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";

const Hero = () => {
  const [navActive, setNavActive] = useState('Hostelty');

  return (
    <section className="min-h-screen">
      <main className="w-full px-20 relative">
        <video className="w-full h-[84vh] object-cover rounded-xl" src={vid} muted loop autoPlay></video>

        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-6xl text-white font-extrabold mb-4">Explore the whole world and enjoy its beauty</h1>
          <p className="text-white font-semibold">Find and write about your experience around the world</p>
        </div>

        <div className="border h-[250px] rounded-lg bg-white w-10/12 mx-auto -translate-y-52 px-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button onClick={() => setNavActive('Hostelty')} className={`${navActive==='Hostelty'?'py-2 px-10 border-b-4 border-black':'py-2 px-10 border-b-4 border-gray-300'}`}>
                Hostelty
              </button>
              <button onClick={() => setNavActive('Flights')} className={`${navActive==='Flights'?'py-2 px-10 border-b-4 border-black':'py-2 px-10 border-b-4 border-gray-300'}`}>
                Flights
              </button>
              <button onClick={() => setNavActive('Bus')} className={`${navActive==='Bus'?'py-2 px-10 border-b-4 border-black':'py-2 px-10 border-b-4 border-gray-300'}`}>
                Bus & Shuttle
              </button>
              <button onClick={() => setNavActive('Cars')} className={`${navActive==='Cars'?'py-2 px-10 border-b-4 border-black':'py-2 px-10 border-b-4 border-gray-300'}`}>
                Cars
              </button>
            </div>
            <div className="">
              <Link to="/" className="text-xs text-gray-500">
                Last Searching
              </Link>
            </div>
          </div>
          <hr />
          <div className={`${navActive === 'Hostelty' ? 'flex items-center px-8 py-14' : 'hidden'}`}>
            <div className='flex justify-around space-x-6 '>  
                 <div className="">
                   <HiOutlineLocationMarker/>
                  </div>
                  <div className="px-2 ">
                    <h4>Destination</h4>
                    <input type="text " placeholder="Your destination ..."/>
                  </div>
                      
                  <div>
                  <MdCalendarMonth />
                  </div>
                  <div className="px-2 ">
                    <h4>Check-in</h4>
                    <input type='date' />
                  </div>
           
                  <div>
                  <MdCalendarMonth />
                  </div>
                  <div className="px-2 ">
                    <h4>Check-out</h4>
                    <input type='date'/>
                  </div>
           
                  <div>
                  <IoPerson />
                  </div>
                  <div className="px-2 ">
                    <h4>Room & guest</h4>
                    <input type='text' placeholder="Room & guest ..."/>
                  </div>

            </div>
            <button className="flex justify-start items-center bg-cyan-500 text-white w-36 h-10 font-semibold rounded-lg">
              <IoSearchOutline className="m-2"/>
              Search
            </button>
          </div>
          <div className={`${navActive === 'Flights' ? 'flex items-center px-8 py-14' : 'hidden'}`}>
          <div className='flex justify-around space-x-6 '>  
                 <div className="">
                   <HiOutlineLocationMarker className=""/>
                  </div>
                  <div className="px-2 ">
                    <h4>Destination</h4>
                    <input type="text " placeholder="Your destination ..."/>
                  </div>
                      
                  <div>
                  <MdCalendarMonth />
                  </div>
                  <div className="px-2 ">
                    <h4>Check-in</h4>
                    <input type='date' />
                  </div>
           
                  <div>
                  <MdCalendarMonth />
                  </div>
                  <div className="px-2 ">
                    <h4>Check-out</h4>
                    <input type='date'/>
                  </div>
           
                  <div>
                  <IoPerson />
                  </div>
                  <div className="px-2 ">
                    <h4>Room & guest</h4>
                    <input type='text' placeholder="Room & guest ..."/>
                  </div>

            </div>
            <button className="flex justify-start items-center bg-cyan-500 text-white w-36 h-10 font-semibold rounded-lg">
              <IoSearchOutline className="m-2"/>
              Search
            </button>
          </div>
          <div className={`${navActive === 'Bus' ? 'flex items-center px-8 py-14' : 'hidden'}`}>
          <div className='flex justify-around space-x-6 '>  
                 <div className="">
                   <HiOutlineLocationMarker className=""/>
                  </div>
                  <div className="px-2 ">
                    <h4>Destination</h4>
                    <input type="text " placeholder="Your destination ..."/>
                  </div>
                      
                  <div>
                  <MdCalendarMonth />
                  </div>
                  <div className="px-2 ">
                    <h4>Check-in</h4>
                    <input type='date' />
                  </div>
           
                  <div>
                  <MdCalendarMonth />
                  </div>
                  <div className="px-2 ">
                    <h4>Check-out</h4>
                    <input type='date'/>
                  </div>
           
                  <div>
                  <IoPerson />
                  </div>
                  <div className="px-2 ">
                    <h4>Room & guest</h4>
                    <input type='text' placeholder="Room & guest ..."/>
                  </div>

            </div>
            <button className="flex justify-start items-center bg-cyan-500 text-white w-36 h-10 font-semibold rounded-lg">
              <IoSearchOutline className="m-2"/>
              Search
            </button>
          </div>
          <div className={`${navActive === 'Cars' ? 'flex items-center px-8 py-14' : 'hidden'}`}>
          <div className='flex justify-around space-x-6 '>  
                 <div className="">
                   <HiOutlineLocationMarker className=""/>
                  </div>
                  <div className="px-2  ">
                    <h4>Destination</h4>
                    <input type="text " placeholder="Your destination ..."/>
                  </div>
                      
                  <div>
                  <MdCalendarMonth />
                  </div>
                  <div className="px-2 ">
                    <h4>Check-in</h4>
                    <input type='date' />
                  </div>
           
                  <div>
                  <MdCalendarMonth />
                  </div>
                  <div className="px-2 ">
                    <h4>Check-out</h4>
                    <input type='date'/>
                  </div>
           
                  <div>
                  <IoPerson />
                  </div>
                  <div className="px-2 ">
                    <h4>Room & guest</h4>
                    <input type='text' placeholder="Room & guest ..."/>
                  </div>

            </div>
            <button className="flex justify-start items-center bg-cyan-500 text-white w-36 h-10 font-semibold rounded-lg">
              <IoSearchOutline className="m-2"/>
              Search
            </button>
          </div>
          
        </div>
      </main>
    </section>
  );
};

export default Hero;
