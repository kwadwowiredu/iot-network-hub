import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain, faRobot, faCubes, faGlobeAfrica, faUsers, faLightbulb, faHandshake, faChartLine } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <div className="pt-20">
      {/* ====== VIDEO HERO ====== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover -z-10"
        >
          <source src="/src/assets/hero-vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>

        {/* Hero Content */}
        <div className="relative text-center text-white px-6 w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-2xl">
            Building Africa's <span className="text-primary">Exponential</span> Future
          </h1>
          <p className="text-xl md:text-3xl mt-6 font-light drop-shadow-lg">
            Empowering 1 billion young Africans through emerging technologies
          </p>
          <div className="mt-10">
            <button className="bg-primary text-black px-12 py-5 rounded-full font-bold text-lg hover:bg-yellow-400 transition shadow-2xl transform hover:scale-105">
              Join the Movement
            </button>
          </div>

          <div className="mt-20 text-4xl md:text-5xl font-black">
            <span className="text-yellow-500">1 BILLION</span> Africans by 2050
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Exponential Technologies We Champion</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { icon: faBrain, label: "Artificial Intelligence", color: "text-blue-600" },
              { icon: faRobot, label: "Robotics", color: "text-red-600" },
              { icon: faCubes, label: "Blockchain", color: "text-purple-600" },
              { icon: faGlobeAfrica, label: "IoT", color: "text-green-600" },
            ].map(t => (
              <div key={t.label} className="text-center group">
                <div className="bg-white dark:bg-gray-900 p-10 rounded-2xl shadow-xl group-hover:shadow-2xl transition transform group-hover:-translate-y-3">
                  <FontAwesomeIcon icon={t.icon} className={`text-6xl ${t.color} mb-4`} />
                  <p className="font-bold text-lg">{t.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Core Programs</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: faUsers, title: "Community Building", desc: "Connecting innovators across Africa" },
              { icon: faLightbulb, title: "Innovation Labs", desc: "Prototyping Africa's future solutions" },
              { icon: faChartLine, title: "Talent Accelerator", desc: "Training the next generation of tech leaders" },
            ].map(p => (
              <div key={p.title} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
                <FontAwesomeIcon icon={p.icon} className="text-5xl text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="relative bg-cover bg-center bg-no-repeat h-screen flex mb-8"
       style={{ backgroundImage: "url('/src/assets/component_pic.jpg')" }}>
        <div className='absolute inset-0 bg-black/60'></div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center">
          <h2 className="text-white text-8xl mb-2">Join Us in <span className='text-yellow-500'>Building Africa's Future</span></h2>
          <p className="text-white text-4xl">Partners • Governments • Universities • Corporates • Startups</p>
          <div className='border-1 flex justify-center items-center bg-yellow-500 px-20 py-4 rounded-md hover:bg-yellow-600 cursor-pointer mt-6'>
            <div><FontAwesomeIcon icon={faHandshake} className="text-black text-xl mr-1"/></div>
            <div className="font-semibold text-xl">Get Involved With Us</div>
          </div>          
        </div>
      </section>
    </div>
  )
}