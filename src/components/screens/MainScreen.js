import React from 'react'
import Home from "../Home";
import About from "../About";
import Services from "../Services";
import Contact from "../Contact";
import "bootstrap/dist/css/bootstrap.min.css";

function MainPage() {
  return (
    <div>
        <Home />
        <About />
        <Services />
        <Contact />
    </div>
  )
}

export default MainPage