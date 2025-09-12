import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaYoutube, FaWhatsapp, FaInstagram } from 'react-icons/fa';

export const Hero = () => {
  return (
    <section className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center section-padding relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-slate-300/30 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x:30 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-5 pt-30"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 25 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className="text-2xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-4 font-poppins">
                Mahoro
                <span className=" text-blue-600">Hyacinthe</span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-300 mb-6">
                React Developer
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                Passionate frontend developer specializing in building scalable, elegant web applications with React, TypeScript, and JavaScript
              </p>
              <p className="text-base md:text-lg text-slate-500 dark:text-slate-400">
                Founder of SkillLink • MedConnect • EightQuest Multi-media Powerhouse
              </p>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex gap-4 flex-wrap"
            >
              {[
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/mahoro-hyacinthe-526557232/", color: "hover:text-blue-600" },
                { icon: FaGithub, href: "https://github.com/MahoroHyacinthe", color: "hover:text-gray-800" },
                { icon: FaFacebook, href: "https://www.facebook.com/Eightquest", color: "hover:text-blue-500" },
                { icon: FaInstagram, href: "https://www.instagram.com/hyacinthemahoro/", color: "hover:text-pink-500" },
                { icon: FaYoutube, href: "https://www.youtube.com/@EightQuestWorld", color: "hover:text-red-500" },
                { icon: FaWhatsapp, href: "https://wa.me/250786444064", color: "hover:text-green-500" }
              ].map(({ icon: Icon, href, color }, index) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 glass-card text-slate-700 dark:text-white ${color} transition-all duration-300`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <Icon className="text-xl" />
                </motion.a>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <motion.button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary group"
              >
                <span className="flex items-center gap-2">
                  Explore My Work
                  <motion.svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4 4m4-4l-4-4" />
                  </motion.svg>
                </span>
              </motion.button>
              <motion.button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Let's Connect
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex justify-center lg:justify-end px-20"
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-slate-300/20 rounded-full blur-2xl"></div>
              <img
                src="/Myphoto.jpg"
                alt="Mahoro Hyacinthe"
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full shadow-2xl border-4 border-white/50"
              />
            </motion.div>
          </motion.div>
        </div>


      </div>
    </section>
  );
};