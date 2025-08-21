import { motion } from 'framer-motion';
import type { JournalEntry } from '../types';

interface JournalCardProps {
  entry: JournalEntry;
  index: number;
}

export const JournalCard = ({ entry, index }: JournalCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01, y: -5 }}
      className="group"
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-32 flex-shrink-0">
          <div className="glass-card p-4 text-center">
            <div className="text-2xl font-black text-blue-600">
              {new Date(entry.date).getDate()}
            </div>
            <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">
              {new Date(entry.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
              {entry.title}
            </h3>
            <motion.span 
              className="px-4 py-1 glass-card text-sm font-bold text-blue-600"
              whileHover={{ scale: 1.1 }}
            >
              {entry.topic}
            </motion.span>
          </div>
          
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            {entry.content}
          </p>
          
          <div className="text-sm text-slate-500 dark:text-slate-400">
            Published on {new Date(entry.date).toLocaleDateString()}
          </div>
        </div>
      </div>
    </motion.article>
  );
};