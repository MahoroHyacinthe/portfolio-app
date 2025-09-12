import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaMicrophone, FaMicrophoneSlash, FaVolumeUp, FaCalendarAlt, FaEnvelope } from 'react-icons/fa';
import { chatbotKnowledge } from '../data/chatbotKnowledge';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Mahoro's AI secretary. I can answer questions about his work, schedule appointments, and take messages. How can I assist you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);

  const [autoSpeakEnabled, setAutoSpeakEnabled] = useState(true);

  // Stop any existing speech and initialize
  useEffect(() => {
    // Immediately stop any ongoing speech
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    // Initialize speech recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = false;
      recognitionInstance.lang = 'en-US';
      
      recognitionInstance.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        setIsListening(false);
        setTimeout(() => handleSendMessage(transcript), 500);
      };
      
      recognitionInstance.onerror = () => setIsListening(false);
      recognitionInstance.onend = () => setIsListening(false);
      
      setRecognition(recognitionInstance);
    }

    // Auto-greet after 3 seconds
    const timer = setTimeout(() => {
      const welcomeMessage: Message = {
        id: Date.now(),
        text: "👋 Welcome! I'm Mahoro's AI secretary. I can help you learn about his work, schedule a meeting, or take a message. What would you like to do?",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, welcomeMessage]);
      setIsOpen(true);
      
      // Auto-speak welcome message immediately
      setTimeout(() => {
        if ('speechSynthesis' in window) {
          const synth = window.speechSynthesis;
          synth.cancel();
          const utterance = new SpeechSynthesisUtterance(welcomeMessage.text);
          utterance.rate = 0.8;
          utterance.volume = 1;
          synth.speak(utterance);
        }
      }, 1000);
    }, 3000);

    return () => {
      clearTimeout(timer);
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);



  const startListening = () => {
    if (recognition) {
      setIsListening(true);
      recognition.start();
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
  };

  const handleSendMessage = (voiceText?: string) => {
    const messageText = voiceText || inputText;
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    if (!voiceText) setInputText('');

    // Generate response
    const botResponse = `I heard you say: "${messageText}". I'm Mahoro's AI secretary and I'm here to help! I can tell you about his work with React and TypeScript, his SkillLink platform, schedule meetings, or answer any questions. What would you like to know?`;
    
    const botMessage: Message = {
      id: Date.now() + 1,
      text: botResponse,
      isBot: true,
      timestamp: new Date()
    };

    setTimeout(() => {
      setMessages(prev => [...prev, botMessage]);
      // Auto-speak immediately without any conditions
      if ('speechSynthesis' in window) {
        const synth = window.speechSynthesis;
        synth.cancel();
        const utterance = new SpeechSynthesisUtterance(botResponse);
        utterance.rate = 0.8;
        utterance.volume = 1;
        synth.speak(utterance);
      }
    }, 1000);
  };

  const quickActions = [
    { text: "About Mahoro", action: "about", icon: FaRobot },
    { text: "Schedule Meeting", action: "schedule", icon: FaCalendarAlt },
    { text: "Send Message", action: "message", icon: FaEnvelope },
    { text: "His Skills", action: "skills", icon: FaRobot }
  ];

  const handleQuickAction = (action: string) => {
    let response = '';
    
    switch (action) {
      case 'about':
        response = `${chatbotKnowledge.personal.name} is a frontend developer and founder of SkillLink platform. He specializes in React, TypeScript, and modern web development.`;
        break;
      case 'schedule':
        response = "I'd be happy to schedule a meeting with Mahoro! Please provide your name, email, preferred date and time, and what you'd like to discuss.";
        break;
      case 'message':
        response = "I'll take a message for Mahoro! Please tell me your name, email, and your message, and I'll make sure he gets it.";
        break;
      case 'skills':
        response = `Mahoro is skilled in: ${chatbotKnowledge.skills.slice(0, 6).join(', ')}, and more! He's a React specialist and platform creator.`;
        break;
    }
    
    const botMessage: Message = {
      id: Date.now(),
      text: response,
      isBot: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, botMessage]);
    // Auto-speak quick actions immediately
    if ('speechSynthesis' in window) {
      const synth = window.speechSynthesis;
      synth.cancel();
      const utterance = new SpeechSynthesisUtterance(response);
      utterance.rate = 0.8;
      utterance.volume = 1;
      synth.speak(utterance);
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl"
      >
        <FaRobot className="text-2xl" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            className="fixed bottom-24 right-6 z-50 w-80 h-96 glass-card flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <FaRobot className="text-white text-sm" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">Mahoro's Secretary</h3>
                  <p className="text-xs text-green-500">Available 24/7</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setAutoSpeakEnabled(!autoSpeakEnabled);
                    if (autoSpeakEnabled && window.speechSynthesis) {
                      window.speechSynthesis.cancel();
                    }
                  }}
                  className={`p-2 rounded-lg transition-colors ${
                    autoSpeakEnabled 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-red-600 hover:bg-red-700'
                  } text-white`}
                  title={autoSpeakEnabled ? 'Stop auto-speaking' : 'Enable auto-speaking'}
                >
                  <FaVolumeUp className="text-sm" />
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    if (window.speechSynthesis) {
                      window.speechSynthesis.cancel();
                    }
                  }}
                  className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded"
                >
                  <FaTimes className="text-slate-600 dark:text-slate-400" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-2xl ${
                      message.isBot
                        ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white'
                        : 'bg-blue-600 text-white'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-3 border-t border-slate-200 dark:border-slate-700">
              <div className="grid grid-cols-2 gap-2 mb-3">
                {quickActions.map((action) => (
                  <button
                    key={action.action}
                    onClick={() => handleQuickAction(action.action)}
                    className="p-2 text-xs bg-slate-100 dark:bg-slate-700 hover:bg-blue-100 dark:hover:bg-blue-900 text-slate-700 dark:text-slate-300 rounded-lg transition-colors flex items-center gap-1"
                  >
                    <action.icon className="text-xs" />
                    {action.text}
                  </button>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder={isListening ? "Listening..." : "Type or speak your message..."}
                  className="flex-1 p-2 text-sm bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button
                  onClick={isListening ? stopListening : startListening}
                  className={`p-2 rounded-lg transition-colors ${
                    isListening 
                      ? 'bg-red-600 hover:bg-red-700 animate-pulse' 
                      : 'bg-green-600 hover:bg-green-700'
                  } text-white`}
                >
                  {isListening ? <FaMicrophoneSlash className="text-sm" /> : <FaMicrophone className="text-sm" />}
                </button>
                <button
                  onClick={() => handleSendMessage()}
                  className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                >
                  <FaPaperPlane className="text-sm" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};