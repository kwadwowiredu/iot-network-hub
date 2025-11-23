import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedin, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
  return (
    <div className="pt-24 pb-16">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold">Get In Touch</h1>
          <p className="text-2xl mt-6">Let’s build the African future together</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-10">
              <h2 className="text-3xl font-bold mb-8 text-primary">Send Us a Message</h2>
              <form className="space-y-6">
                <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 focus:border-primary outline-none transition" required />
                <input type="email" placeholder="Your Email" className="w-full px-6 py-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 focus:border-primary outline-none transition" required />
                <input type="text" placeholder="Subject" className="w-full px-6 py-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 focus:border-primary outline-none transition" />
                <textarea rows="6" placeholder="Your Message" className="w-full px-6 py-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 focus:border-primary outline-none transition resize-none"></textarea>
                <button type="submit" className="w-full bg-primary text-black font-bold py-4 rounded-lg hover:bg-yellow-400 transition shadow-lg">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary">Visit Us in Kumasi</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-3xl text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-xl">Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">Kumasi, Ashanti Region<br />Ghana, West Africa</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FontAwesomeIcon icon={faEnvelope} className="text-3xl text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-xl">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">info@iotnetworkhub.africa</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FontAwesomeIcon icon={faPhone} className="text-3xl text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-xl">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-400">+233 50 000 0000</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FontAwesomeIcon icon={faClock} className="text-3xl text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-xl">Office Hours</h3>
                    <p className="text-gray-600 dark:text-gray-400">Monday – Friday: 8:00 AM – 5:00 PM GMT</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
                <div className="flex space-x-6 text-3xl">
                  <a href="#" className="text-secondary hover:text-primary transition"><FontAwesomeIcon icon={faTwitter} /></a>
                  <a href="#" className="text-secondary hover:text-primary transition"><FontAwesomeIcon icon={faLinkedin} /></a>
                  <a href="#" className="text-secondary hover:text-primary transition"><FontAwesomeIcon icon={faYoutube} /></a>
                  <a href="#" className="text-secondary hover:text-primary transition"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}