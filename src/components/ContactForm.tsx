import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';
import type { ContactFormData } from '../types';

/**
 * Contact form component with validation and reCAPTCHA
 */
export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    if (!captchaValue) {
      alert('Please complete the reCAPTCHA');
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', data);
      setSubmitStatus('success');
      reset();
      setCaptchaValue(null);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl max-w-2xl mx-auto"
    >
      <h2 className="font-poppins text-2xl font-bold text-dark-gray dark:text-white mb-6 text-center">
        Get In Touch
      </h2>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-dark-gray dark:text-white mb-2">
            Name
          </label>
          <input
            {...register('name', { required: 'Name is required' })}
            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber text-dark-gray dark:text-white placeholder-gray-500"
            placeholder="Your full name"
          />
          {errors.name && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-sm mt-1"
            >
              {errors.name.message}
            </motion.p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-dark-gray dark:text-white mb-2">
            Email
          </label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            type="email"
            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber text-dark-gray dark:text-white placeholder-gray-500"
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-sm mt-1"
            >
              {errors.email.message}
            </motion.p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-dark-gray dark:text-white mb-2">
            Message
          </label>
          <textarea
            {...register('message', { required: 'Message is required' })}
            rows={5}
            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber text-dark-gray dark:text-white placeholder-gray-500 resize-none"
            placeholder="Your message..."
          />
          {errors.message && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-sm mt-1"
            >
              {errors.message.message}
            </motion.p>
          )}
        </div>

        <div className="flex justify-center">
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Test key
            onChange={setCaptchaValue}
          />
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-amber to-yellow-500 hover:from-amber/90 hover:to-yellow-500/90 disabled:from-amber/50 disabled:to-yellow-500/50 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              Sending...
            </div>
          ) : (
            'Send Message'
          )}
        </motion.button>

        {submitStatus === 'success' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-500 text-center"
          >
            Message sent successfully!
          </motion.p>
        )}

        {submitStatus === 'error' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 text-center"
          >
            Failed to send message. Please try again.
          </motion.p>
        )}
      </div>
    </motion.form>
  );
};