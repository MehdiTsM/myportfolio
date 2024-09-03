import About from './About';
import Home from './Home';
import './App.css';
import { useEffect, useState } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import BedtimeOffIcon from '@mui/icons-material/BedtimeOff';
// Use HashRouter instead of BrowserRouter
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './Contact';
import Projects from './Projects';

function App() {
  const [theme, setTheme] = useState(() => {
    // Retrieve the theme from localStorage or default to light
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <button
          onClick={handleThemeSwitch}
          className="bg-red-700 dark:bg-blue-600 fixed w-16 h-16 bottom-16 left-16 focus:outline-none focus:ring-2 focus:ring-black-900 focus:ring-opacity-50 text-gray-900 dark:text-white font-light py-2 px-4 rounded-3xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 opacity-80 hover:opacity-100"
        >
          {theme === 'dark' ? <BedtimeOffIcon /> : <DarkModeIcon />}
        </button>
      </div>
    </Router>
  );
}

export default App;
