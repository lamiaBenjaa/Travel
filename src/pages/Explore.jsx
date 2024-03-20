import Header from '../components/Header'
import {motion} from 'framer-motion'
import img from './explore/g.jpg'
import bg from './explore/bg.jpg'
import img1 from './explore/c.jpg'
import img2 from './explore/e.jpg'
import bahmas from './explore/bahmas.jpg'
import bali from './explore/bali.jpg'
import caribbean from './explore/caribbean.jpg'
import fiji from './explore/fiji.jpg'
import greece from './explore/greece.jpg'
import hawai from './explore/hawai.jpg'
import maldives from './explore/maldives.jpg'
import philipine from './explore/philipine.jpg'
import tailand from './explore/tailand.jpg'
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { CiCircleChevRight } from "react-icons/ci";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsFillCalendar2DateFill, BsGear } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import { HiTicket } from "react-icons/hi2";
import { GiCommercialAirplane } from "react-icons/gi";


export default function Explore() {
  const sliderLeft =()=>{
    const slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const sliderRight =()=>{
    const slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }
  return (
    <>
  
    <motion.div
    initial={{
      x:'-100vw',
      opacity:0
    }}
    animate={{
      x:0,
      opacity:1
    }}
    transition={{
      duration:0.3
    }}
    exit={{
      y:'100vh',
    }}
     className='w-full h-screen relative' >
      <div className='absolute inset-0 w-full h-full bg-cover bg-no-repeat object-cover bg-opacity-50' style={{backgroundImage:`url(${img})`}}>
        <div className='absolute inset-0 bg-gray-800 bg-opacity-50'>
         <Header/>
         <div className='relative text-center text-blue-50 space-y-5 py-16'>
           <motion.h1
            initial={{
              opacity:0,
              y:-60
            }}
            whileInView={{
              opacity:1,
              y:0
            }}
            transition={{
              duration:1,
              delay:0.25
            }}
           className=' font-extrabold text-5xl '>Let's Explore the World</motion.h1>
           <motion.p
            initial={{
              opacity:0,
              y:-60
            }}
            whileInView={{
              opacity:1,
              y:0
            }}
            transition={{
              duration:1,
              delay:0.5
            }}
           className='text-lg'><p>"Uncover hidden gems and breathtaking landscapes on our Explore page."</p></motion.p>
         </div>
         <motion.div
         
         initial={{
          opacity:0,
          x:60
        }}
        whileInView={{
          opacity:1,
          x:0
        }}
        transition={{
          duration:1,
          delay:0.75
        }}
        className='flex items-center relative w-[80%] m-auto space-x-5'>
         <FaChevronLeft className='text-3xl text-gray-300 hover:scale-150 hover:duration-300 hover:text-gray-600' onClick={sliderLeft}/>
           <div id='slider' className='w-full h-full m-auto overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide space-x-8 px-8'>
             <motion.div
              whileHover={{scale:1.05}} transition={{duration:1}}
             className='inline-block p-3 relative shadow-lg shadow-gray-700'>
              <img src={fiji} alt='img' className=' w-60 h-[340px] object-cover rounded-xl' />
              <div>
                <p className='font-mine text-white opacity-70 text-6xl text-center absolute top-[40%] right-[40%]'>Fiji</p>
                <button className='text-gray-100 text-xl bg-slate-300 px-3 py-1 rounded-lg shadow-inner shadow-gray-700 bg-opacity-30 text-center absolute top-[70%] right-[33%]'>Discover</button>
              </div>
             </motion.div>
             <motion.div
              whileHover={{scale:1.05}} transition={{duration:1}}
             className='inline-block p-3 relative shadow-lg shadow-gray-700'>
              <img src={hawai} alt='img' className='w-60 h-[340px] object-cover rounded-xl' />
              <div>
                <p className='font-mine text-white opacity-70 text-6xl text-center absolute top-[40%] right-[20%]'>Hawai</p>
                <button className='text-gray-100 text-xl bg-slate-300 px-3 py-1 rounded-lg shadow-inner shadow-gray-700 bg-opacity-30 text-center absolute top-[70%] right-[33%]'>Discover</button>
              </div>
             </motion.div>
             <motion.div 
              whileHover={{scale:1.05}} transition={{duration:1}}
             className='inline-block p-3 relative shadow-lg shadow-gray-700'>
              <img src={maldives} alt='img' className='w-60 h-[340px] object-cover rounded-xl' />
              <div>
                <p className='font-mine text-white opacity-70 text-5xl text-center absolute top-[40%] right-[18%]'>Maldives</p>
                <button className='text-gray-100 text-xl bg-slate-300 px-3 py-1 rounded-lg shadow-inner shadow-gray-700 bg-opacity-30 text-center absolute top-[70%] right-[33%]'>Discover</button>
              </div>
             </motion.div>
             <motion.div
              whileHover={{scale:1.05}} transition={{duration:1}}
             className='inline-block p-3 relative shadow-lg shadow-gray-700'>
              <img src={philipine} alt='img' className='w-60 h-[340px] object-cover rounded-xl' />
              <div>
                <p className='font-mine text-white opacity-70 text-5xl text-center absolute top-[40%] right-[16%]'>Philipine</p>
                <button className='text-gray-100 text-xl bg-slate-300 px-3 py-1 rounded-lg shadow-inner shadow-gray-700 bg-opacity-30 text-center absolute top-[70%] right-[33%]'>Discover</button>
              </div>
             </motion.div>
             <motion.div
             whileHover={{scale:1.05}} transition={{duration:1}}
             className='inline-block p-3 relative shadow-lg shadow-gray-700'>
              <img src={tailand} alt='img' className='w-60 h-[340px] object-cover rounded-xl' />
              <div>
                <p className='font-mine text-white opacity-70 text-6xl text-center absolute top-[40%] right-[16%]'>Tailand</p>
                <button className='text-gray-100 text-xl bg-slate-300 px-3 py-1 rounded-lg shadow-inner shadow-gray-700 bg-opacity-30 text-center absolute top-[70%] right-[33%]'>Discover</button>
              </div>
             </motion.div>
             <motion.div
             whileHover={{scale:1.05}} transition={{duration:1}}
             className='inline-block p-3 relative shadow-lg shadow-gray-700'>
              <img src={bahmas} alt='img' className='w-60 h-[340px] object-cover rounded-xl' />
              <div>
                <p className=' font-mine text-white opacity-70 text-5xl text-center absolute top-[40%] right-[20%]'>Bahmas</p>
                <button className='text-gray-100 text-xl bg-slate-300 px-3 py-1 rounded-lg shadow-inner shadow-gray-700 bg-opacity-30 text-center absolute top-[70%] right-[33%]'>Discover</button>
              </div>
             </motion.div>
             <motion.div
             whileHover={{scale:1.05}} transition={{duration:1}}
             className='inline-block p-3 relative shadow-lg shadow-gray-700'>
              <img src={bali} alt='img' className='w-60 h-[340px] object-cover rounded-xl' />
              <div>
                <p className='font-mine text-white opacity-70 text-6xl text-center absolute top-[40%] right-[30%]'>Bali</p>
                <button className='text-gray-100 text-xl bg-slate-300 px-3 py-1 rounded-lg shadow-inner shadow-gray-700 bg-opacity-30 text-center absolute top-[70%] right-[33%]'>Discover</button>
              </div>
             </motion.div>
             <motion.div
             whileHover={{scale:1.05}} transition={{duration:1}}
             className='inline-block p-3 relative shadow-lg shadow-gray-700'>
              <img src={caribbean} alt='img' className='w-60 h-[340px] object-cover rounded-xl' />
              <div>
                <p className='font-mine text-white opacity-70 text-5xl text-center absolute top-[40%] right-[10%]'>Caribbean</p>
                <button className='text-gray-100 text-xl bg-slate-300 px-3 py-1 rounded-lg shadow-inner shadow-gray-700 bg-opacity-30 text-center absolute top-[70%] right-[33%]'>Discover</button>
              </div>
             </motion.div>
             <motion.div
             whileHover={{scale:1.05}} transition={{duration:1}}
             className='inline-block p-3 relative shadow-lg shadow-gray-700'>
              <img src={greece} alt='img' className='w-60 h-[340px] object-cover rounded-xl' />
              <div>
                <p className='font-mine text-white opacity-70 text-6xl text-center absolute top-[40%] right-[20%]'>Greece</p>
                <button className='text-gray-100 text-xl bg-slate-300 px-3 py-1 rounded-lg shadow-inner shadow-gray-700 bg-opacity-30 text-center absolute top-[70%] right-[33%]'>Discover</button>
              </div>
             </motion.div>
           </div>
           <FaChevronRight className='text-3xl text-gray-300 hover:scale-150 hover:duration-300 hover:text-gray-600' onClick={sliderRight}/>
         </motion.div>
         <div>
           <div className='opacity-90 flex justify-end items-center py-20 px-5 space-x-4'>
              <h1 className='text-3xl font-bold text-gray-200'>Explore more</h1>
              <motion.p
              whileHover={{scale:1.1}} transition={{duration:1}}
              className=' text-gray-200'><CiCircleChevRight className='text-4xl' /></motion.p>
              
           </div>
             
         </div>
        </div>
      </div>
      
    </motion.div>
    <div className='w-full h-fit bg-gradient-to-b from-gray-50 via-transparent to-white'>
      <div className='text-center pt-16 space-y-4'>
        <motion.h1
        initial={{
          opacity:0,
          x:60
        }}
        whileInView={{
          opacity:1,
          x:0
        }}
        transition={{
          duration:1,
          delay:0.75
        }}
         className='m-auto text-6xl font-extrabold h-full flex justify-center items-center space-x-7 text-clip bg-clip-text text-transparent bg-no-repeat bg-cover'style={{backgroundImage:`url(${img})`}}><p>Find Your Espace</p><HiTicket className='inline text-cyan-600'/></motion.h1>
        <motion.p
        initial={{
          opacity:0,
          x:-60
        }}
        whileInView={{
          opacity:1,
          x:0
        }}
        transition={{
          duration:1,
          delay:0.75
        }}
        className='text-lg m-auto text-gray-900 font-semibold bg-slate-100 flex justify-center items-center space-x-3'><p>"Where every journey begins with a dream and ends with a story"</p><GiCommercialAirplane className='text-xl'/></motion.p>
      </div>
      <div className='flex justify-between  items-center w-full h-[300px] ' >
          <motion.div
          initial={{
            opacity:0,
            scale:0.5
          }}
          whileInView={{
            opacity:1,
            scale:1
          }}
          transition={{
            duration:1,
            delay:0.25
          }}
          className='grid grid-cols-2 lg:grid-cols-5 gap-3 w-[90%] m-auto text-center shadow-xl rounded-3xl px-5 py-16  bg-blue-200 bg-no-repeat bg-cover object-cover' style={{backgroundImage:`url(${bg})`}}>
              <div className='space-y-2 border-r-4 border-opacity-10'>
                <h1 className='font-bold text-lg flex px-12 space-x-3 '><FaMapLocationDot className='text-cyan-600'/><p>Destination</p></h1>
                <motion.input
                whileHover={{scale:1.1}} transition={{duration:1}}
                type='text' placeholder='Choose you Destination ...' className='px-4 py-1 rounded-lg opacity-50'/>
              </div>
              <div className='space-y-2 border-r-4 border-opacity-10'>
                <h1 className='font-bold text-lg flex px-12 space-x-3'><BsFillCalendar2DateFill  className='text-cyan-600'/><p>Check-in</p></h1>
                <motion.input
                whileHover={{scale:1.1}} transition={{duration:1}}
                type='date' className='px-4 py-1 rounded-lg opacity-50'/>
              </div>
              <div className='space-y-2 border-r-4 border-opacity-10'>
                <h1 className='font-bold text-lg flex px-12 space-x-3'><BsFillCalendar2DateFill  className='text-cyan-600'/><p>Check-out</p></h1>
                <motion.input
                whileHover={{scale:1.1}} transition={{duration:1}}
                type='date' className='px-4 py-1 rounded-lg opacity-50'/>
              </div>
              <div className='space-y-2 border-r-4 border-opacity-10'>
                <h1 className='font-bold text-lg flex px-12 space-x-3'><IoPerson  className='text-cyan-600'/><p>Room & Guest</p></h1>
                <motion.input
                whileHover={{scale:1.1}} transition={{duration:1}}
                type='text' placeholder='Guest & room ...' className='px-4 py-1 rounded-lg opacity-50'/>
              </div>
              <motion.button
              whileHover={{scale:1.1}} transition={{duration:1}}
              className='text-lg font-bold bg-cyan-600 text-gray-200 rounded-xl w-36 h-12 m-auto'>Book a flight</motion.button>
          </motion.div>
      </div>
    </div>
    <div className='my-10 bg-gradient-to-t from-blue-50 via-transparent to-blue-50'>
     <div className='grid grid-cols-4 gap-6 w-[90%] h-[600px] m-auto py-16 '>
      <motion.div
      initial={{
        opacity:0,
        x:60
      }}
      whileInView={{
        opacity:1,
        x:0
      }}
      transition={{
        duration:1,
        delay:0.25
      }}>
        <img src={img1} alt='img' className='w-[350px] h-[400px] object-cover rounded-xl rounded-tr-[80px] rounded-bl-[80px] shadow-lg' />
      </motion.div>
      <div className='col-span-2 text-center space-y-4 m-auto'>
          <motion.h1
          initial={{
            opacity:0,
            y:-60
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          transition={{
            duration:1,
            delay:0.75
          }}
          className='text-4xl font-extrabold w-[80%] m-auto'>"Discover the world's wonders, one adventure at a time with us."</motion.h1>
          <motion.p
          initial={{
            opacity:0,
            y:-60
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          transition={{
            duration:1,
            delay:0.1
          }}>"Discover the world's wonders with us, one adventure at a time. From vibrant cityscapes to serene natural landscapes, 
            our curated destinations promise unforgettable experiences. Let us guide you on a journey filled with discovery and 
            cherished memories. Embrace the unknown and embark on a voyage of a lifetime with our travel community."</motion.p>
            <motion.button
            whileHover={{scale:1.1}} transition={{duration:1}}
            className='bg-cyan-600 px-5 py-1 text-lg font-semibold rounded-xl text-gray-100 shadow-xl'>Book Now</motion.button>
      </div>
      <motion.div
      initial={{
        opacity:0,
        x:60
      }}
      whileInView={{
        opacity:1,
        x:0
      }}
      transition={{
        duration:1,
        delay:0.5
      }}>
         <img src={img2} alt='img' className='w-[350px] h-[400px] object-cover rounded-xl rounded-tr-[80px] rounded-bl-[80px] shadow-lg' />
      </motion.div>
    </div>    
    </div>
 
    </>
  )
}
