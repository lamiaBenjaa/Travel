import React from 'react';
import vid from '../assets/hero.mp4';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen">
      <main className="w-full px-20 relative">
        <video className='w-full h-[84vh] object-cover rounded-xl' src={vid} muted loop autoPlay></video>

        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className='text-6xl text-white   font-extrabold mb-4'>Explore the whole world and enjoy its beauty</h1>
          <p className='text-white font-semibold'>Find and write about your experience around the world</p>
        </div>

        <div className='border h-[250px] rounded-lg bg-white w-10/12 mx-auto -translate- -translate-y-52 px-10'>
         <div className='flex items-center justify-between'>
         <div className=' flex items-center  '>
            <button className='py-2 px-10 border-b-4  border-black'>Hostelty</button>
            <button className='py-2 px-10 border-b-4  border-gray-300'>Flights</button>
            <button className='py-2 px-10 border-b-4  border-gray-300'>Bus & Shuttle </button>
            <button className='py-2 px-10 border-b-4  border-gray-300'>Cars</button>
          </div>
          <div className=''>
            <Link className='font-xs text-gray-500'>Last Searching</Link>
          </div>
         </div>
          <hr />
          <div>r</div>


        </div>
      </main>
    </section>
  );
};

export default Hero;
