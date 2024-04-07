import React from 'react';
import Flyer from '../components/Flyer';
import '../styles/About.css';
import hall from '../assets/sf-city-hall.jpg';

const About = () => {
  return (
    <div className="about">
      <div className="aboutUpperContainer">
        <h1>About Us</h1>
        <p>
          We’re a lower-voices a cappella group known for our fun performances
          and fresh takes on popular songs! It always feels sunny when we perform, 
          and not just because of our golden vests!
        </p>
        <p>
          Since our founding in 2000, we’ve gone million-view-viral on YouTube multiple
          times, released an album entirely composed of <b>original</b> songs, 
          and performed at the 2022 UC Berkeley commencement.
        </p>
      </div>
      <div className="aboutBottomContainer">
        <div className="events">
          <h1>Events</h1>
          <p>We organize Welcome Back to A Cappella, 
          Cal’s a cappella orientation, at the beginning of every semester. 
          Hundreds of students turn out to hear 13+ a cappella groups perform. 
          The shows are always fun, and we hope you’ll come!</p>
          <Flyer />
        </div>
        <div className="HireUs">
          <h1>Hire Us</h1>
          <p>Please e-mail our business manager at <b>noteworthy@ucchoral.berkeley.edu</b> and fill out this form. 
            Then we’ll respond to you with a quote as soon as possible.
            In your email, let us know:
            <ul>
              <li>Who you are</li>
              <li>The details of the event (where and when it'll be)</li>
              <li>What kind of songs you'd like us to perform and how long the performance should be</li>
            </ul>
          </p>
          <img id="hire-us-iamge" src={hall} alt='SF City Hall'/>
        </div>
        <div className="FollowUs">
          <h1>Follow Us</h1>
        </div>
      </div>
    </div>
  );
};

export default About;