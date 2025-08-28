import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { About } from './pages/About';
import { CVSection } from './components/CVSection';
import { Projects } from './pages/Projects';
import { Journal } from './pages/Journal';
import { Contact } from './pages/Contact';
import { ChatBot } from './components/ChatBot';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <NavBar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="cv">
          <CVSection />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="journal">
          <Journal />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <ChatBot />
    </div>
  );
}

export default App;