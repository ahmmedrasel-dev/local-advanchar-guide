import React from 'react';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';


const Home = () => {
  return (
    <main>
      <Slider></Slider>
      <Services></Services>
      <ClientFeedback></ClientFeedback>
    </main>
  );
};

export default Home;