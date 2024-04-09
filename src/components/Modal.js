import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import '../styles/Modal.css'

function Modal({ name, description, onClose}) {
  return (
    <div>
      <button onClick={onClose}>
        <CloseIcon className='close-btn'/>
      </button>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Modal

