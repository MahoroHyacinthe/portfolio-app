import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { JournalCard } from '../components/JournalCard';
import { useJournal } from '../hooks/useJournal';
import type { JournalFormData } from '../types';

export const Journal = () => {
  const { entries, loading, addEntry } = useJournal();
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [showForm, setShowForm] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<JournalFormData>();

  const topics = ['all', ...Array.from(new Set(entries.map(entry => entry.topic)))];
  
  const filteredEntries = selectedTopic === 'all' 
    ? entries 
    : entries.filter(entry => entry.topic === selectedTopic);

  const onSubmit = (data: JournalFormData) => {
    addEntry(data);
    reset();
    setShowForm(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-900 dark:text-white">Loading journal entries...</p>
        </div>
      </div>
    );
  }

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
          <h1 className="text-heading text-blue-600 dark:text-blue-400 mb-6">Development Journal</h1>
          <p className="text-body text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Documenting my journey, insights, and reflections on web development and professional growth
          </p>
        </motion.div>

        <div className="glass-card p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-6">
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="px-6 py-4 glass-card text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-2xl"
            >
              {topics.map(topic => (
                <option key={topic} value={topic} className="bg-white dark:bg-slate-800">
                  {topic === 'all' ? 'All Topics' : topic}
                </option>
              ))}
            </select>

          </div>
        </div>

        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-card p-12 mb-12"
          >
            <h3 className="text-subheading text-slate-900 dark:text-white mb-8">
              Create New Journal Entry
            </h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <input
                  {...register('title', { required: 'Title is required' })}
                  placeholder="Entry title"
                  className="w-full px-6 py-4 glass-card text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-2xl"
                />
                {errors.title && (
                  <p className="text-red-500 text-sm mt-2">{errors.title.message}</p>
                )}
              </div>

              <div>
                <input
                  {...register('topic', { required: 'Topic is required' })}
                  placeholder="Topic (e.g., React, Career, Learning)"
                  className="w-full px-6 py-4 glass-card text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-2xl"
                />
                {errors.topic && (
                  <p className="text-red-500 text-sm mt-2">{errors.topic.message}</p>
                )}
              </div>

              <div>
                <textarea
                  {...register('content', { required: 'Content is required' })}
                  rows={6}
                  placeholder="Share your thoughts and reflections..."
                  className="w-full px-6 py-4 glass-card text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-2xl resize-none"
                />
                {errors.content && (
                  <p className="text-red-500 text-sm mt-2">{errors.content.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Publish Entry
              </motion.button>
            </form>
          </motion.div>
        )}

        <div className="space-y-8">
          {filteredEntries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <JournalCard entry={entry} index={index} />
            </motion.div>
          ))}
        </div>

        {filteredEntries.length === 0 && (
          <div className="text-center glass-card p-16">
            <p className="text-body text-slate-600 dark:text-slate-300">
              No entries found for the selected topic.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};