// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import backgroundImage from "./assets/Vector 19.png";

function App() {
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <div style={{ position: "relative" }}>
        <img
          src={backgroundImage}
          style={{
            position: "absolute",
            zIndex: -1,
            width: "100%",
            height: 700,
          }}
        />
        <div style={{ padding: "10px 80px" }}>
          <Navbar />
        </div>
        <Banner />
      </div>
      <div style={{ marginTop: 200 }}>
        <AboutUs />
      </div>
    </div>
  );
}

export default App;
