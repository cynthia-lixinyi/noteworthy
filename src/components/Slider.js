import React, { useState } from 'react'
import '../styles/Slider.css'

const Slider = ({ slides }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: "100%",
    position: "relative",
  }

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadious: "15px",
    backgroundPosition: "center",
    backgroundImage: `url(${slides[currentIndex]})`
  }

  return (
    <div style={sliderStyles}>
      <div style={slideStyles}>

      </div>
      
    </div>
  )
}

export default Slider;

