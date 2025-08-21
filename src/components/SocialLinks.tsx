import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

/**
 * Social media links component with hover animations
 */
export const SocialLinks = () => {
  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/MahoroHyacinthe' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/mahoro-hyacinthe' },
    { name: 'Facebook', icon: FaFacebook, url: 'https://facebook.com/mahoro.hyacinthe' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com/mahoro_hyacinthe' },
    { name: 'YouTube', icon: FaYoutube, url: 'https://youtube.com/@mahorohyacinthe' },
    { name: 'WhatsApp', icon: FaWhatsapp, url: 'https://wa.me/250788123456' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.15, y: -3 }}
          className="group flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-dark-gray dark:text-white hover:text-white hover:bg-gradient-to-r hover:from-amber hover:to-yellow-500 hover:border-amber transition-all duration-300 shadow-lg hover:shadow-xl"
          title={link.name}
        >
          <link.icon size={22} className="group-hover:scale-110 transition-transform duration-200" />
        </motion.a>
      ))}
    </div>
  );
};