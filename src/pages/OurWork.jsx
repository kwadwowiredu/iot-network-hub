import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUsers, faBrain, faRocket 
} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { useState, useRef } from 'react';


export default function OurWork() {

  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  // Handlers to toggle play/pause for videos
  const handlePlay1 = () => setIsPlaying1(true);
  const handlePause1 = () => setIsPlaying1(false);
  const handlePlay2 = () => setIsPlaying2(true);
  const handlePause2 = () => setIsPlaying2(false);
  
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      {/* Background Image */}
      <section className="relative pt-28 pb-28 px-6 flex flex-col items-center text-center overflow-hidden">

        {/* Background Glow Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500 rounded-full blur-2xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-30"></div>

        {/* Hero Text */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-500 drop-shadow-sm animate-fade-in">
          Driving Africa's Tech Revolution
        </h1>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-300 text-lg animate-fade-in-delayed">
          We empower innovators across Africa with cutting-edge skills, emerging technologies, 
          and a collaborative ecosystem built for impact.
        </p>

        {/* Glass Card */}
        <div className="mt-16 bg-white/70 dark:bg-gray-800/40 backdrop-blur-xl border border-white/20 dark:border-gray-700/40 rounded-3xl shadow-2xl p-10 w-full max-w-5xl animate-rise">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

            {/* Card Item */}
            <div className="flex flex-col items-center hover:-translate-y-2 transition transform duration-300">
              <FontAwesomeIcon icon={faBrain} className="text-5xl text-yellow-500 drop-shadow-md" />
              <h3 className="mt-4 text-xl font-bold dark:text-white">Innovation</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                AI, IoT, Robotics, Blockchain & deep-tech development.
              </p>
            </div>

            {/* Card Item */}
            <div className="flex flex-col items-center hover:-translate-y-2 transition transform duration-300">
              <FontAwesomeIcon icon={faUsers} className="text-5xl text-yellow-500 drop-shadow-md" />
              <h3 className="mt-4 text-xl font-bold dark:text-white">Community</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                Building strong ecosystems across Africa.
              </p>
            </div>

            {/* Card Item */}
            <div className="flex flex-col items-center hover:-translate-y-2 transition transform duration-300">
              <FontAwesomeIcon icon={faRocket} className="text-5xl text-yellow-500 drop-shadow-md" />
              <h3 className="mt-4 text-xl font-bold dark:text-white">Acceleration</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                Supporting startups with tools, mentorship & resources.
              </p>
            </div>

          </div>
        </div>
      </section>

{/* ===================== PROJECTS SECTION ===================== */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14 text-yellow-500">
          Our Projects
        </h2>
      
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      
          {[
            // IMAGE PROJECTS (hover overlay)
            {
              type: "image",
              source: "/src/assets/smart_clap_system_2.jpg",
              title: "Smart Clap System",
              desc: "A sound-controlled IoT system that turns lights ON/OFF using acoustic triggers."
            },
            {
              type: "image",
              source: "/src/assets/soil_moisture_detector_2.jpg",
              title: "Automatic Irrigation System",
              desc: "A deep-tech moisture-sensing setup that pumps water automatically when the soil dries."
            },
            {
              type: "image",
              source: "/src/assets/smart_dustbin_1.jpg",
              title: "Smart Dustbin",
              desc: "A motion-activated dustbin that opens automatically when a user comes close."
            },
          
            // VIDEO PROJECTS (overlay with play button)
            {
              type: "video",
              source: "/src/assets/smart_clap_demo.mp4",
              title: "Smart Clap System Demo",
              desc: "A full demonstration of the sound-triggered lighting system in action."
            },
            {
              type: "video",
              source: "/src/assets/smart_handwash.mp4",
              title: "Smart Handwash System",
              desc: "A touchless, sensor-based handwashing system that pumps water automatically."
            },
          
          ].map((project, i) => {
          
            const [showOverlay, setShowOverlay] = React.useState(true);
            const videoRef = React.useRef(null);
          
            const handlePlay = () => {
              setShowOverlay(false);
              videoRef.current.play();
            };
          
            return (
              <div key={i} className="relative group rounded-2xl overflow-hidden shadow-xl">
              
                {/* IMAGE PROJECT CARD */}
                {project.type === "image" && (
                  <>
                    <img
                      src={project.source}
                      alt={project.title}
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                    />
    
                    {/* HOVER OVERLAY */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center px-4">
                      <h3 className="text-white text-2xl font-bold mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-200">{project.desc}</p>
                    </div>
                  </>
                )}
    
                {/* VIDEO PROJECT CARD */}
                {project.type === "video" && (
                  <div className="relative">
                  
                    {/* Video */}
                    <video
                      ref={videoRef}
                      src={project.source}
                      className="w-full h-64 object-cover"
                      controls
                      onPause={() => setShowOverlay(true)}
                    />
    
                    {/* Overlay (only before play) */}
                    {showOverlay && (
                      <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center px-5">
                      
                        <h3 className="text-xl font-bold text-yellow-400 mb-3 pointer-events-none">
                          {project.title}
                        </h3>
                    
                        <p className="text-gray-200 text-sm mb-5 pointer-events-none">
                          {project.desc}
                        </p>
                    
                        {/* PLAY BUTTON */}
                        <button
                          onClick={handlePlay}
                          className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
                        >
                          ▶ Play Video
                        </button>
                      </div>
                    )}
    
                  </div>
                )}
    
              </div>
            );
          })}
        </div>
      </div>
    </section>

      {/* ===================== FEATURED EVENTS SECTION ===================== */}
       <section className="py-28 bg-gray-100 dark:bg-gray-900">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-20 text-yellow-500">
      Featured Events & Highlights
    </h2>

    {/* ===================== EVENT 1 ===================== */}
    <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-24">
      
      {/* VIDEO */}
      <video
        ref={videoRef1}
        src="/src/assets/gdiw.mp4"
        controls
        className="w-full h-[500px] object-cover"
        onPlay={handlePlay1}
        onPause={handlePause1}
      />

      {/* OVERLAY TEXT */}
      {!isPlaying1 && (
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-black/40 to-transparent p-10 flex flex-col justify-end">
          <h3 className="text-3xl font-bold text-white mb-3">
            Ghana Digital Innovation Week
          </h3>

          <p className="text-gray-200 max-w-3xl mb-6 text-lg leading-relaxed">
            During this national innovation celebration, IoT Network Hub showcased 
            several hands-on projects including a smart clap system, an automatic 
            irrigation system, and a proximity-activated smart dustbin. These 
            demonstrations highlighted how IoT can solve real everyday challenges 
            across Ghana.
          </p>
        </div>
      )}
    </div>


    {/* ===================== EVENT 2 ===================== */}
    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
      
      {/* VIDEO */}
      <video
        ref={videoRef2}
        src="/src/assets/ogyeahoho.mov"
        controls
        className="w-full h-[500px] object-cover"
        onPlay={handlePlay2}
        onPause={handlePause2}
      />

      {/* OVERLAY TEXT */}
      {!isPlaying2 && (
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-black/40 to-transparent p-10 flex flex-col justify-end">
          <h3 className="text-3xl font-bold text-white mb-3">
            Ogyeahoho Science & Technology Fair
          </h3>

          <p className="text-gray-200 max-w-3xl mb-6 text-lg leading-relaxed">
            At this interactive science and tech fair, our team guided students 
            through practical lessons on how Arduino boards, sensors, and IoT 
            components work. The goal was to strengthen hands-on engineering skills 
            and inspire curiosity in modern technology.
          </p>
        </div>
      )}
    </div>

  </div>
</section>


      {/* Impact Stats */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Impact So Far</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10,000+", label: "Youth Trained" },
              { number: "200+", label: "Events Hosted" },
              { number: "50+", label: "Startups Supported" },
              { number: "15+", label: "Countries Reached" },
            ].map(stat => (
              <div key={stat.label}>
                <h3 className="text-5xl font-black text-primary">{stat.number}</h3>
                <p className="text-xl mt-2 text-gray-700 dark:text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}