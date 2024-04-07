import React, { useState } from 'react';
import '../styles/Demo.css';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

const videos = [
  "https://www.youtube.com/embed/n0p8MxT8AxI?si=FdEKtCITnDXk3_5r",
  "https://www.youtube.com/embed/kW57PpibCMA?si=iaMGvsddFC49tpTf",
  "https://www.youtube.com/embed/GMnqKwlp9eg?si=UAF3WRgJlZV2lFnG",
  "https://www.youtube.com/embed/n0p8MxT8AxI?si=FdEKtCITnDXk3_5r",
  "https://www.youtube.com/embed/kW57PpibCMA?si=iaMGvsddFC49tpTf",
  "https://www.youtube.com/embed/GMnqKwlp9eg?si=UAF3WRgJlZV2lFnG",
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
        <Slider {...settings}>
          {videos.map( (video, idx) => (
            <div className={idx === videoIndex ? "slide activeSlide" : "slide"}>
              <iframe src={video} title={`Video ${idx}`} frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          ))}
        </Slider>
      </div>
      <h3>Find Us on <a href="https://www.youtube.com/@UCBNoteworthy" target="_blank" rel="noreferrer">YouTube</a> for More Videos!</h3>
    </div>
  );
};

export default Demo;