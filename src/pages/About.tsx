import { motion } from 'framer-motion';
import { SocialLinks } from '../components/SocialLinks';

export const About = () => {
  return (
    <section className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h1 className="text-heading text-blue-600 dark:text-blue-400 mb-6">About Me</h1>
          <p className="text-body text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Passionate developer crafting digital experiences that matter
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <img
                src="/Myphoto.jpg"
                alt="Mahoro Hyacinthe"
                className="w-64 h-64 object-cover rounded-full shadow-2xl"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-card p-12"
          >
            <h2 className="text-subheading text-blue-600 dark:text-blue-400 mb-8">My Journey</h2>
            
            <div className="space-y-6">
              <p className="text-body text-slate-600 dark:text-slate-300 leading-relaxed">
                Hi, I'm Mahoro Hyacinthe, a frontend developer skilled in crafting scalable, intuitive web applications using React, TypeScript, and JavaScript. I prioritize clean, maintainable code to deliver seamless user experiences.
              </p>
              
              <p className="text-body text-slate-600 dark:text-slate-300 leading-relaxed">
                I'm also the founder of <span className="text-blue-600 font-bold">SkillLink</span>, a micro-learning platform empowering aspiring developers through hands-on mentorship from industry experts. This initiative reflects my dedication to leveraging technology to create transformative opportunities for others.
              </p>
              
              <div className="glass-card p-8 bg-blue-50 dark:bg-blue-900/20">
                <h3 className="text-xl font-bold text-blue-600 mb-4">What Drives Me</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  With a blend of technical expertise, creative problem-solving, and a collaborative approach, I consistently deliver impactful solutions in fast-paced environments.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center glass-card p-12"
        >
          <h2 className="text-subheading text-blue-600 dark:text-blue-400 mb-6">Let's Connect</h2>
          <p className="text-body text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
            Follow my journey and connect with me across various platforms
          </p>
          <SocialLinks />
        </motion.div>
      </div>
    </section>
  );
};