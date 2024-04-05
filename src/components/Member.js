import React, { useState } from 'react'

function Member({ image, name, voice_part, description}) {

  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="individualMember" onClick={toggleDescription}>
      <div style={{ backgroundImage: `url(${image})`}}></div>
      <h1> {name} </h1>
      <h3> {voice_part} </h3>
      {showDescription && <p>{description}</p>}

    </div>
  )
}

export default Member
