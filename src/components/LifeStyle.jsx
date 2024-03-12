import React from 'react';
import img from './mountain.jpg'
import i1 from './avatars/1.jpg'
import i2 from './avatars/2.jpg'
import i3 from './avatars/3.jpg'
import { FaStar } from "react-icons/fa";

const LifeStyle = () => {
    return (
        <div className='p-6 grid md:grid-cols-2 gap-8  w-full h-fit'>
          <div className='text-center  md:col-span-2 h-fit p-5'>
               <h1 className='font-semibold text-4xl '>Travel to make sweet memories</h1>
               <p className='font-B text-lg'>Find trips fit a flexible lifestyle</p>
          </div>
          <div className=' p-10 space-y-6 md:space-y-2 xl:space-y-12 lg:p-20 xl:p-32'>
               <div className='space-y-4 '>
                  <p className='text-center bg-blue-500 font-C w-10 text-blue-100 rounded-lg'>01</p>
                  <h1 className='text-xl font-semibold '>Find trips that fit your freedom</h1>
                  <p>Travelling offers freedom and flexibility , solitude and spontaneity , and privacy and purpose .</p>
               </div>
               <div className='space-y-4'>
                  <p className='text-center bg-purple-500 font-C w-10 text-purple-100 rounded-lg'>02</p>
                  <h1 className='text-xl font-semibold'>Get back to nature by travel</h1>
                  <p>the world is a playground and you can finally explore Mother Nature's inimitable canvas .</p>
               </div>
               <div className='space-y-4'>
                  <p className='text-center bg-green-500 font-C w-10 text-green-100 rounded-lg'>03</p>
                  <h1 className='text-xl font-semibold'>Reignite those travel tastebuds </h1>
                  <p>There are infinite reasons to love travel , one of them being the food , glorious food .</p>
               </div>
               <button className='bg-cyan-600 text-cyan-100 w-fit p-3 text-md rounded-2xl'>Start your explore</button>
          </div>
          <div className=' px-16 py-6 md:py-16 md:px-3 lg:px-20 xl:px-36 xl:py-32  relative '>
            <img src={img} className='rounded-[40px] place-items-center  max-h-[900px] md:max-h-[530px]   xl:max-h-[650px] '/>
            <div className='flex justify-between items-center space-x-3 p-3 w-fit h-14 bg-cyan-50 rounded-xl absolute top-[200px] md:top-[150px] xl:top-[250px]  left-12 md:left-1 xl:left-12 shadow-lg'>
                    <img src={i1} alt='avatar girl' className='w-9 rounded-full'/>
                    <div>
                      <h1>Kamelia Diana</h1>
                      <p className='flex space-x-2'><FaStar className='text-yellow-500 text-lg  '/><p className='font-D'>3.5</p></p>
                    </div>
            </div>
            <div className='flex justify-between items-center space-x-3 p-3 w-fit h-14 bg-cyan-50 rounded-xl absolute top-[500px] md:top-[400px] xl:top-[500px] left-12 md:left-1 xl:left-12 shadow-lg'>
                    <img src={i2} alt='avatar girl' className='w-9 rounded-full'/>
                    <div>
                      <h1>Haikal Nouris</h1>
                      <p className='flex space-x-2'><FaStar className='text-yellow-500 text-lg inline '/><p className='font-D'>3.5</p></p>
                    </div>
            </div>
            <div className='flex justify-between items-center space-x-3 p-3 w-fit h-14 bg-cyan-50 rounded-xl absolute top-[350px] md:top-[280px] xl:top-[350px] right-10 md:hidden xl:flex  shadow-lg'>
                    <img src={i3} alt='avatar girl' className='w-9 rounded-full'/>
                    <div>
                      <h1>Joana Zofrana</h1>
                      <p className='flex space-x-2'><FaStar className='text-yellow-500 text-lg inline '/><p className='font-D'>3.5</p></p>
                    </div>
            </div>
          </div>
        </div>
    )
    
}



export default LifeStyle;