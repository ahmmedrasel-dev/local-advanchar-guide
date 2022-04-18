import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
  const img = 'http://raselweb.net/images/2021/06/37/hi-there-1Yc.png'
  return (
    <section className='my-5'>
      <Container>
        <Row>
          <Col md={6}>
            <div className='d-flex justify-content-center'>
              <div className='my-photo glowing'>
                <img src={img} alt="" />
              </div>
            </div>
          </Col>

          <Col md={6}>
            <div className="about-container mt-5">
              <h3>About Me</h3>
              <article>
                Hi! My name is Rasel Ahmmed. I am a Web Developer, and I'm very passionate and dedicated to my work. With 2 years of experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I have developed a wide range of websites from simple HTML5 and CSS3 to fully dynamic web applications using PHP and Laravel.
                <br /><br />
              </article>

              <article> In presents, I am student of programing Hero. Last 3 months am learning Javascript and React Js. Besides i learned some css library as well as HTML5 and CSS3.<br /><br /></article>

              <article> My Goal is become a <strong> MERN STACK Web Developer</strong>. I am working hard to achieve my goal. After 6 months i will complete my MERN STACK Development. In 6 months will practice everyday at least 8 hours. I will do several projects. I will read the documentation of the technology and Practice Code More and More.</article>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;