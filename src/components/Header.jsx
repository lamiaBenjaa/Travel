import { FaList, FaRegMinusSquare } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <>
      <header className="w-full z-[999999999]">
        <div className="   flex justify-between items-center py-8 px-10 lg:px-24   ">
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
              to="/Ticket"
              className={`${
                location.pathname == "/Ticket"
                  ? "text-gray-900"
                  : "hover:text-gray-400 focus:text-gray-900"
              }`}
            >
              Ticket
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
            <Link
              to="/Activity"
              className={`${
                location.pathname == "/Activity"
                  ? "text-gray-900"
                  : "hover:text-gray-400 focus:text-gray-900"
              }`}
            >
              Activity
            </Link>
          </div>
          <div className="w-3/12   font-semibold hidden lg:flex space-x-1 items-center justify-center gap-1 ">
            <Link className="text-black ">Sign in</Link>
            <Link className="bg-cyan-500 px-10 py-2 text-white rounded-lg">
              Sign up
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
              to="/Activity"
              className={`flex items-center justify-center py-3 rounded-md  ${
                location.pathname == "/Activity"
                  ? "bg-gray-900 text-white w-full "
                  : "hover:text-gray-400 focus:text-gray-900"
              }`}
            >
              Activity
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
