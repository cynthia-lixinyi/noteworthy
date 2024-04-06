import React from 'react';
import '../styles/Flyer.css';

import { FlyerPictureList } from '../helpers/FlyerPictureList';

function Flyer() {
  return (
    <div className="flyer">
      {FlyerPictureList.map((image) => {
        return (
          <img src={image} alt='event' />
        )
      })}
    </div>
    
  )
}

export default Flyer
