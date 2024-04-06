import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import '../styles/Modal.css'

const Modal = ({ isOpen, closeModal, member }) => {

  return (
    <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
      <div className="modalContainer">
        <button className="close-btn" onClick={closeModal}>
          <CloseIcon />
        </button>
        <div className="modalTitle">
          <h1>{member.name}</h1>
        </div>
        <div className="modalBody">
          <p>{member.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Modal
