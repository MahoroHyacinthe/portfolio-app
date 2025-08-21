import { motion } from 'framer-motion';

/**
 * 404 Not Found page component
 */
export const NotFound = () => {
  return (
    <section className="min-h-screen pt-20 flex items-center justify-center px-4 bg-gradient-to-br from-ivory to-white dark:from-dark-gray dark:to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-50"></div>
      
      <div className="text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="font-poppins text-8xl md:text-9xl font-bold bg-gradient-to-r from-amber to-yellow-500 bg-clip-text text-transparent mb-4"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            404
          </motion.h1>
          
          <h2 className="font-poppins text-2xl md:text-3xl font-semibold text-dark-gray dark:text-white mb-4">
            Oops! Page Not Found
          </h2>
          
          <p className="font-inter text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
            The page you're looking for seems to have wandered off. Let's get you back to exploring my work!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#home"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber to-yellow-500 hover:from-amber/90 hover:to-yellow-500/90 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Back to Home
            </a>
            
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border-2 border-amber text-amber hover:bg-amber hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4 4m4-4l-4-4" />
              </svg>
              View Projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};