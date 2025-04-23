//making a toast according  to  the button and make it in the stack.

"use client";
import React, { useState } from "react";
let id = 0;
const ToastComponent = () => {
  const [toast, setToast] = useState([]);

  const showToast = (type, message) => {
    //create a new toast what we want .
    const newToast = {
      id: id++,
      type,
      message,
    };
    //set new toast with the old toast array.
    setToast(prev=>[...prev,newToast]);
    setTimeout(() => {
      //when i click on the show toast i will check if there is anything present inside the array then it will filerOut like only the present on is there other are remove
      setToast((prev) => prev.filter((toast) => toast.id !== newToast.id));
    }, 3000);
  };

  return (
    <div>
      <div className="btn-container">
        <button onClick={() => showToast("success", "Operation Successful!")}>
          Success
        </button>
        <button onClick={() => showToast("error", "Something went wrong!")}>
          Error
        </button>
        <button onClick={() => showToast("info", "Here is some info!")}>
          Info
        </button>
        <button onClick={() => showToast("working", "Processing...")}>
          Working
        </button>
      </div>

      <div className="toast-container">
        {toast.map((toast) => (
          <div key={toast.id} className={`toast ${toast.type}`}>
            {toast.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToastComponent;
