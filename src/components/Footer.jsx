import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { IoLogoYoutube } from "react-icons/io";

export default function Footer() {
  return (
    <>
       <div className='grid lg:grid-cols-7 w-full gap-1 text-center py-5'>
       <div className='col-span-2 m-auto px-1 space-y-4' >
          <h1 className='font-semibold text-lg'>Travel</h1>
          <p className='px-4'>By Developing 75+ online tools for students, writers and SEO experts,
             PREPOSTSEO is one of the top free tools websites.</p>
            <div className='flex justify-center items-center  space-x-3 text-2xl'>
                <p><FaSquareFacebook className='text-teal-600'/></p>
                <p><PiInstagramLogoFill className='text-teal-600'/></p>
                <p><IoLogoYoutube className='text-teal-600'/></p>
            </div>
            <p className='border-b-2 lg:border-none'></p>
       </div>
       <div className='m-auto px-1 space-y-4'>
           <h1 className='font-semibold text-lg'>About</h1>
           <p>About Us</p>
           <p>Features</p>
           <p>News</p>
           <p className='border-b-2 lg:border-none'></p>
       </div>
       <div className=' m-auto px-1 space-y-4'>
           <h1 className='font-semibold text-lg'>Company</h1>
           <p>Why TRAVEL</p>
           <p>FAQs</p>
           <p>Blog</p>
           <p className='border-b-2 lg:border-none'></p>
       </div>
       <div className=' m-auto px-1 space-y-4'>
          <h1 className='font-semibold text-lg'>Support</h1>
          <p>Acount</p>
          <p>spport center</p>
          <p>Contact Us</p>
       </div>
       <div className='lg:col-span-2 m-auto px-1 space-y-4'>
         <h1 className='font-semibold text-lg'>New Sletter</h1>
         <p>Stay informed on our latest news!</p>
         <input className='rounded-lg px-1 w-40  block m-auto my-2 bg-slate-200' type='email' placeholder='Enter your E-mail ...'/>
         <button className='bg-teal-600 px-5 text-gray-100 font-semibold rounded-lg'>Send</button>
       </div>
    </div>
    </>

  )
}
