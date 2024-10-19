import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Skils from './components/Skils'
import Projects from './components/Projects'
import About from './components/About'
import Service from './components/Service'

function App() {
  return (
   <>
   <Navbar/>
   <Home/>
   <About/>
   <Skils/>
   <Projects/>
   <Service/>
   <Contact/>
   <Footer/>

   </>
  )
}

export default App