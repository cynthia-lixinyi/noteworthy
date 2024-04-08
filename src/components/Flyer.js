import React, { useState } from 'react';
import '../styles/Flyer.css';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

import { FlyerPictureList } from '../helpers/FlyerPictureList';

function Flyer() {

  const NextArrow = ({onClick}) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    )
  }

  const PrevArrow = ({onClick}) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    )
  }

  const [imageIndex, setImageIndex] = useState(0)

  const settings = {
    Infinite: true,
    lazyLoad: true,
    spped: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next)
  }

  return (
    <div id="flyer">
      <div id="image-carousel">
        <Slider {...settings}>
        {FlyerPictureList.map( (image, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={image} alt={`${idx}`} width="100px" height="150px"/>
          </div>
        ))}
        </Slider>
      </div>
    </div>
    
  )
}

export default Flyer
