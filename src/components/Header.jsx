import { Link, useLocation } from 'react-router-dom'
import logo from './logo.jpg'
import { useEffect } from 'react'

const Header = () => {

  const location = useLocation()

  return (
    <>
    <header>
        <div className=' container   flex justify-between items-center py-7 px-24   w-full'>
          <div className=' w-2/12  text-2xl font-bold  text-cyan-500  '>TRAVEL</div>
          <div className='w-5/12 flex items-center justify-center  space-x-20 font-semibold  text-slate-300 '>
            <Link to='/' className={`${location.pathname == '/' ? 'text-gray-900' :'hover:text-gray-400 focus:text-gray-900'}`}>Home</Link>
            <Link to='/Ticket' className={`${location.pathname == '/Ticket' ? 'text-gray-900' :'hover:text-gray-400 focus:text-gray-900'}`}>Ticket</Link>
            <Link to='/Explore'  className={`${location.pathname == '/Explore' ? 'text-gray-900' :'hover:text-gray-400 focus:text-gray-900'}`}>Explore</Link>
            <Link to='/Activity' className={`${location.pathname == '/Activity' ? 'text-gray-900' :'hover:text-gray-400 focus:text-gray-900'}`}>Activity</Link>
          </div>
          <div className='w-3/12 space-x-8 font-semibold flex items-center justify-center gap-1 '>
            <Link className='text-black '>Sign in</Link>
            <Link className='bg-cyan-500 px-10 py-2 text-white rounded-lg'>Sign up</Link>
          </div>
        </div>
    </header>
    
    </>
  )
}

export default Header