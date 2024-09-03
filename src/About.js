import React from "react";
import "./index.css";
import Navbar from "./Navbar";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import ScrollIndicator from "./ScrollIndicator";

function About() {
  // Create refs and inView states for each container
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);
  const ref4 = React.useRef(null);
  const ref5 = React.useRef(null);
  const ref6 = React.useRef(null);
  const ref7 = React.useRef(null);

  const inView1 = useInView(ref1, { triggerOnce: true, threshold: 0.1 });
  const inView2 = useInView(ref2, { triggerOnce: true, threshold: 0.1 });
  const inView3 = useInView(ref3, { triggerOnce: true, threshold: 0.1 });
  const inView4 = useInView(ref4, { triggerOnce: true, threshold: 0.1 });
  const inView5 = useInView(ref5, { triggerOnce: true, threshold: 0.1 });
  const inView6 = useInView(ref6, { triggerOnce: true, threshold: 0.1 });
  const inView7 = useInView(ref7, { triggerOnce: true, threshold: 0.1 });

  // Framer Motion animation variants
  const animationVariants = {
    hidden: { opacity: 0, x: 100 }, // Start from right (100px offset)
    visible: { opacity: 1, x: 0 }, // Move to center (0px offset)
  };

  return (
    <>
      <div className="scroll-smooth min-h-screen dark:bg-gradient-to-r from-gray-800 to-black bg-gray-200">
        <Navbar />

        <div className="">
          <section
            id="about"
            className="animate-fadeInUp duration-300 rounded-lg m-4 pt-14"
          >
            <div className="container mx-auto px-4">
              <h1 className="text-blue-500 dark:text-red-600 text-5xl font-bold text-center mb-8 dark:text-shadow-neon-1">
                About me
              </h1>
              <p className="dark:text-shadow-neon-2 dark:text-gray-100 text-2xl text-center">
                I am a front-end developer with a passion for creating beautiful and
                functional web applications.
              </p>
              <br />
              <div className="animate-moveToCenter">
                <hr className="transition-all duration-500 ease-in-out border-blue-500 dark:border-red-600 animate-border-spin dark:animate-border-spin-dark" />
              </div>
            </div>
          </section>

          <div className="flex flex-col mx-4 ">
          <motion.div
              ref={ref1}
              className="
                bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto my-12 
                min-h-[200px] w-full border-2 border-solid animate-border-spin 
                dark:bg-black dark:border-solid dark:border-2 dark:animate-border-spin-dark 
                bg-clip-border
              "               initial="hidden"
              animate={inView1 ? "visible" : "hidden"}
              variants={animationVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Core JavaScript Skills</h2>
              <p className="text-gray-600 dark:text-gray-200">
              Arrow functions, destructuring, spread/rest operators, classes, async/await, etc...   
              </p>
            </motion.div>

            <motion.div
              ref={ref2}
              className="
                bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto my-12 
                min-h-[200px] w-full border-2 border-solid animate-border-spin 
                dark:bg-black dark:border-solid dark:border-2 dark:animate-border-spin-dark 
                bg-clip-border
              "            initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={animationVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-bold mb-4 dark:text-white">React.JS Fundamentals and Concepts</h2>
              <p className="text-gray-600 dark:text-gray-200">
                Components, State Management, Props, Event Handling, Hooks, React Router.
              </p>
            </motion.div>

            <motion.div
              ref={ref3}
              className="
                bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto my-12 
                min-h-[200px] w-full border-2 border-solid animate-border-spin 
                dark:bg-black dark:border-solid dark:border-2 dark:animate-border-spin-dark 
                bg-clip-border
              "               initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
              variants={animationVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-bold mb-4 dark:text-white">State Management Libraries</h2>
              <p className="text-gray-600 dark:text-gray-200">
                Redux, Context API.
              </p>
            </motion.div>

            <motion.div
              ref={ref4}
              className="
                bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto my-12 
                min-h-[200px] w-full border-2 border-solid animate-border-spin 
                dark:bg-black dark:border-solid dark:border-2 dark:animate-border-spin-dark 
                bg-clip-border
              "               initial="hidden"
              animate={inView4 ? "visible" : "hidden"}
              variants={animationVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Styling</h2>
              <p className="text-gray-600 dark:text-gray-200">
                Knowledge of CSS frameworks like Tailwind CSS, Bootstrap, Material-UI, and more.
              </p>
            </motion.div>

            <motion.div
              ref={ref5}
              className="
                bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto my-12 
                min-h-[200px] w-full border-2 border-solid animate-border-spin 
                dark:bg-black dark:border-solid dark:border-2 dark:animate-border-spin-dark 
                bg-clip-border
              "               initial="hidden"
              animate={inView5 ? "visible" : "hidden"}
              variants={animationVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Back-End Technologies</h2>
              <p className="text-gray-600 dark:text-gray-200">
              As a front-end developer with a comprehensive skill set, I am proficient in integrating and managing back-end technologies, ensuring seamless full-stack development. </p>
              <br />
              <p className="text-gray-600 dark:text-gray-200">Node.JS, Firebase, MySQL, Express.JS ... etc</p>
            </motion.div>

            <motion.div
              ref={ref6}
              className="
                bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto my-12 
                min-h-[200px] w-full border-2 border-solid animate-border-spin 
                dark:bg-black dark:border-solid dark:border-2 dark:animate-border-spin-dark 
                bg-clip-border
              "               initial="hidden"
              animate={inView6 ? "visible" : "hidden"}
              variants={animationVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Communication and Collaboration</h2>
              <p className="text-gray-600 dark:text-gray-200">
                I have the ability to articulate complex technical concepts in a way that non-technical stakeholders can understand, write clear code and processes to aid collaboration and future maintenance.
              </p>
              <br />
              <p className="text-gray-600 dark:text-gray-200">
                I can work effectively with designers, back-end developers, and other team members.
              </p>
            </motion.div>

            <motion.div
              ref={ref7}
              className="
                bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto my-12 
                min-h-[200px] w-full border-2 border-solid animate-border-spin 
                dark:bg-black dark:border-solid dark:border-2 dark:animate-border-spin-dark 
                bg-clip-border
              "               initial="hidden"
              animate={inView7 ? "visible" : "hidden"}
              variants={animationVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Problem-Solving</h2>
              <p className="text-gray-600 dark:text-gray-200">
                I can approach problems methodically and logically, Break down complex issues and develop solutions collaboratively.
              </p>
            </motion.div>
          </div>
          <br />
        </div>
      </div>
        <ScrollIndicator/>
    </>
  );
}

export default About;


