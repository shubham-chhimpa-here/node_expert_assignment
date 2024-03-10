import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroComponent from './components/HeroComponent'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Whyus from './components/Whyus'
import Stats from './components/Stats'
import Feedback from './components/Feedback'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar />
    <HeroComponent />
    <Features />
    <Whyus />
    <Stats />
    <Feedback />
    <Footer />
    </>
  )
}

export default App
