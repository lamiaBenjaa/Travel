import React from 'react';
import vid from '../assets/hero.mp4';

const Hero = () => {
  return (
    <section className="min-h-screen">
      <main className="w-full px-20 relative">
        <video className='w-full h-[84vh] object-cover rounded-xl' src={vid} muted loop autoPlay></video>

        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className='text-6xl text-white   font-extrabold mb-4'>Explore the whole world and enjoy its beauty</h1>
          <p className='text-white font-semibold'>Find and write about your experience around the world</p>
        </div>
      </main>
    </section>
  );
};

export default Hero;
