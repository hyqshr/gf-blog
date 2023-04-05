import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./styles/home.css";
import ScrollAnimation from "react-animate-on-scroll";


function Home() {
  const displayText = "What is more fun than creating art?  -Pierre"

  return (
    <section 
      className="section home" 
      id="home" 
    >
      <Row>
        <Col 
          className="home-col" 
          style={{display: 'flex'}}
        >
          <ScrollAnimation animateIn="animate__backInLeft" duration={2}>
            <h1 className="py-3">Elizabeth Taylor</h1>
            <p>
              <h3 style={{color:"#e5f2ff"}}>{displayText}</h3>
            </p>

            {/* Resume */}
            {/* <Button
              className="button-home"
              variant="light"
              size="lg"
              target="_blank"
              href={pdf1}
              download
            >
              <PictureAsPdfIcon fontSize="large" />
              Resume
            </Button> */}
            
          </ScrollAnimation>
        </Col>
      </Row>
    </section>
  );
}

export default Home;
