import React from "react";
import { send } from 'emailjs-com';
import {
  Container,
  Row,
  Col,
  Carousel,
  ProgressBar,
  Form,
  Button,
} from "react-bootstrap";
import "./styles/contact.css";
import interest from "./data/interest.js";
import language from "./data/language.js";
import { useState } from 'react';

// 4个社交媒体图标
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

function Contact() {
  const SERVICE_ID = "service_74h3bij";
  const TEMPLATE_ID = "template_rc7ewy6";
  const PUBLIC_KEY = "1F1jxol26kK4hesJZ";

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      SERVICE_ID,
      TEMPLATE_ID,
      toSend,
      PUBLIC_KEY,
    )
      .then((response) => {
        console.log('SUCCESS!', toSend, response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <section className="section contact" id="contact">
      <Container>
        <h1>Interests & Languages</h1>
        <Row className="contact-row">
          <Col lg="8">
            <Carousel>
              {interest.map((interestCarousel, index) => (
                <Carousel.Item
                  key={index}
                  interval={3000}
                  className="contact-img"
                >
                  <img
                    className="d-block w-100"
                    src={interestCarousel.src}
                    alt={interestCarousel.alt}
                  />
                  {/* <Carousel.Caption>
                    <h3>
                      <Badge variant="dark">
                        {interestCarousel.icon}
                        {"  "}
                        {interestCarousel.title}
                      </Badge>
                    </h3>
                    <p>
                      <Badge variant="dark">{interestCarousel.detail}</Badge>
                    </p>
                  </Carousel.Caption> */}
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col lg="4">
            {language.map((languages, index) => (
              <div key={index}>
                <h3>{languages.title}</h3>
                <h6>{languages.detail}</h6>
                <ProgressBar
                  striped
                  variant="success"
                  now={languages.percentage}
                />
              </div>
            ))}
          </Col>
        </Row>

        {/* Contact with email */}
        <form onSubmit={onSubmit}>
          <input
            type='text'
            name='from_name'
            placeholder='from name'
            value={toSend.from_name}
            onChange={handleChange}
          />
          <input
            type='text'
            name='to_name'
            placeholder='to name'
            value={toSend.to_name}
            onChange={handleChange}
          />
          <input
            type='text'
            name='message'
            placeholder='Your message'
            value={toSend.message}
            onChange={handleChange}
          />
          <input
            type='text'
            name='reply_to'
            placeholder='Your email'
            value={toSend.reply_to}
            onChange={handleChange}
          />
          <input type="submit" value="Submit" />
        </form>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <Row>
          <Col>
            <h1>Contact</h1>
            <FacebookIcon fontSize="large" />
            <InstagramIcon fontSize="large" />
            <WhatsAppIcon fontSize="large" />
            <EmailIcon fontSize="large" />
          </Col>
        </Row>

      </Container>
    </section>
  );
}

export default Contact;
