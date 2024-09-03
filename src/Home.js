import React from 'react'
import './index.css';
import Navbar from './Navbar';

function Home() {
  return (
<div className='bg-gray-200'>
    <Navbar />

    <div id="home" className='dark:bg-gradient-to-r from-gray-800 to-black duration-300 ease-in-out flex items-center justify-center min-h-screen dark:text-red-50 bg-gray-200  animate-bounceIn p-8'>
      <div className='text-center'>
        <h1 className='dark:text-shadow-neon-1 text-blue-500 dark:text-red-600 text-5xl font-bold mb-4 duration-300 ease-in-out'>Hello, I'm Mehdi</h1>
        <p className='dark:text-shadow-neon-2 dark:text-gray-100 text-2xl'>I'm a Front-end Developer specializing in React.js</p>
        <br/>
        <div className='animate-moveToCenter'>
          <hr className='animate-border-spin dark:animate-border-spin-dark transition-all duration-500 ease-in-out  border-blue-500 dark:border-red-600'/>
        </div>
        
    


      </div>

    </div>
</div>
  )
}

export default Home