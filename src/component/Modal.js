import React, { useState } from 'react'
import OpenModal from './subComponent/OpenModal';

const Modal = () => {
const[showModal,setShowModal]=useState(false);
  return (
    <div style={{ padding: "2rem" }}>
    <button onClick={() => setShowModal(true)} style={{ padding: "0.75rem 1.25rem" }}>
      Book Seats
    </button>
    <OpenModal
      isOpen={showModal}
      onClose={() => setShowModal(false)}
    >
      <h3>this is  a modal</h3>
      
    </OpenModal>
  </div>
  )
}

export default Modal
