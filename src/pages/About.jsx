import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faBullseye, faHeart, faGlobeAfrica, faUsersCog, faLightbulb } from '@fortawesome/free-solid-svg-icons'

export default function About() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="bg-gradient-to-r from-secondary to-accent text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold">Who We Are</h1>
          <p className="text-xl mt-4 max-w-3xl mx-auto">
            A Pan-African movement harnessing exponential technologies to empower the next generation
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faBullseye} size="2x" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To empower 1 billion young Africans by 2050 through community, education, innovation, and access to exponential technologies.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faEye} size="2x" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300">
                An Africa where every young person is a creator, innovator, and leader in the Fourth Industrial Revolution.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-secondary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faHeart} size="2x" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Values</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Excellence • Collaboration • Inclusivity • Boldness • Ubuntu • Innovation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 2050 Goal */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            1 BILLION AFRICANS EMPOWERED BY 2050
          </h2>
          <div className="grid md:grid-cols-3 gap-10 mt-16 text-black">
            {[
              { icon: faUsersCog, title: "Human Capital", desc: "Training & upskilling millions" },
              { icon: faLightbulb, title: "Innovation", desc: "Building African solutions" },
              { icon: faGlobeAfrica, title: "Ecosystem", desc: "Connecting the continent" },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-2xl">
                <FontAwesomeIcon icon={item.icon} className="text-6xl text-primary mb-4" />
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-3">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}