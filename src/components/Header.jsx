import { useState } from "react";
import { FaList } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [mode, setMode] = useState('light_mode');

  const toggleMode = (newMode) => {
    setMode(newMode);
    document.body.classList = newMode;
  };

  return (
    <>
      <header className="w-full z-[999999999]">
        <div className="   flex justify-between items-center py-3 lg:py-5 px-10 lg:px-24   ">
          <div className="  w-2/12  text-2xl font-bold  text-cyan-500  ">
            TRAVEL
          </div>

          <div className="w-7/12 hidden lg:flex items-center justify-center space-x-16 font-semibold  text-slate-300 ">
            <Link
              to="/"
              className={`${
                location.pathname == "/"
                  ? "text-gray-900"
                  : "hover:text-gray-400 focus:text-gray-900"
              }`}
            >
              Home
            </Link>
            <Link
              to="/About"
              className={`${
                location.pathname == "/About"
                  ? "text-gray-900"
                  : "hover:text-gray-400 focus:text-gray-900"
              }`}
            >
              About Us
            </Link>
            <Link
              to="/Ticket"
              className={`${
                location.pathname == "/Ticket"
                  ? "text-gray-900"
                  : "hover:text-gray-400 focus:text-gray-900"
              }`}
            >
              Contact
            </Link>
            <Link
              to="/Explore"
              className={`${
                location.pathname == "/Explore"
                  ? "text-gray-900"
                  : "hover:text-gray-400 focus:text-gray-900"
              }`}
            >
              Explore
            </Link>
            
          </div>
          <div className="w-3/12   font-semibold hidden lg:flex space-x-1 items-center justify-center gap-1 ">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" />

              {/* sun icon */}
              <svg
                onClick={() => toggleMode('dark_mode')}
                className="swap-on fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                onClick={() => toggleMode('light_mode')}
                className="swap-off fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
            {/* <Link className="text-black ">Sign in</Link> */}
            <Link className="bg-cyan-500 px-10 py-2 text-white rounded-lg">
              Get Started
            </Link>
          </div>
          <main className="drawer flex lg:hidden w-1/12 z-50">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="btn bg-cyan-600 hover:bg-cyan-600 text-white  drawer-button"
              >
                <FaList />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-lg flex flex-col items-center pt-10  gap-4 ">
                <div className="  w-full flex items-center justify-center pb-5  text-2xl font-bold  text-cyan-500  ">
                  TRAVEL
                </div>
                {/* Sidebar content here */}
                <Link
                  to="/"
                  className={` flex items-center justify-center py-3 rounded-md ${
                    location.pathname == "/"
                      ? "bg-gray-900 text-white w-full  "
                      : "hover:text-gray-400 focus:text-gray-900"
                  }`}
                >
                  Home
                </Link>
                <Link 
                  to="/Ticket"
                  className={`flex items-center justify-center py-3 rounded-md  ${
                    location.pathname == "/Ticket"
                      ? "bg-gray-900 text-white w-full "
                      : "hover:text-gray-400 focus:text-gray-900"
                  }`}
                >
                  Ticket
                </Link>
                <Link
                  to="/Explore"
                  className={`flex items-center justify-center py-3 rounded-md  ${
                    location.pathname == "/Explore"
                      ? "bg-gray-900 text-white w-full "
                      : "hover:text-gray-400 focus:text-gray-900"
                  }`}
                >
                  Explore
                </Link>
                <Link
                  to="/About"
                  className={`flex items-center justify-center py-3 rounded-md  ${
                    location.pathname == "/About"
                      ? "bg-gray-900 text-white w-full "
                      : "hover:text-gray-400 focus:text-gray-900"
                  }`}
                >
                  About Us
                </Link>
              </ul>
            </div>
          </main>
        </div>
      </header>
    </>
  );
};

export default Header;
