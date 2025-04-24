import React from 'react'

const OpenModal = ({isOpen,onClose,children}) => {
    if(!isOpen) return null //here we heck if the open modal command is false then we have to return null.
  return (
   
    <div style={styles.backdrop}>
    <div style={styles.modal}>
      <div>{children}</div>
      <div style={styles.actions}>
      <button onClick={onClose} style={styles.button}>Cancel</button>
      <div>
      this is the modal what i can open
      </div>
       
      </div>
    </div>
  </div>
   
  )
}


export default OpenModal


const styles = {
    backdrop: {
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(0,0,0,0.5)", display: "flex",
      alignItems: "center", justifyContent: "center"
    },
    modal: {
      background: "#fff", padding: "1.5rem", borderRadius: "8px", width: "300px"
    },
    actions: {
      marginTop: "1rem", display: "flex", justifyContent: "space-between"
    },
    button: {
      padding: "0.5rem 1rem", border: "none", borderRadius: "4px", cursor: "pointer"
    }
  };

