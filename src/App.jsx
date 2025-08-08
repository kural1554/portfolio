import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EducationTimeline from './components/EducationTimeline';
import './App.css'; // Make sure this line is here

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Experience />

        <EducationTimeline />
        <Services />
        <Skills />
        <Projects />
        
        <Contact />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;