import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faBars,
  faTimes,
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import Home from "./pages/Home";
import About from "./pages/About";
import OurWork from "./pages/OurWork";
import Contact from "./pages/Contact";
import logo from "/logo.png";

function App() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Enable/disable dark mode
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Work", path: "/our-work" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="font-sans min-h-screen">

      {/* ===================== NAVBAR ===================== */}
      {/* NAVBAR */}
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-b border-gray-300/30 dark:border-gray-700/30 shadow-sm transition">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      
        {/* LOGO */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="IoT Network Hub" className="h-12 w-12 object-contain" />
          <div>
            <h1 className="text-sm font-bold text-yellow-500">IoT Network Hub (Kumasi)</h1>
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
    
          {/* DARK MODE TOGGLER (DESKTOP) */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 transition"
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-xl text-yellow-500" />
          </button>
        </div>
        
        {/* MOBILE RIGHT SIDE (TOGGLER + MENU BUTTON) */}
        <div className="flex items-center space-x-4 md:hidden">
        
          {/* DARK MODE TOGGLER — ALWAYS VISIBLE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 transition"
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-md text-yellow-500" />
          </button>
        
          {/* MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="text-2xl text-gray-800 dark:text-gray-200"
          >
            <FontAwesomeIcon icon={mobileMenu ? faTimes : faBars} />
          </button>
        </div>
        
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
    
        </div>
      )}
    </nav>

      {/* ===================== ROUTES ===================== */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* ===================== FOOTER ===================== */}
      <footer className="bg-gray-900 text-white py-12 px-6">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Left - Logo + About */}
          <div className="text-center md:text-left">
            <img src={logo} alt="Logo" className="h-20 mx-auto md:mx-0" />
            <p className="text-lg font-semibold">IoT Network Hub - Kumasi</p>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              Empowering 1 Billion Young Africans through emerging & exponential
              technologies, innovation, and community building.
            </p>
          </div>

          {/* Middle - Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-yellow-500 font-semibold mb-1">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link className="hover:text-yellow-400 transition" to={item.path}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-yellow-500 font-semibold mb-1">Contact Info</h3>

            <p className="flex justify-center md:justify-start items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} className="text-yellow-500" />
              ICT Center, Sawaba, Kumasi
            </p>

            <p className="flex justify-center md:justify-start items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-yellow-500" />
              info@iotnetworkhub.org
            </p>

            <p className="flex justify-center md:justify-start items-center gap-2">
              <FontAwesomeIcon icon={faPhone} className="text-yellow-500" />
              +233 123 456 789
            </p>

            <div className="flex justify-center md:justify-start gap-4 mt-4 text-xl">
              <a className="hover:text-yellow-400 transition" href="#">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </a>
              <a className="hover:text-yellow-400 transition" href="#">
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </a>
              <a className="hover:text-yellow-400 transition" href="#">
                <FontAwesomeIcon icon={['fab', 'youtube']} />
              </a>
              <a className="hover:text-yellow-400 transition" href="#">
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-12">
          © {new Date().getFullYear()} IoT Network Hub — All Rights Reserved.
        </p>

      </footer>
    </div>
  );
}

export default App;
