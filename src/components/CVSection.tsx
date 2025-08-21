import { motion } from 'framer-motion';
import { FaDownload, FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';

export const CVSection = () => {
  const skills = [
    'React', 'TypeScript', 'JavaScript', 'Node.js', 'MongoDB',
    'Tailwind CSS', 'Git', 'REST APIs', 'Responsive Design',
    'Framer Motion', 'Vite', 'React Router', 'Axios', 'HTML5', 'CSS3'
  ];

  const education = [
    {
      degree: 'React Development Bootcamp',
      institution: 'Solvit Africa',
      year: '2024',
      description: 'Intensive training in React, TypeScript, and modern web development practices'
    }
  ];

  const experience = [
    {
      role: 'Frontend Developer Trainee',
      company: 'Solvit Africa',
      period: '2024 - Present',
      description: 'Building modern web applications with React and TypeScript'
    }
  ];

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
          <h2 className="text-heading text-blue-600 dark:text-blue-400 mb-6">Professional Profile</h2>
          <p className="text-body text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Comprehensive overview of my skills, education, and professional journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            { title: 'Curriculum Vitae', desc: 'Complete professional overview', file: 'CV' },
            { title: 'Cover Letter', desc: 'Personalized introduction letter', file: 'Cover Letter' }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -10 }}
              className="glass-card p-10 text-center group"
            >
              <h3 className="text-subheading text-slate-900 dark:text-white mb-4">{item.title}</h3>
              <p className="text-body text-slate-600 dark:text-slate-300 mb-8">{item.desc}</p>
              <motion.button 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="mr-3" />
                Download {item.file}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-600 rounded-2xl">
                <FaCode className="text-white text-2xl" />
              </div>
              <h3 className="text-subheading text-slate-900 dark:text-white">Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 glass-card text-sm font-bold text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-600 rounded-2xl">
                <FaGraduationCap className="text-white text-2xl" />
              </div>
              <h3 className="text-subheading text-slate-900 dark:text-white">Education</h3>
            </div>
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">{edu.degree}</h4>
                <p className="text-blue-600 font-bold">{edu.institution}</p>
                <p className="text-sm text-slate-500">{edu.year}</p>
                <p className="text-slate-600 dark:text-slate-300">{edu.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-600 rounded-2xl">
                <FaBriefcase className="text-white text-2xl" />
              </div>
              <h3 className="text-subheading text-slate-900 dark:text-white">Experience</h3>
            </div>
            {experience.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">{exp.role}</h4>
                <p className="text-blue-600 font-bold">{exp.company}</p>
                <p className="text-sm text-slate-500">{exp.period}</p>
                <p className="text-slate-600 dark:text-slate-300">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};