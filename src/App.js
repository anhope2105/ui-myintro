import React from 'react'
import Home from './components/Home/Home'
import Navigation from "./components/Navigation/Navigation"
import Summery from "./components/Summery/Summery"
import Language from "./components/Language/Language"
import Process from "./components/Process/Process"
import Projects from "./components/Projects/Projects"
import Carrer from "./components/Carrer/Carrer"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Theme from "./components/Theme/Theme"
import Progress from "./components/Progress/Progress"

function App() {
  return (
    <>
    <Theme />
    <Progress />
    <div className="container">
      <Navigation />
      <Home />
      <Summery />
      <Language />
      <Process />
      <Projects />
      <Carrer />
      <About />
      <Contact />
      <Footer />
    </div>
    </>
  )
}

export default App