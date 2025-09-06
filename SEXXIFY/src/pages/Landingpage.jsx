import React from 'react'
import '../css/LandingPage.css'
import sofa from '../assets/sofa.png'


function Landingpage() {
  return (
 <div className="landing-container">
      {/* Navbar */}
      <header className="navbar">
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="book-btn">Book Now</button>
      </header>

      {/* Hero Section */}
       <main className="hero">
        <h1 className="title">SEXXIFY</h1>
        <img src={sofa} alt="Sofa" className="sofa" />
        <div className="side-text left">. . YOU WILL . .</div>
        <div className="side-text right">. . LOVE THIS . .</div>
      </main>
    </div>
  );
}
  

export default Landingpage