import React from 'react';
import Slider from '../components/Slider';
import '../styles/About.css';
import hall from '../assets/sf-city-hall.jpg';
import instagram_feed from '../assets/instagram-feed.png';
import { FlyerPictureList } from '../helpers/FlyerPictureList';

const About = () => {
  
  const outsideStyles = {
    width: "250px",
    height: "375px",
    margin: "0, auto",
    backgroundPosition: "center"
  }

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
          <div id="eventSlider-outside-container" style={outsideStyles}>
            <Slider slides={FlyerPictureList}/>
          </div>
        </div>
        <div className="HireUs">
          <h1>Hire Us</h1>
          <p>Please e-mail our business manager at <b><a href="mailto:noteworthy@ucchoral.berkeley.edu" target="__blank">noteworthy@ucchoral.berkeley.edu</a></b> and fill out this <a href="https://docs.google.com/forms/d/e/1FAIpQLSexPGp4LpkvAaE66Kmh5EllvAaXQtPmGquz_1dDo9g2PZ01hg/viewform" target="__blank">form</a>. 
            Then we’ll respond to you with a quote as soon as possible.
            In your email, let us know:
            <ul>
              <li>Who you are</li>
              <li>The details of the event (where and when it'll be)</li>
              <li>What kind of songs you'd like us to perform and how long the performance should be</li>
            </ul>
          </p>
          <img id="hire-us-iamge" src={hall} alt='SF City Hall'/>
          <p>For more details, please visit <a href="https://noteworthy.studentorg.berkeley.edu/hire-us/" target='__blank'>here</a></p>
        </div>
        <div className="FollowUs">
          <h1>Follow Us</h1>
          <p>on <a href="https://www.instagram.com/cal_noteworthy/" target="__blank">Instagram</a></p>
          <a href="https://www.instagram.com/cal_noteworthy/" target='__blank'>
            <img id="instagram-feed" src={instagram_feed} alt='Instagram Feed'/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;