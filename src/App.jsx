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
      <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-gray-900/70 border-b border-gray-300/20 dark:border-gray-700/20 backdrop-blur-xl shadow-sm">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="IoT Network Hub"
              className="h-10 w-10 object-contain sm:h-12 sm:w-12"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-bold text-yellow-500">
                IoT Network Hub (Kumasi)
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">Kumasi • Ghana</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative font-medium transition ${
                    isActive
                      ? "text-yellow-500"
                      : "text-gray-700 dark:text-gray-300 hover:text-yellow-500"
                  }`}
                >
                  {item.name}

                  {isActive && (
                    <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-yellow-500 rounded-full"></span>
                  )}
                </Link>
              );
            })}

            {/* Dark Mode Switch */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 bg-gray-200 dark:bg-gray-800 rounded-md"
            >
              <FontAwesomeIcon
                icon={darkMode ? faSun : faMoon}
                className="text-xl text-yellow-500"
              />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-2xl text-gray-900 dark:text-gray-300"
          >
            <FontAwesomeIcon icon={mobileMenu ? faTimes : faBars} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-t border-gray-300 dark:border-gray-700 p-4">

            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenu(false)}
                  className={`block py-3 text-lg ${
                    isActive
                      ? "text-yellow-500 font-semibold"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Mobile Dark Mode Toggle */}
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-md"
              >
                <FontAwesomeIcon
                  icon={darkMode ? faSun : faMoon}
                  className="text-xl text-yellow-500"
                />
              </button>
            </div>
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
