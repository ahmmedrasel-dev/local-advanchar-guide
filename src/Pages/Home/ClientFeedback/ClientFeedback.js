import React from 'react';
import { Row } from 'react-bootstrap';
import Slider from 'react-slick/lib/slider';
import Review from '../../Review/Review';
import './ClientFeedback.css'

const ClientFeedback = () => {
  const feedback = [
    {
      "id": "624a035f86e2a5f941bbb89f",
      "comments": "Excellent private tour. Our guide was incredibly knowledgeable and gave us a fantastic day. We learnt about history, art, culture and much more. We are well traveled and have high standards, and we were very happy with our tour guide.",
      "photo": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      "name": "Sophia Yates",
      "ratting": "5",
      "country": "United Stated"
    },
    {
      "id": "624a035fba807f8f596f59be",
      "comments": "A great way to kick off a trip to Bangladesh. Guide was very knowledgeable and friendly and we had a great time eating our way around the market.",
      "photo": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      "name": "Lottie Davenport",
      "ratting": "4",
      "country": "United Kingdom"
    },
    {
      "id": "624a035f5c0d0e7afa1bacf0",
      "comments": "A fantastic tour. This tour won’t disappoint! We had a fantastic tour guide who was very knowledgeable. Guides give historical and cultural information and was more than happy to answer questions.",
      'Photo': "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      "name": "Lorna Mays",
      "ratting": "4",
      "country": "Germany"
    },
    {
      "id": "624a035f5498e072ed16fedb",
      "comments": "Really enjoyed the trip- our Guide was very knowledgeable and clearly passionate. extremely well informed and ran an interesting and humerous tour, explaining everything en route",
      "photo": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "name": "Dennis Bullock",
      "ratting": "5",
      "country": "Poland"
    }
  ]

  const settings = {
    dots: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <section>
      <h2 className='text-center mb-5 text-uppercase' style={{ 'color': '#2f92eb' }}>Client Feedback</h2>
      <Row>
        <Slider {...settings} className="mb-5">
          {
            feedback.map(review => <Review key={review.id} review={review}></Review>)
          }
        </Slider>
      </Row>
    </section>
  );
};

export default ClientFeedback;