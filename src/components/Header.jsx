import { Link } from 'react-router-dom'
import logo from './logo.jpg'

const Header = () => {
  return (
    <>
    <header>
        <div className=' container max-auto flex flex-row justify-between items-center h-36 ml-14 '>
          <div className=' w-28 ml-5 mt-5'><img src={logo} /></div>
          <div className='space-x-20 font-semibold text-xl text-slate-300 '>
            <Link to='/' className='hover:text-gray-400 focus:text-gray-900'>Home</Link>
            <Link to='/Ticket' className='hover:text-gray-400 focus:text-gray-900'>Ticket</Link>
            <Link to='/Explore' className='hover:text-gray-400 focus:text-gray-900' >Explore</Link>
            <Link to='/Activity' className='hover:text-gray-400 focus:text-gray-900'>Activity</Link>
          </div>
          <div className='space-x-12 font-semibold text-xl mr-16 '>
            <button className='text-gray-300 hover:text-gray-400 '>Sign in</button>
            <button className='bg-cyan-500 w-24 h-10 text-white rounded-lg'>Sign up</button>
          </div>
        </div>
    </header>
    
    </>
  )
}

export default Header