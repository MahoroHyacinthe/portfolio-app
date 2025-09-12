import { motion } from 'framer-motion';
import { ContactForm } from '../components/ContactForm';
import { SocialLinks } from '../components/SocialLinks';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaLinkedin } from 'react-icons/fa';

export const Contact = () => {
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
          <h1 className="text-heading text-blue-600 dark:text-blue-400 mb-6">Let's Connect</h1>
          <p className="text-body text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can create something amazing together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-12"
          >
            <h2 className="text-subheading text-slate-900 dark:text-white mb-8">Send Message</h2>
            <ContactForm />
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-10"
            >
              <h3 className="text-subheading text-slate-900 dark:text-white mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {[
                  { icon: FaEnvelope, text: 'mahorohyacinthe4@gmail.com', color: 'text-blue-600' },
                  { icon: FaPhone, text: '+250 786 444 064', color: 'text-green-600' },
                  { icon: FaMapMarkerAlt, text: 'Kigali, Rwanda', color: 'text-purple-600' },
                  { icon: FaLinkedin, text: 'linkedin.com/in/mahoro-hyacinthe-526557232', color: 'text-blue-500' }
                ].map(({ icon: Icon, text, color }, index) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 glass-card hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`p-3 ${color} bg-blue-50 dark:bg-blue-900/20 rounded-2xl`}>
                      <Icon className="text-xl" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-card p-10"
            >
              <h3 className="text-subheading text-slate-900 dark:text-white mb-8">
                Follow My Journey
              </h3>
              <SocialLinks />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="glass-card p-10"
            >
              <h3 className="text-subheading text-slate-900 dark:text-white mb-6">
                Let's Build Together
              </h3>
              <p className="text-body text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                As the founder of SkillLink and an experienced frontend developer, I'm passionate about 
                creating scalable web applications and mentoring aspiring developers. Let's collaborate 
                on transformative projects that make a real impact!
              </p>
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'Node.js',].map((tech) => (
                  <span key={tech} className="px-4 py-2 glass-card text-sm font-bold text-blue-600">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};