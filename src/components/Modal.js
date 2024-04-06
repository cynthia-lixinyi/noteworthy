import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({ title, description }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button>
          <CloseIcon />
        </button>
        <div className="modalTitle">
          <h1>{title}</h1>
        </div>
        <div className="modalBody">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Modal
