import React, { useState } from 'react';
import '../styles/Demo.css';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { FlyerPictureList } from '../helpers/FlyerPictureList';

const videos = [
  <iframe src="https://www.youtube.com/embed/n0p8MxT8AxI?si=FdEKtCITnDXk3_5r" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
  <iframe src="https://www.youtube.com/embed/kW57PpibCMA?si=iaMGvsddFC49tpTf" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
  <iframe src="https://www.youtube.com/embed/GMnqKwlp9eg?si=UAF3WRgJlZV2lFnG" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
]

const Demo = () => {
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

  const [videoIndex, setVideoIndex] = useState(0)

  const settings = {
    Infinite: true,
    lazyLoad: true,
    spped: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setVideoIndex(next)
  }
  return (
    <div id="demo">
      <div className="title">
        <h1>Our Favorite Videos</h1>
      </div>
      <div id="videos-carousel">
        {/* <Slider {...settings}>
          {videos.map( (item, idx) =>(
            <div className={idx === videoIndex ? "slide activeSlide" : "slide" }>
              {item}
            </div>
          ))}
        </Slider> */}
        <Slider {...settings}>
          {FlyerPictureList.map( (img, idx) => (
            <div className={idx === videoIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Demo;