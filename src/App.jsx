import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faBars, faTimes, faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import Home from './pages/Home'
import About from './pages/About'
import WhatWeDo from './pages/WhatWeDo'
import Contact from './pages/Contact'
import logo from './assets/logo.png'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'What We Do', path: '/what-we-do' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <Router>
      <div className="min-h-screen font-sans">
        {/* Navbar */}
        <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-lg z-50 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="IoT Network Hub" className="h-12 w-12 object-contain" />
              <div>
                <h1 className="text-2xl font-bold text-primary">IoT Network Hub (Kumasi)</h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">Kumasi • Ghana</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(item => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary transition font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800"
              >
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-xl text-yellow-500" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden"
            >
              <FontAwesomeIcon icon={mobileMenu ? faTimes : faBars} className="text-2xl" />
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenu && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
              {navItems.map(item => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenu(false)}
                  className="block py-3 px-6 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition"
                >
                  {item.name}
                </Link>
              ))}
              <div className="p-4 flex justify-center">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-3 rounded-lg bg-gray-200 dark:bg-gray-800"
                >
                  <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-2xl text-yellow-500" />
                </button>
              </div>
            </div>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-900 text-white flex justify-around items-center p-6 space-y-6 md:space-y-0 md:space-x-12">
          <div>
            <img src={logo} alt="Logo" className="h-[120px]" />
            <p className="text-lg font-bold text-primary">IoT Network Hub – Kumasi</p>
            <p className="text-gray-400 mt-2">Empowering 1 Billion Young Africans through emerging<br/>& exponential technologies, innovation, and community<br/> building.</p>
          </div>

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

            <div>
              <div className="text-yellow-500 font-semibold mb-2">Contact Info</div>
              <p><FontAwesomeIcon icon={faLocationDot} className="inline mr-2 text-yellow-500"/>ICT center, Sawaba, Kumasi</p>
              <p><FontAwesomeIcon icon={faEnvelope} className="inline mr-2 text-yellow-500"/>info@iotnetworkhub.org</p>
              <p><FontAwesomeIcon icon={faPhone} className="inline mr-2 text-yellow-500"/>+233 123 456 789</p>
            </div>

            <div className="flex flex-col items-center">
                <div className="text-yellow-500 font-semibold mb-2">Follow Us</div>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="hover:bg-gray-700 hover:rounded-full p-2 transform transition-all duration-300 hover:-translate-y-2"><FontAwesomeIcon icon={['fab', 'twitter']} size="lg" /></a>
                  <a href="#" className="hover:bg-blue-500 hover:rounded-full p-2 transform transition-all duration-300 hover:-translate-y-2"><FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" /></a>
                  <a href="#" className="hover:bg-red-500 hover:rounded-full p-2 transform transition-all duration-300 hover:-translate-y-2"><FontAwesomeIcon icon={['fab', 'youtube']} size="lg" /></a>
                  <a href="#" className="hover:bg-red-500 hover:rounded-full p-2 transform transition-all duration-300 hover:-translate-y-2"><FontAwesomeIcon icon={['fab', 'instagram']} size="lg" /></a>
                </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App