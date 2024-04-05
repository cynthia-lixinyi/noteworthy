import React from 'react'

function Member({ image, name, voice_part}) {
  return (
    <div className="individualMember">
      <div style={{ backgroundImage: `url(${image})`}}></div>
      <h1> {name} </h1>
      <h3> {voice_part} </h3>
    </div>
  )
}

export default Member
