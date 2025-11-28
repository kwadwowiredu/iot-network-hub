import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faBullseye,
  faHeart,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const joshuaImg = "/joshuaImg.jpg";
const emmanuelImg = "/emmanuelImg.jpg";

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
    "/veep.jpg",
    "/team_2.jpg",
    "/kids_2.jpg",
    "/events_1.jpg",
    "/meetup_1.jpg"
  ];

  const [current, setCurrent] = useState(0);

  // ARROW FUNCTIONS FOR 2050 SLIDER
  const nextItem = () => setCurrent((prev) => (prev + 1) % items.length);
  const prevItem = () => setCurrent((prev) => (prev - 1 + items.length) % items.length);

  // HERO SLIDESHOW AUTO-SLIDE
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-20 font-poppins">

      {/* ========================= HERO SLIDESHOW ========================= */}
      <section className="relative h-[40vh] sm:h-[65vh] md:h-[75vh] xl:h-[80vh] w-full overflow-hidden">

        {/* Slides */}
        {slides.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-[1500ms]
              ${i === index ? "opacity-100" : "opacity-0"}`}
            style={{
              backgroundImage: `url(${img})`,
              animation: i === index ? "zoomSlow 7s ease-in-out forwards" : "none",
            }}
          ></div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl animate-fadeInUp">
            We are IoTHubers
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mt-3 animate-fadeInUp delay-200">
            We are the community of the future
          </p>
        </div>
      </section>


      {/* ======================= LEADERSHIP ======================= */}
      <section className="py-10 md:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-yellow-600">
            Leadership
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Joshua */}
            <div className="bg-gray-100 dark:bg-gray-800 p-6 md:p-10 rounded-xl shadow-xl hover:shadow-2xl transition">
              <img
                src={joshuaImg}
                alt="Joshua"
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mx-auto shadow-lg mb-4 md:mb-6"
              />
              <h3 className="text-xl md:text-2xl font-bold text-yellow-600">Joshua</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">Global Head - IoT Network Hub Africa</p>
              <p className="max-w-md mx-auto text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                Leading strategic direction, innovation and expansion of IoT Network Hub across Africa.
              </p>
            </div>

            {/* Emmanuel */}
            <div className="bg-gray-100 dark:bg-gray-800 p-6 md:p-10 rounded-xl shadow-xl hover:shadow-2xl transition">
              <img
                src={emmanuelImg}
                alt="Emmanuel"
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mx-auto shadow-lg mb-4 md:mb-6"
              />
              <h3 className="text-xl md:text-2xl font-bold text-yellow-600">Emmanuel</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">Area Lead - IoT Network Hub (Kumasi)</p>
              <p className="max-w-md mx-auto text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                Emmanuel drives the Kumasi chapter, leading community growth, school outreach and innovation programs.
              </p>
            </div>

          </div>
        </div>
      </section>



      {/* ======================= MISSION / VISION / VALUES ======================= */}
      <section className="py-10 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 grid gap-10 sm:gap-12 md:grid-cols-3">

          {/* Mission */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 md:p-10 shadow-xl hover:shadow-2xl">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6 shadow-lg">
              <FontAwesomeIcon icon={faBullseye} size="lg" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-center mb-3 text-yellow-600">Our Mission</h3>
            <p className="text-gray-700 dark:text-gray-300 text-center text-sm md:text-base">
              Empowering 1 billion young Africans through innovation and technology education.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 md:p-10 shadow-xl hover:shadow-2xl">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6 shadow-lg">
              <FontAwesomeIcon icon={faEye} size="lg" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-center mb-3 text-blue-600">Our Vision</h3>
            <p className="text-gray-700 dark:text-gray-300 text-center text-sm md:text-base">
              An Africa where every young person becomes a global innovator & tech leader.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 md:p-10 shadow-xl hover:shadow-2xl">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6 shadow-lg">
              <FontAwesomeIcon icon={faHeart} size="lg" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-center mb-3 text-red-600">Our Values</h3>
            <p className="text-gray-700 dark:text-gray-300 text-center text-sm md:text-base">
              Innovation • Collaboration • Excellence • Ubuntu • Inclusivity
            </p>
          </div>

        </div>
      </section>



      {/* ======================= 2050 TEXT SLIDER ======================= */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">

          <h2 className="text-xl md:text-4xl font-extrabold text-primary mb-10 md:mb-12">
            Empowering 1 Billion Africans by 2050
          </h2>

          {/* Slider */}
          <div className="relative flex items-center justify-center w-full max-w-2xl mx-auto">

            {/* LEFT ARROW */}
            <button
              onClick={prevItem}
              className="absolute left-0 p-3 sm:p-4 text-gray-700 hover:text-primary transition"
            >
              <FontAwesomeIcon icon={faChevronLeft} size="xl" />
            </button>

            {/* MAIN SLIDE */}
            <div className="px-10 sm:px-14">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {items[current].title}
              </h3>
              <p className="mt-3 sm:mt-4 text-gray-600 text-base sm:text-lg">
                {items[current].desc}
              </p>
            </div>

            {/* RIGHT ARROW */}
            <button
              onClick={nextItem}
              className="absolute right-0 p-3 sm:p-4 text-gray-700 hover:text-primary transition"
            >
              <FontAwesomeIcon icon={faChevronRight} size="xl" />
            </button>

          </div>
        </div>
      </section>

    </div>
  );
}
