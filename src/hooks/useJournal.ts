import { useState, useEffect } from 'react';
import type { JournalEntry, JournalFormData } from '../types';
import journalData from '../data/journal.json';

export const useJournal = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        setLoading(true);
        const savedEntries = localStorage.getItem('journalEntries');
        const localEntries = savedEntries ? JSON.parse(savedEntries) : [];
        setEntries([...journalData as JournalEntry[], ...localEntries]);
      } catch (err) {
        setEntries(journalData as JournalEntry[]);
      } finally {
        setLoading(false);
      }
    };

    fetchEntries();
  }, []);

  const addEntry = (formData: JournalFormData) => {
    const newEntry: JournalEntry = {
      id: Date.now(),
      ...formData,
      date: new Date().toISOString().split('T')[0],
    };

    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);

    const localEntries = updatedEntries.filter(entry => entry.id > 1000);
    localStorage.setItem('journalEntries', JSON.stringify(localEntries));
  };

  return { entries, loading, addEntry };
};