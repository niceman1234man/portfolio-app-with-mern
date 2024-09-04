import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Skils from './components/Skils'
import Projects from './components/Projects'

function App() {
  return (
   <>
   <Navbar/>
   <Home/>
   <Skils/>
   <Projects/>
   <Contact/>
   <Footer/>

   </>
  )
}

export default App