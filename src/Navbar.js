import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';


function Navbar() {



  return (
    <nav className='animate-border-spin dark:animate-border-spin-dark dark:hover:bg-slate-900 transition duration-300 font-bold text-xl hover:bg-blue-500 bg-blue-400 shadow-md sticky top-0 z-50 p-5 dark:bg-black dark:text-white border-b dark:border-b dark:border-red-500 border-white dark:hover:border-red-950 '>
        <div className=' mx-auto flex justify-between items-center animate-fadeInUp'>
          <NavLink to="/" className={({ isActive }) => 
          isActive ? 'text-white dark:text-red-500' : ""}>
            <a  className='dark:hover:text-gray-500 transition duration-300 ease-in-out hover:text-red-100 hover:scale-105'>Home</a>
          </NavLink>


          <NavLink className={({ isActive }) => 
          isActive ? 'text-white dark:text-red-500' : ""} to="/About">
            <a  className='dark:hover:text-gray-500 transition duration-300 ease-in-out hover:text-red-100 hover:scale-105'>About</a>
          </NavLink>

          <NavLink className={({ isActive }) => 
          isActive ? 'text-white dark:text-red-500' : ""} to='/Projects'>
            <a className='dark:hover:text-gray-500 transition duration-300 ease-in-out hover:text-red-100 hover:scale-105'>Projects</a>
          </NavLink>

          <NavLink className={({ isActive }) => 
          isActive ? 'text-white dark:text-red-500' : ""} to="/Contact">
            <a href="#contact" className='dark:hover:text-gray-500 transition duration-300 ease-in-out hover:text-red-100 hover:scale-105'>Contact</a>
          </NavLink>



        </div>
    </nav>
  )
}



export default Navbar;