import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faLightbulb,
  faMicrochip,
  faSchool,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            entry.target.classList.add('reveal-active');
        });
      },
      { threshold: 0.25 }
    );

    revealElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="pt-20 font-poppins">

      {/* ====================== HERO SECTION ====================== */}
      <section className="relative min-h-[80vh] flex flex-col-reverse lg:flex-row items-center justify-center gap-10 md:gap-14 px-4 sm:px-6 lg:px-10 bg-white dark:bg-black overflow-hidden">

        {/* Light mode gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/30 via-white to-blue-100/20 pointer-events-none dark:hidden"></div>

        {/* Dark mode gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 via-blue-600/20 to-red-600/20 pointer-events-none hidden dark:block"></div>

        {/* LEFT TEXT BLOCK */}
        <div className="relative z-10 w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-4xl xl:text-4xl font-extrabold leading-tight text-black dark:text-white">
            Africa's <span className="text-yellow-500">Innovation</span> Starts Here
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto lg:mx-0">
            Empowering Africa's next billion innovators through IoT, STEM,
            digital skills and emerging technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6 mt-6">
            <Link
              to="/contact"
              className="w-full sm:w-auto text-center bg-yellow-500 text-black px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold hover:bg-yellow-400 transition shadow-xl"
            >
              Join the Movement
            </Link>

            <Link
              to="/our-work"
              className="w-full sm:w-auto text-center border border-yellow-500 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold hover:bg-yellow-600 hover:text-black transition shadow-xl"
            >
              Watch Our Work
            </Link>
          </div>
        </div>

        {/* RIGHT VIDEO BLOCK */}
        <div className="relative z-10 w-full lg:w-1/2 flex justify-center">
          <div className="relative bg-white/60 dark:bg-white/10 backdrop-blur-xl p-2 sm:p-3 rounded-lg shadow-2xl border border-black/10 dark:border-yellow-500/40 w-full max-w-[650px] md:max-w-[750px]">
            <video
              autoPlay
              muted
              loop
              className="rounded-lg w-full h-[230px] sm:h-[300px] md:h-[400px] lg:h-[480px] xl:h-[520px] object-cover shadow-xl"
            >
              <source src="/hero-vid.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* ====================== WHAT WE DO ====================== */}
      <section className="py-10 md:py-24 bg-gray-100 dark:bg-gray-900 reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-yellow-500">
            Our Work
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

            {/* CARD 1 */}
            <div className="p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition group text-center">
              <FontAwesomeIcon icon={faMicrochip} className="text-4xl md:text-5xl text-yellow-500 group-hover:scale-110 transition mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-3">Open IoT Learning</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                Accessible IoT and tech education for all ages.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition group text-center">
              <FontAwesomeIcon icon={faSchool} className="text-4xl md:text-5xl text-yellow-500 group-hover:scale-110 transition mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-3">School STEM Training</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                Hands-on training for middle and high school students in Ghana.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition group text-center">
              <FontAwesomeIcon icon={faUsers} className="text-4xl md:text-5xl text-yellow-500 group-hover:scale-110 transition mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-3">Meetups & Community</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                Innovator meetups for young African changemakers.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition group text-center">
              <FontAwesomeIcon icon={faLightbulb} className="text-4xl md:text-5xl text-yellow-500 group-hover:scale-110 transition mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-3">STEM Mentorship</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                Digital skills training, guidance & mentorship for youth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== PARTNERS SECTION ====================== */}
      <section className="relative py-16 md:py-22 bg-gray-50 dark:bg-black overflow-hidden">

        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/50 via-white to-blue-100/40 dark:hidden"></div>
        <div className="absolute inset-0 hidden dark:block bg-gradient-to-r from-yellow-600/20 via-blue-600/20 to-red-600/20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">

          <h2 className="text-2xl md:text-4xl lg:text-4xl font-extrabold mb-8 md:mb-10 text-black dark:text-white">
            Powering Africa's Future Together
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-md md:text-xl max-w-2xl mx-auto mb-14">
            Collaborating with academia, industry, government and global partners to
            accelerate innovation across Africa.
          </p>

          {/* Partner Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 reveal">

            {[
              "Universities",
              "Government Agencies",
              "Corporate Partners",
              "Startup Ecosystems",
            ].map((p, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 backdrop-blur-lg border border-yellow-500/40 py-6 md:py-10 text-lg md:text-xl font-bold shadow-xl hover:scale-105 transition text-black dark:text-white"
              >
                {p}
              </div>
            ))}

          </div>

          {/* CTA BUTTON */}
          <Link
            to="/contact"
            className="inline-block mt-12 md:mt-16 bg-yellow-500 text-black px-10 py-4 md:px-12 md:py-5 rounded-full font-bold text-lg hover:bg-yellow-400 transition shadow-xl"
          >
            Become a Partner
          </Link>
        </div>
      </section>

    </div>
  );
}
