// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import AboutUs from './components/AboutUs'
import Banner from './components/Banner'
import Navbar from './components/Navbar'

function App() {

  return (
    <div style={{width: "90%", margin: "0 auto"}}>
    <div style={{}}>
      <Navbar />
      <Banner />
    </div>
    <AboutUs />
    </div>
  )
}

export default App
