import React from 'react'
import Navbar from './Navbar'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { FaDiscord } from "react-icons/fa";

function Contact() {

  const links = [
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon className='text-blue-600'/>,
      link: 'https://www.linkedin.com/in/mehdi-tsm-227ba0211/',
    },

    {
      name: 'GitHub',
      icon: <GitHubIcon />,
      link: 'https://github.com/MehdiTsM'
    },

    {
      name: 'Stack Overflow',
      icon: <img className='w-9 mx-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/2048px-Stack_Overflow_icon.svg.png" />,
      link: 'https://stackoverflow.com/users/14025969/mehdi-tsm'
    },

    {
      name: 'Gmail',
      icon: <EmailIcon />,
      link: 'mailto:your-mehdiadlen5@gmail.com'
    },

    {
      name: 'mehdi_tsm',
      icon: <FaDiscord className='mx-auto text-3xl text-blue-600'/>,
      
    },
  ];

  return (

    <div className='bg-gray-200 min-h-screen dark:bg-gradient-to-r from-gray-800 to-black'>
      <Navbar/>
      <div className='py-10 animate-fadeInUp'>
        <h1 className='text-4xl font-bold text-center mb-8 text-blue-500 dark:text-red-600 dark:text-shadow-neon-2 '>Contact me !</h1>
        {links.map((link, index) => (
          <div className='text-center py-5 animate-moveToCenter'>
            <a target="_blank"  href={link.link}> 
              <div className='border bg-white border-blue-400 animate-border-spin dark:animate-border-spin-dark dark:border-red-500 hover:scale-105 w-60 h-28 mx-auto grid items-center dark:dark:bg-black duration-300 dark:text-white dark:text-shadow-neon-1 rounded-lg shadow-2xl'>
                <h1>{link.icon}</h1> 
                <h1>{link.name}</h1>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contact