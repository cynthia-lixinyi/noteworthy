import React, { useState } from 'react'
import '../styles/Slider.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const Slider = ({ slides }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadious: "15px",
    backgroundPosition: "center",
    // backgroundImage: `url(${slides[currentIndex]})`
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "10px",
    color: "#000",
    zIndex: 1,
    cursor: "pointer",
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "10px",
    color: "#000",
    zIndex: 1,
    cursor: "pointer",
  };

  const goToPrevious = () => {
    const isFirstSlide = (currentIndex === 0);
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = (currentIndex === slides.length - 1);
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}><ArrowCircleLeftIcon /></div>
      <div style={slideStyles} onClick={goToNext}>
        <img src={slides[currentIndex]} alt="poster"/>
      </div>
      <div style={rightArrowStyles} onClick={goToNext}><ArrowCircleRightIcon /></div>
      
    </div>
  )
}

export default Slider;

