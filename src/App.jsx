import React from 'react';
import Contact from './components/contact/Contact';
import Skills from './components/skills/skills';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Education from './components/education/education';
import Topbar from './components/topbar/Topbar';


const App = () => {
  return (
    <>
      <Header />
      <Topbar />
      <Intro />
      <Skills/>
      <Portfolio />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App
