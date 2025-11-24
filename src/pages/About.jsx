import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEye,
  faBullseye,
  faHeart,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'

import joshuaImg from "../assets/joshuaImg.jpg"
import emmanuelImg from "../assets/emmanuelImg.jpg"

const items = [
  {
    title: "Human Capital",
    desc: "Training and upskilling young Africans in IoT, STEM, robotics, digital skills and emerging technologies."
  },
  {
    title: "Innovation",
    desc: "Building African-led solutions that solve real problems and spark the next wave of exponential growth."
  },
  {
    title: "Ecosystem",
    desc: "Connecting communities, innovators, and institutions across Africa through collaboration and technology."
  }
];

export default function About() {
  const slides = [
    "/src/assets/veep.jpg",
    "/src/assets/team_2.jpg",
    "/src/assets/kids_2.jpg",
    "/src/assets/events_1.jpg",
    "/src/assets/meetup_1.jpg"
  ]

  const [current, setCurrent] = useState(0);

  const nextItem = () => {
    setCurrent((prev) => (prev + 1) % items.length);
  };

  const prevItem = () => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  };

  const [index, setIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);


  return (
    <div className="pt-24 pb-16 font-poppins">

      {/* ========================= HERO SLIDESHOW ========================= */}
      <section className="relative h-[90vh] w-full overflow-hidden">

        {/* Slides */}
        {slides.map((img, i) => (
          <div
            key={i}
            className={`
              absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-[1500ms]
              ${i === index ? "opacity-100" : "opacity-0"}
            `}
            style={{
              backgroundImage: `url(${img})`,
              animation: i === index ? "zoomSlow 8s ease-in-out forwards" : "none",
            }}
          ></div>
        ))}

        {/* Dark Overlay WITHOUT blur */}
        <div className="absolute inset-0 bg-black/50"></div>
      
        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-2xl animate-fadeInUp">
            We are IoTHubers
          </h1>
      
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mt-4 animate-fadeInUp delay-200">
            We are the community of the future
          </p>
        </div>
      </section>


      {/* ======================= LEADERSHIP TEAM ======================= */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 text-yellow-600">Leadership</h2>

          <div className="grid md:grid-cols-2 gap-12">

            {/* Joshua */}
            <div className="bg-gray-100 dark:bg-gray-800 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition relative">
              <img
                src={joshuaImg}
                alt="Joshua"
                className="w-40 h-40 object-cover rounded-full mx-auto shadow-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-yellow-600">Joshua</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Global Head - IoT Network Hub Africa</p>
              <p className="max-w-md mx-auto text-gray-700 dark:text-gray-300">
                Leading strategic direction, innovation, and continental expansion of IoT Network Hub across Africa.
                Joshua drives the mission of empowering 1 billion Africans through exponential technologies.
              </p>
            </div>

            {/* Emmanuel */}
            <div className="bg-gray-100 dark:bg-gray-800 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition relative">
              <img
                src={emmanuelImg}
                alt="Emmanuel"
                className="w-40 h-40 object-cover rounded-full mx-auto shadow-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-yellow-600">Emmanuel</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Area Lead - IoT Network Hub (Kumasi)</p>
              <p className="max-w-md mx-auto text-gray-700 dark:text-gray-300">
                Emmanuel spearheads the Kumasi chapter, driving community growth, hands-on training, school outreach,
                and innovation programs shaping young African tech leaders.
              </p>
            </div>

          </div>
        </div>
      </section>

{/* ======================= MISSION • VISION • VALUES ======================= */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">

          {/* Mission */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition">
            <div className="w-20 h-20 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <FontAwesomeIcon icon={faBullseye} size="2x" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-4 text-yellow-600">Our Mission</h3>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              To empower 1 billion young Africans by 2050 through community, education, innovation, and skills in
              exponential technologies.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition">
            <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <FontAwesomeIcon icon={faEye} size="2x" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-4 text-blue-600">Our Vision</h3>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              An Africa where every young person becomes a creator, innovator & global leader in the Fourth Industrial Revolution.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition">
            <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <FontAwesomeIcon icon={faHeart} size="2x" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-4 text-red-600">Our Values</h3>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              Innovation • Excellence • Collaboration • Inclusivity • Boldness
            </p>
          </div>

        </div>
      </section>

      {/* ================== 2050 GOAL – LIGHT MODE + TEXT SLIDER ================== */}
    <section className="py-24 bg-white dark:bg-gray-100 transition">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Section Title */}
        <h2 className="text-4xl md:text-4xl font-extrabold text-primary mb-12">
          Empowering 1 Billion Africans by 2050
        </h2>

        {/* Text Slider */}
        <div className="relative flex items-center justify-center w-full max-w-3xl mx-auto">

          {/* LEFT ARROW */}
          <button
            onClick={prevItem}
            className="absolute left-0 p-4 text-gray-700 hover:text-primary transition"
          >
            <FontAwesomeIcon icon={faChevronLeft} size="2x" />
          </button>

          {/* MAIN TEXT */}
          <div className="px-14">
            <h3
              key={items[current].title}
              className="text-3xl md:text-3xl font-bold text-gray-900 transition-opacity duration-500"
            >
              {items[current].title}
            </h3>

            <p className="mt-4 text-lg text-gray-600">
              {items[current].desc}
            </p>
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={nextItem}
            className="absolute right-0 p-4 text-gray-700 hover:text-primary transition"
          >
            <FontAwesomeIcon icon={faChevronRight} size="2x" />
          </button>
        </div>
      </div>
    </section>
    </div>
  )
}
