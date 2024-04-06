import React from 'react'
import Modal from '../components/Modal';

function Member({ image, name, voice_part, description, onClick}) {

  return (
    <div className="individualMember">
      <div style={{ backgroundImage: `url(${image})`}}></div>
      <h1> {name} </h1>
      <h3> {voice_part} </h3>
      <Modal />
    </div>
  )
}

export default Member
