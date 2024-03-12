import React, { useState } from 'react'
import { FaFilter } from "react-icons/fa6";
import amalfi from '../components/places/amalfi-coast.jpg'
import taj from '../components/places/taj.jpg'
import indonesia from '../components/places/indonesia.jpg'
import osaka from '../components/places/osaka.jpg'
import reinga from '../components/places/reinga.jpg'
import italy from '../components/places/italy.jpg'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import fiji from '../components/islands/fiji.jpg'
import bali from '../components/islands/bali.jpg'
import santorini from '../components/islands/santorini.jpg'
import surf from '../components/surfing/menSun.jpg'
import women from '../components/surfing/women.jpg'
import man from '../components/surfing/man.jpg'

export default function Places() {
  const [explore,setExplore]= useState('destination')
  return (
    <div className='w-full py-8 '>
      <div className='grid grid-cols-2  pt-12 px-20'>
           <div className='space-y-2'>
              <h1 className='text-5xl font-semibold '>Explore more</h1>
              <p className='text-lg'>Let's go on adventure</p>
           </div>
           <div>
              <p>All-inclisive vacations and flights Caribbean , Indonesian , and more than 1,300 destinations worldwide. Let's explore now . </p>
           </div>
      </div>
      <div className='flex justify-between items-center space-x-10 px-5 lg:px-8 xl:px-20'>
           <div className='space-x-4 space-y-4 lg:space-y-0  '>
              <button onClick={()=>setExplore('destination')} className={` rounded-lg px-4 py-1 font-semibold ${explore == 'destination' ? 'bg-gray-900 text-slate-200' : 'bg-slate-200 hover:ring-4 hover:ring-offset-blue-300 hover:bg-blue-200 '}`}>Popular </button>
              <button onClick={()=>setExplore('islands')} className={` rounded-lg px-4 py-1 font-semibold ${explore == 'islands' ? 'bg-gray-900 text-slate-200' : 'bg-slate-200 hover:ring-4 hover:ring-offset-blue-300 hover:bg-blue-200 '}`}>Islands</button>
              <button onClick={()=>setExplore('surfing')} className={` rounded-lg px-4 py-1 font-semibold ${explore == 'surfing' ? 'bg-gray-900 text-slate-200' : 'bg-slate-200 hover:ring-4 hover:ring-offset-blue-300 hover:bg-blue-200 '}`}>Surfing</button>
              <button onClick={()=>setExplore('parks')} className={` rounded-lg px-4 py-1 font-semibold ${explore == 'parks' ? 'bg-gray-900 text-slate-200' : 'bg-slate-200 hover:ring-4 hover:ring-offset-blue-300 hover:bg-blue-200 '}`}>Notation parks</button>
              <button onClick={()=>setExplore('lake')} className={` rounded-lg px-4 py-1 font-semibold ${explore == 'lake' ? 'bg-gray-900 text-slate-200' : 'bg-slate-200 hover:ring-4 hover:ring-offset-blue-300 hover:bg-blue-200 '}`}> Lake</button>
              <button onClick={()=>setExplore('beach')} className={` rounded-lg px-4 py-1 font-semibold ${explore == 'beach' ? 'bg-gray-900 text-slate-200' : 'bg-slate-200 hover:ring-4 hover:ring-offset-blue-300 hover:bg-blue-200 '}`}>Beach</button>
           </div>
           <div className='py-6'>
              <button className='flex space-x-2 font-semibold bg-slate-200 px-3 py-1 rounded-lg border-4 border-neutral-300 hover:ring-4 hover:ring-offset-blue-300 hover:bg-blue-200 ' ><p>Filters</p><FaFilter className=''/></button>
           </div>
      </div>
      <div className={`${explore == 'destination' ? 'py-10 px-10' : 'hidden'}`}>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 lg:gap-10 px-5 lg:px-8 xl:px-20  '>
             <div className='space-y-6 relative'>
                 <img src={amalfi} alt='amalfi' className='w-full h-[400px] md:h-60 xl:h-[270px] max-h-80 rounded-badge ' />
                 <div className='flex justify-between items-center px-6'>
                  <div>
                     <h1 className='font-bold text-xl'>Amalfi Coast</h1>
                     <p ><FaMapMarkerAlt className='inline text-cyan-500'/> Amalfi, Italy</p>
                  </div>
                  <div className='flex'>
                     <p className='font-bold text-xl'>$148/</p>
                     <p>pax</p>
                  </div>
                 </div>
                 <div className='flex bg-gray-200 absolute top-1 right-5 text-sm space-x-1 rounded-lg p-1 drop-shadow-2xl'><FaStar className='text-yellow-500' /><p className='font-B'>4.9</p></div>
              </div>
             <div className='space-y-8 relative'>
                 <img src={taj} alt='taj' className='w-full h-[400px] md:h-60 xl:h-[270px] max-h-80- rounded-badge' />
                 <div className='flex justify-between items-center px-6'>
                  <div>
                     <h1 className='font-bold text-xl'>Taj Mahal</h1>
                     <p ><FaMapMarkerAlt className='inline text-cyan-500'/> Agra, India</p>
                  </div>
                  <div className='flex'>
                     <p className='font-bold text-xl'>$140/</p>
                     <p>pax</p>
                  </div>
                 </div>
                 <div className='flex bg-gray-200 absolute top-1 right-5 text-sm space-x-1 rounded-lg p-1 drop-shadow-2xl'><FaStar className='text-yellow-500' /><p className='font-B'>4.9</p></div>
                </div>
             <div className='space-y-6 relative'>
                 <img src={indonesia} alt='indonesia' className='w-full h-[400px] md:h-60 xl:h-[270px] max-h-80 rounded-badge' /> 
                 <div className='flex justify-between items-center px-6'>
                  <div>
                     <h1 className='font-bold text-xl'>Tanah Gajah</h1>
                     <p ><FaMapMarkerAlt className='inline text-cyan-500'/> Bali, Indonesia</p>
                  </div>
                  <div className='flex'>
                     <p className='font-bold text-xl'>$148/</p>
                     <p>pax</p>
                  </div>
                 </div>
                 <div className='flex bg-gray-200 absolute top-1 right-5 text-sm space-x-1 rounded-lg p-1 drop-shadow-2xl'><FaStar className='text-yellow-500' /><p className='font-B'>4.9</p></div>
             </div>
             <div className='space-y-6 relative'>
                 <img src={osaka} alt='osaka' className='w-full h-[400px] md:h-60 xl:h-[270px] max-h-80 rounded-badge relative' />
                 <div className='flex justify-between items-center px-6'>
                  <div>
                     <h1 className='font-bold text-xl'>Osaka Castle</h1>
                     <p ><FaMapMarkerAlt className='inline text-cyan-500'/> Osaka, Japan</p>
                  </div>
                  <div className='flex'>
                     <p className='font-bold text-xl'>$156/</p>
                     <p>pax</p>
                  </div>
                 </div>
                 <div className='flex bg-gray-200 absolute top-1 right-5 text-sm space-x-1 rounded-lg p-1 drop-shadow-2xl'><FaStar className='text-yellow-500' /><p className='font-B'>4.9</p></div>
             </div>
             <div className='space-y-6 relative'>
                 <img src={reinga} alt='reinga' className='w-full h-[400px] md:h-60 xl:h-[270px] max-h-80 rounded-badge' />
                 <div className='flex justify-between items-center px-6'>
                  <div>
                     <h1 className='font-bold text-xl'>Cape Reinga</h1>
                     <p ><FaMapMarkerAlt className='inline text-cyan-500'/> Northland, New Zealand</p>
                  </div>
                  <div className='flex'>
                     <p className='font-bold text-xl'>$164/</p>
                     <p>pax</p>
                  </div>
                 </div>
                 <div className='flex bg-gray-200 absolute top-1 right-5 text-sm space-x-1 rounded-lg p-1 drop-shadow-2xl'><FaStar className='text-yellow-500' /><p className='font-B'>4.9</p></div>
             </div>
             <div className='space-y-6 relative'>
                <img src={italy} alt='italy' className='w-full h-[400px] md:h-60 xl:h-[270px] max-h-80  rounded-badge' />
                <div className='flex justify-between items-center px-6'>
                  <div>
                     <h1 className='font-bold text-xl'>Sorrento ,Italy</h1>
                     <p ><FaMapMarkerAlt className='inline text-cyan-500'/> Amalfi, Italy</p>
                  </div>
                  <div className='flex'>
                     <p className='font-bold text-xl'>$148/</p>
                     <p>pax</p>
                  </div>
                </div>
                <div className='flex bg-gray-200 absolute top-1 right-5 text-sm space-x-1 rounded-lg p-1 drop-shadow-2xl'><FaStar className='text-yellow-500' /><p className='font-B'>4.9</p></div>
             </div>
        </div>
      </div>
      <div className={`${explore == 'islands' ? 'w-full m-auto py-10 lg:mb-36  xl:mb-16' : 'hidden'}`} >
          <div className='grid lg:grid-cols-3 gap-6 w-[90%] m-auto space-y-36 md:space-y-32 lg:space-y-0'>
             <div className='relative ' >
                  <img src={fiji} className='w-80 h-[500px] m-auto rounded-full drop-shadow-2xl '/>
                  <div className='w-full text-center bg-slate-50 h-fit py-5 absolute top-[70%] rounded-badge drop-shadow-2xl space-y-5 px-5'>
                     <h1 className='font-bold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-slate-900 to-blue-700'>Majestic Volcanic Island</h1>
                     <p className='text-xl '>Explore a striking volcanic island with towering peaks,
                         cascading waterfalls, and rugged terrain perfect for
                          hiking and adventure. Our website offers unique tours
                         and accommodations for a journey into nature’s grandeur.
                     </p>
                  </div>      
             </div>
             <div className='relative lg:pt-20'>
                <img src={santorini} className='w-80 h-[500px]  m-auto rounded-full drop-shadow-2xl'/>
                <div className='w-full text-center bg-slate-50 h-fit py-5 absolute top-[70%] lg:top-[85%] rounded-badge drop-shadow-2xl space-y-5 px-5'>
                     <h1 className='font-bold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-slate-600 to-blue-700'>Greece Island</h1>
                     <p className='text-xl '> Immerse yourself in a charming island town with cobbled streets,
                      colorful buildings, and a rich cultural heritage. Our website highlights its history and 
                      present-day activities, inviting visitors to experience its unique charm.
                     </p>
               </div>  
             </div>
             <div className='relative'>
               <img src={bali} className='w-80 h-[500px]  m-auto rounded-full drop-shadow-2xl'/>
               <div className='w-full text-center bg-slate-50 h-fit py-5 absolute top-[70%] rounded-badge drop-shadow-2xl space-y-5 px-5'>
                     <h1 className='font-bold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-blue-700'>Bali Island</h1>
                     <p className='text-xl '>  Discover an untouched wilderness island with dense jungles,
                      exotic wildlife, and hidden waterfalls. Our website promotes eco-conscious tours and 
                      accommodations for nature lovers and eco-adventurers seeking a deeper connection with the natural.
                     </p>
               </div>  
             </div>
          </div>
      </div>
      <div className={`${explore == 'surfing' ? 'w-full xl:w-[90%] m-auto' :'hidden'}`}>
         <div className='py-16 px-16'>
            <div className='grid lg:grid-cols-2 py-16 relative '>
                <img src={man} alt='man' className='w-full m-auto rounded-3xl shadow-2xl'/>
                 <div className=' py-6 text-center px-10'>
                     <h1 className='text-[50px] md:text-7xl font-bold text-white absolute top-[30%] md:top-[36%] right-[15%] md:right-[50%] '>Offre 15%</h1>
                     <p className='text-xl py-16'>Surfing not only offers a thrilling physical workout but also fosters a sense of freedom,
                        connection to nature, and inner peace. Riding the waves provides a unique sense of flow 
                        and mindfulness as surfers tune into the rhythm of the ocean, feeling the power of the waves
                        beneath them. 
                     </p>
                     <button className='text-xl bg-cyan-500 text-white p-2 rounded-2xl'>Show more</button>
                 </div>
            </div>
            <div className='grid lg:grid-cols-2'>
                 <div className=''>
                     <h1 className='hidden lg:flex text-xl'>Learning to surf is an exhilarating journey that combines physical fitness, mental focus,
                         and a deep connection with the ocean. Beginners are introduced to the basics of surfing,
                          including understanding ocean dynamics, paddling techniques, and mastering the art of catching 
                          and riding waves. As novices develop their skills, they progress to learning how to pop up on the board,
                           maintain balance, and carve turns on the face of the waves.
                     </h1>
                 </div>
                 <img src={women} alt='women' className='w-full m-auto  rounded-3xl shadow-2xl'/>
            </div>
         </div>
      </div>
    </div>
  )
}
