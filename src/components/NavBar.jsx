{ /*import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import { logo } from "../assets/images";

const Navbar = ( { isActive }) => {

  const location = useLocation();


  return (
    <header className='header  flex items-center'>
      <NavLink to='/'  className='mr-auto'>
        <img src={logo} alt='logo' className=  " w-40 h-10 object-contain mx-10"/>
        {location.pathname !== '/' && (
        <span className=" text-blue-600">(Press to come back to homepage)</span>
      )}
      </NavLink>
  
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black hover:underline" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black hover:underline"}>
          Projects
        </NavLink>
        <NavLink to='/contact' className= {({ isActive }) => isActive ? "text-blue-600" : "text-black  hover:underline"}>
          Contact Me
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;


*/}




import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

import { logo } from "../assets/images";

const Navbar = () => {
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className='header flex justify-between items-center px-6 py-4 lg:px-12'>
      <NavLink to='/' className='flex items-center'>
        <img src={logo} alt='logo' className='w-40 h-10 object-contain' />
      </NavLink>
      
      <div className="block lg:hidden">
        <button onClick={toggleDrawer} className="text-gray-500 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      <nav className='hidden lg:flex text-lg gap-7 font-medium'>
        <NavLink to='/about' activeClassName='text-blue-600' className='text-black hover:text-blue-600 hover:underline'>
          About
        </NavLink>
        <NavLink to='/projects' activeClassName='text-blue-600' className='text-black hover:text-blue-600 hover:underline'>
          Projects
        </NavLink>
        <NavLink to='/contact' activeClassName='text-blue-600' className='text-black hover:text-blue-600 hover:underline'>
          Contact Me
        </NavLink>
      </nav>

      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-white shadow-lg">
          <nav className="flex flex-col text-lg gap-7 font-medium">
            <NavLink to='/about' activeClassName='text-blue-600' className='text-black hover:text-blue-600 hover:underline' onClick={toggleDrawer}>
              About
            </NavLink>
            <NavLink to='/projects' activeClassName='text-blue-600' className='text-black hover:text-blue-600 hover:underline' onClick={toggleDrawer}>
              Projects
            </NavLink>
            <NavLink to='/contact' activeClassName='text-blue-600' className='text-black hover:text-blue-600 hover:underline' onClick={toggleDrawer}>
              Contact Me
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
