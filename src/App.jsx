import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-black">
      <Header />
      <main>
        <Hero />
        <Skills />
        <WorkExperience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
