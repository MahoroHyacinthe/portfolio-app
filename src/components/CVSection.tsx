import { motion } from 'framer-motion';
import { FaDownload, FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';

export const CVSection = () => {
  const skills = [
    'React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS','redux','integration',
    'Vite', 'Axios', 'Adobe Photoshop', 'Premiere Pro', 'Audition',
    'FL Studio', 'Logic Pro', 'Microsoft Word', 'Excel', 'Electrical Installations'
  ];

  const education = [
    {
      degree: 'Solvit Africa Code 2 Connect Fellowship Bootcamp',
      institution: 'Solvit Africa, Kigali',
      year: '2025 - Present',
      description: 'Advanced skills in frontend development, focusing on React and TypeScript'
    },
    {
      degree: 'Bachelor\'s Degree in Electrical Technology',
      institution: 'IPRC Karongi, Department of Electrical and Electronics Engineering',
      year: '2022 - ',
      description: 'Circuit Design, Digital Electronics, Programming Fundamentals'
    },
    {
      degree: 'A-Level Diploma in Electricity',
      institution: 'Nyanza Technical School, Nyanza',
      year: '2016 - 2018',
      description: 'Technical education in electrical systems and technology'
    }
  ];

  const experience = [
    {
      role: 'Founder & Developer',
      company: 'SkillLink',
      period: '2023 - Present',
      description: 'Developed responsive web platform connecting 100+ aspiring developers with mentors'
    },
    {
      role:  'Journalist',
      company: 'BB Kigali FM',
      period: 'Oct 2024 - Apr 2025',
      description: 'Developed multimedia content, edited audio and video for 10+ live broadcasts'
    },
    {
      role: 'Self-Employed, Music Production & Computer Repair',
      company: 'Freelance',
      period: '2019 - 2024',
      description: 'Taught music production to 50+ students, provided computer repair for 200+ clients'
    },
    {
      role: 'Station lead',
      company: 'Special Economic Zones, Masoro Phase I',
      period: '2018 - 2019',
      description: 'Performed electrical installations and maintenance for 30+ projects'
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
              <motion.a 
                href={item.file === 'CV' ? '/cv/Mahoro_Hyacinthe_CV.pdf' : '/cv/Mahoro_Hyacinthe_Cover_Letter.pdf'}
                download
                className="btn-primary inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="mr-3" />
                Download {item.file}
              </motion.a>
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
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2 pb-4 border-b border-slate-200 dark:border-slate-700 last:border-b-0"
                >
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">{edu.degree}</h4>
                  <p className="text-blue-600 font-bold text-sm">{edu.institution}</p>
                  <p className="text-xs text-slate-500">{edu.year}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{edu.description}</p>
                </motion.div>
              ))}
            </div>
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
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2 pb-4 border-b border-slate-200 dark:border-slate-700 last:border-b-0"
                >
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">{exp.role}</h4>
                  <p className="text-blue-600 font-bold text-sm">{exp.company}</p>
                  <p className="text-xs text-slate-500">{exp.period}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};