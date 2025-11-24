import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUsers, faLightbulb, faMicrochip, faSchool 
} from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'


export default function Home() {

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('reveal-active');
      });
    }, { threshold: 0.25 });

    revealElements.forEach(el => observer.observe(el));
  }, []);


  return (
    <div className="pt-20">

      {/* ====================== Sliding Dual Panel Hero ====================== */}
    <section className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-12 px-10 bg-white dark:bg-black transition font-poppins">
      
      {/* Light mode subtle gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/30 via-white to-blue-100/20 dark:hidden"></div>

      {/* Dark mode neon gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 via-blue-600/20 to-red-600/20 hidden dark:block"></div>

      {/* LEFT TEXT PANEL */}
      <div className="relative lg:w-1/2 space-y-6 animate-slide-in-left">
        <h1 className="text-5xl md:text-5xl font-extrabold leading-tight text-black dark:text-white">
          Africa's <span className="text-yellow-500">Innovation </span> 
          Starts Here
        </h1>
      
        <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 max-w-lg">
          Empowering Africa's next billion innovators through IoT, STEM, digital skills 
          and emerging technologies.
        </p>
      
        <div className="flex gap-6 mt-6">
          <button className="bg-yellow-500 text-black px-10 py-4 rounded-full font-bold hover:bg-yellow-400 transition shadow-2xl">
            Join the Movement
          </button>
      
          {/* WATCH OUR WORK BUTTON */}
          <a 
            href="./pages/WhatWeDo.jsx"
            className="border border-yellow-500 px-10 py-4 rounded-full font-bold
                       hover:bg-yellow-600 hover:text-black transition shadow-2xl"
          >
            Watch Our Work
          </a>
        </div>
      </div>
      
      {/* RIGHT VIDEO PANEL */}
      <div className="lg:w-1/2 flex justify-center animate-slide-in-right">
        <div className="relative bg-white/60 dark:bg-white/10 backdrop-blur-xl p-4 rounded-3xl 
            shadow-2xl border border-black/10 dark:border-yellow-500/40 scale-105">
            
          <video 
            autoPlay muted
            loop
            className="rounded-2xl w-[750px] h-[500px] object-cover shadow-2xl"
          >
            <source src="/src/assets/hero-vid.mp4" type="video/mp4"/>
          </video>
      
        </div>
      </div>
    </section>

      {/* ========================= WHAT WE DO ========================= */}
      <section className="py-24 bg-gray-100 dark:bg-gray-900 reveal">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-yellow-500">
            Our Work
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10
          ">
            <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition group">
              <FontAwesomeIcon icon={faMicrochip} className="text-5xl text-yellow-500 group-hover:scale-110 transition mb-4" />
              <h3 className="text-2xl font-bold mb-3">Open IoT Learning</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Accessible IoT and tech education for all ages.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition group">
              <FontAwesomeIcon icon={faSchool} className="text-5xl text-yellow-500 group-hover:scale-110 transition mb-4" />
              <h3 className="text-2xl font-bold mb-3">School STEM Training</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Hands-on training for middle and high school students in Ghana.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition group">
              <FontAwesomeIcon icon={faUsers} className="text-5xl text-yellow-500 group-hover:scale-110 transition mb-4" />
              <h3 className="text-2xl font-bold mb-3">Meetups & Community</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Innovator meetups for young African changemakers.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition group">
              <FontAwesomeIcon icon={faLightbulb} className="text-5xl text-yellow-500 group-hover:scale-110 transition mb-4" />
              <h3 className="text-2xl font-bold mb-3">STEM Mentorship</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Digital skills training, guidance & mentorship for youth.
              </p>
            </div>
            </div>
        </div>
      </section>



      {/* ========================= FUTURISTIC PARTNERS SECTION ========================= */}
      <section 
  className="relative py-28 bg-gray-50 dark:bg-black font-poppins transition overflow-hidden"
>

  {/* Light mode subtle gradients */}
  <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/50 via-white to-blue-100/40 dark:hidden"></div>

  {/* Dark mode neon gradients */}
  <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 via-blue-600/20 to-red-600/20 hidden dark:block"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-5xl md:text-6xl font-extrabold text-black dark:text-white mb-10">
      Powering Africa's Future Together
    </h2>

    <p className="text-gray-700 dark:text-gray-300 text-xl max-w-3xl mx-auto mb-16">
      Collaborating with academia, industry, government and global partners to 
      accelerate innovation across Africa.
    </p>

    {/* Cards */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-10 reveal">

      {[
        "Universities",
        "Government Agencies",
        "Corporate Partners",
        "Startup Ecosystems",
      ].map((p, i) => (
        <div 
          key={i}
          className="bg-white dark:bg-gray-800 backdrop-blur-lg 
            border border-yellow-500/40 rounded-2xl 
            py-10 text-xl font-bold shadow-2xl 
            hover:scale-105 transition text-black dark:text-white"
        >
          {p}
        </div>
      ))}

    </div>

    {/* CTA */}
    <button className="mt-16 bg-yellow-500 text-black px-12 py-5 rounded-full font-bold 
      text-lg hover:bg-yellow-400 transition shadow-2xl">
      Become a Partner
    </button>

  </div>
</section>

    </div>
  )
}
