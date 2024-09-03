import React from 'react';
import Navbar from './Navbar';
import projectOneImage from './images/AMAN.jpg'; // Adjust the path according to your project structure
import ScrollIndicator from './ScrollIndicator';
import ProjectTwoImage from './images/SKY.png';


function Projects() {
        const projects = [
        {
            title: 'Aman',
            description: 'A dynamic e-commerce website designed to provide a seamless shopping experience with intuitive navigation and secure transactions.',
            image: projectOneImage,
            link: '#'
        },
        {
            title: 'SkyTracker',
            description: 'A real-time weather app that provides detailed forecasts and conditions for any location.',
            image: ProjectTwoImage,
            link: '#'
        },
        ];

        
  return (
    <div className='bg-gray-200 dark:bg-gradient-to-r from-gray-800 to-black duration-300 ease-in-out'>
      <Navbar />
      <section id="projects" className='py-24 bg-gray-200 dark:bg-gradient-to-r from-gray-800 to-black duration-300 ease-in-out animate-fadeInUp'>
        <div className='container mx-auto px-4'>
          <h2 className='text-blue-500 dark:text-red-600 text-4xl font-bold text-center mb-8 dark:text-shadow-neon-2 pb-2'>Projects</h2>
          <p className="dark:text-shadow-neon-2 dark:text-gray-100 text-2xl text-center">
            My portfolio reflects a blend of creative design and practical functionality. Each project highlights my dedication to delivering excellence and solving complex problems through innovative solutions. From intuitive user interfaces to robust backend systems, I focus on crafting seamless experiences that cater to both user needs and business objectives. Explore the projects below to see how I transform ideas into impactful digital solutions.
          </p>
          <div className='relative mt-8'>
            <div className="animate-moveToCenter">
              <hr className="transition-all duration-500 ease-in-out border-blue-500 dark:border-red-600 animate-border-spin dark:animate-border-spin-dark" />
            </div>    
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-bounceIn mt-24'>
            {projects.map((project, index) => (
              <div
                key={index}
                className='flex flex-col justify-between border border-blue-400 hover:scale-105 bg-white p-6 rounded-lg animate-border-spin dark:animate-border-spin-dark dark:border-red-500 dark:bg-black duration-300 shadow-2xl'
              >
                <div>
                  <div className='relative w-full h-48 rounded-lg overflow-hidden mb-4'>
                    {/* Image with gradient overlay */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className='w-full h-full object-cover'
                    />
                    {/* Gradient with stronger white at the bottom */}
                    <div className='absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent dark:from-black/100 dark:via-black/20 dark:to-transparent'></div>
                    {/* Project title overlayed on the image */}
                    <h3 className='absolute bottom-0 left-0 w-full text-xl font-bold text-left text-black dark:text-white p-2'>
                      {project.title}
                    </h3>
                  </div>
                  {/* Project description */}
                  <p className='text-gray-700 mb-4 dark:text-gray-200'>{project.description}</p>
                </div>
                {/* Project link always at the bottom */}
                <a href={project.link} className='text-blue-500 hover:underline dark:text-red-500 self-start'>
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
        <h1 className='dark:text-shadow-neon-2 dark:text-gray-100 text-2xl text-center p-10'>Dropping more projects soon ...</h1>
      </section>
      <ScrollIndicator />
      <br />
    </div>
  );
}

export default Projects;
