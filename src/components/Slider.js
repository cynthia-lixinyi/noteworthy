import React from 'react';

import audition from '../assets/flyers/audition.png';
import halloween from '../assets/flyers/halloween.png';
import history from '../assets/flyers/history.png';
import roadtrip from '../assets/flyers/roadtrip.png';
import spring2023 from '../assets/flyers/spring2023.png';
import spring2024 from '../assets/flyers/spring2024.png';
import sproul from '../assets/flyers/sproul.png';
import westcoast from '../assets/flyers/westcoast.png';


function Slider() {
  return (
    <div className="container">
      <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
      <h1>Events</h1>
      <p>We organize Welcome Back to A Cappella, 
        Cal’s a cappella orientation, at the beginning of every semester. 
        Hundreds of students turn out to hear 13+ a cappella groups perform. 
        The shows are always fun, and we hope you’ll come!</p>
      <swiper-container
        slides-per-view="3"
        grid-rows="3"
        mousewheel-force-to-axis="true"
      >
        <swiper-slide>
          <img src={audition} alt="audition" />
        </swiper-slide>
        <swiper-slide>
          <img src={halloween} alt="halloween" />
        </swiper-slide>
        <swiper-slide>
          <img src={history} alt="history" />
        </swiper-slide>
        <swiper-slide>
          <img src={roadtrip} alt="roadtrip" />
        </swiper-slide>
        <swiper-slide>
          <img src={spring2023} alt="spring2023" />
        </swiper-slide>
        <swiper-slide>
          <img src={spring2024} alt="spring2024" />
        </swiper-slide>
        <swiper-slide>
          <img src={sproul} alt="sproul" />
        </swiper-slide>
        <swiper-slide>
          <img src={westcoast} alt="westcoast" />
        </swiper-slide>

        <div className="slider-controller">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination">

          </div>
        </div>

        

      </swiper-container>
      
    </div>
    
  )
}

export default Slider
