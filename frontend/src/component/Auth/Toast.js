import React, { useState } from "react";
import "./Toast.css";

const Toast = ({ msg }) => {
  const [toast, setToast] = useState(true);

  const toastToggler = () => {
    setToast(false)
  }

  return (
    <div className="toas">
      {toast ? (
        <div className="toast" style={{ backgroundColor: msg.color }}>
          <div className="toast__pos">
            <div className="toast__header">
              <h2>{msg.title}</h2>
              <p onClick={toastToggler}>x</p>
            </div>
            <div className="toast__body">
              <p>{msg.body}</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Toast;
