import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Blogs = () => {
  const blogs = [
    {
      question: '',
      answer: ''
    }
  ]
  return (
    <section className='my-5' style={{ 'height': '70vh' }}>
      <Container>
        <Row>
          <Col md={12} className="mb-5">
            <div>
              <h4>Difference between authorization and authentication?</h4>
              <article>
                Authentication is about validating your credentials like User Name/User ID and password to verify your identity.Authentication works through passwords, biometrics, one-time pins, or 3rd party application.it visible to the user.Partially It is changeable by the user.
                <br />
                <br />
                Authorization is the process of giving the user permission to access a specific resource or function.On the other hand, your identity is successfully authenticated by the system. Access Grants or denies permissions Authorization. it works through settings maintained by security teams. It is not visible to the user. For Example: Admin, Moderator, Editor are the Authorization in system.
              </article>
            </div>
          </Col>
          <Col md={12}>
            <div>
              <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
              <article>
                Firebase can help me to implement user authentication by email and password, phone, sign in with google, facebook, twitter, github. all major social media can authentication in firebase. their is no doubt for security in firebase. Besides Implementation is so much easier. website can deploy live in firebase hosting without any cost.
                <br />

                Firebase not use only for Authentication. We can use firebase database for deploy backend for mobile and web application. Firebase provide realtime database also Firebase Cloud Firestore and Firebase Hosting. Both are realtime database. it can help building mobile application for android as well apple apps. beside realtime database and Cloud Firestore Both of these are highly flexible, scalable and NoSQL databases. Giving another big reason for developers to start using Firebase.
                <br />
                <br />
                There are lots of complete open-source application alternative of Firebase. Most popular is AWS Amplify, Back4App, Parse, Couchbase, Couchbase, Couchbase etc.
              </article>
            </div>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </section>
  );
};

export default Blogs;