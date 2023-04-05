import React from "react";
import "react-vertical-timeline-component/style.min.css";
import "./styles/services.css";
import Card from 'react-bootstrap/Card';
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section className="section experience" id="services">
      <h1>Services</h1>
      <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ServiceCard 
          title="teacher" 
          intro="Some quick example text to build on the card title and make up the
                bulk of the card's content." 
        />
        <ServiceCard 
          title="teacher" 
          intro="Some quick example text to build on the card title and make up the
                bulk of the card's content." 
        />
        <ServiceCard 
          title="teacher" 
          intro="Some quick example text to build on the card title and make up the
                bulk of the card's content." 
        />
        <ServiceCard 
          title="teacher" 
          intro="Some quick example text to build on the card title and make up the
                bulk of the card's content." 
        />
      </div>


    </section>
  );
}

export default Services;
