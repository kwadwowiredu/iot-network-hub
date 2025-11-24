import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faTimes, faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import Home from './pages/Home';
import About from './pages/About';
import OurWork from './pages/OurWork';
import Contact from './pages/Contact';
import logo from '/logo.png';

function App() {
  const location = useLocation(); // <-- Now works properly

  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-b border-gray-300/30 dark:border-gray-700/30 shadow-sm transition">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="IoT Network Hub" className="h-12 w-12 object-contain" />
            <div>
              <h1 className="text-xl font-bold text-yellow-500">IoT Network Hub (Kumasi)</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">Kumasi • Ghana</p>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`
                    relative font-medium transition 
                    ${isActive ? "text-yellow-500" : "text-gray-700 dark:text-gray-300 hover:text-yellow-500"}
                  `}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-yellow-500 rounded-full"></span>
                  )}
                </Link>
              );
            })}

            {/* DARK MODE BUTTON */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 transition"
            >
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-xl text-yellow-500" />
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-2xl text-gray-800 dark:text-gray-200"
          >
            <FontAwesomeIcon icon={mobileMenu ? faTimes : faBars} />
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700">

            {navItems.map(item => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenu(false)}
                  className={`
                    block px-6 py-3 text-lg transition 
                    ${isActive ? "text-yellow-500 font-semibold" : "text-gray-700 dark:text-gray-300"}
                  `}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Mobile Dark Mode Button */}
            <div className="p-4 flex justify-center">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-3 rounded-md bg-gray-200 dark:bg-gray-800"
              >
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-xl text-yellow-500" />
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white flex justify-around items-center p-6 space-y-6 md:space-y-0 md:space-x-12">
        {/* LEFT */}
        <div>
          <img src={logo} alt="Logo" className="h-[120px]" />
          <p className="text-lg font-bold text-primary">IoT Network Hub – Kumasi</p>
          <p className="text-gray-400 mt-2">
            Empowering 1 Billion Young Africans through emerging <br />
            & exponential technologies, innovation, and community building.
          </p>
        </div>

        {/* LINKS */}
        <div className="flex justify-between items-start px-20 py-10 rounded-lg space-x-20">
          <div>
            <div className="text-yellow-500 font-semibold mb-2">Quick Links</div>
            <ul>
              {navItems.map(item => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-primary transition">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <div className="text-yellow-500 font-semibold mb-2">Contact Info</div>
            <p><FontAwesomeIcon icon={faLocationDot} className="inline mr-2 text-yellow-500" /> ICT center, Sawaba, Kumasi</p>
            <p><FontAwesomeIcon icon={faEnvelope} className="inline mr-2 text-yellow-500" /> info@iotnetworkhub.org</p>
            <p><FontAwesomeIcon icon={faPhone} className="inline mr-2 text-yellow-500" /> +233 123 456 789</p>
          </div>

          <div className="flex flex-col items-center">
             <div className="text-yellow-500 font-semibold mb-2">Follow Us</div> 
             <div className="flex space-x-4 mt-2"> 
                <a href="#" className="hover:bg-gray-700 hover:rounded-full p-2 transform transition-all duration-300 hover:-translate-y-2">
                  <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" /></a> <a href="#" className="hover:bg-blue-500 hover:rounded-full p-2 transform transition-all duration-300 hover:-translate-y-2">
                  <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" /></a> <a href="#" className="hover:bg-red-500 hover:rounded-full p-2 transform transition-all duration-300 hover:-translate-y-2">
                  <FontAwesomeIcon icon={['fab', 'youtube']} size="lg" /></a> <a href="#" className="hover:bg-red-500 hover:rounded-full p-2 transform transition-all duration-300 hover:-translate-y-2">
                  <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" />
                </a>
              </div> 
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
