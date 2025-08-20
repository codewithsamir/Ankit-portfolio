import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Teaching from './components/Teaching';
import FamilyBusiness from './components/FamilyBusiness';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Teaching />
      <FamilyBusiness />
      <Education />
      <Contact />
    </div>
  );
}

export default App;