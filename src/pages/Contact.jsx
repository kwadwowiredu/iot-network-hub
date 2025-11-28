// CONTACT PAGE
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faLinkedin, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'  

export default function Contact() {
  return (
    <div className="pt-20">
      {/* ===================== NEW MAP HERO SECTION ===================== */}
      {/* ===== HERO WITH EMBEDDED MAP ===== */}
<section className="relative h-[60vh] w-full overflow-hidden">
  
  {/* Google Maps Embed */}
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d630.3987042296052!2d-1.5789378!3d6.7073622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDInMjYuNSJOIDEuNTQnNDQuMiJX!5e0!3m2!1sen!2sgh!4v1732560000000"
    className="absolute top-0 left-0 w-full h-full object-cover"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-6">
    <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-xl">
      Get In Touch
    </h1>
    <p className="text-2xl mt-6 text-gray-200 drop-shadow-lg">
      Let's build the African future together
    </p>

    {/* Get Directions Button */}
    <a
      href="https://maps.app.goo.gl/qAjeDKoNUjuTX35h8"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-8 bg-yellow-500 text-black font-bold px-8 py-4 rounded-full shadow-2xl hover:bg-yellow-400 transition transform hover:scale-105"
    >
      Get Directions
    </a>
  </div>

</section>
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-10">
              <h2 className="text-2xl font-bold mb-4 text-primary">Send Us a Message</h2>
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
              <h2 className="text-2xl font-bold mb-4 text-primary">Visit Us in Kumasi</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-xl">Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">Sawaba, Adjacent Galilee Park<br />Kumasi, Ghana</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FontAwesomeIcon icon={faEnvelope} className="text-xl text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-xl">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">info@iotnetworkhub.africa</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FontAwesomeIcon icon={faPhone} className="text-xl text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-xl">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-400">+233 50 000 0000</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FontAwesomeIcon icon={faClock} className="text-xl text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-xl">Office Hours</h3>
                    <p className="text-gray-600 dark:text-gray-400">Monday – Friday: 8:00 AM – 5:00 PM GMT</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-2xl text-primary font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-6 text-3xl">
                  <a href="#" className="hover:bg-gray-700 hover:text-white hover:rounded-full p-2 transform transition-all duration-300 hover:-translate-y-2">
                    <FontAwesomeIcon icon={faXTwitter} size="md" />
                  </a>
                  <a href="#" className="hover:bg-blue-500 hover:text-white hover:rounded-full p-2 transform transition-all duration-300 hover:-translate-y-2">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} size="md" />
                  </a> 
                  <a href="#" className="hover:bg-red-500 hover:text-white hover:rounded-full p-2 transform transition-all duration-300 hover:-translate-y-2">
                    <FontAwesomeIcon icon={['fab', 'youtube']} size="md" />
                  </a> 
                  <a href="#" className="hover:bg-red-500 hover:text-white hover:rounded-full p-2 transform transition-all duration-300 hover:-translate-y-2">
                    <FontAwesomeIcon icon={['fab', 'instagram']} size="md" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}