import React from "react";
import "../style.css";

const AlertDialog = () => {
  return (
    <div className="alert">
      {/* <div className="warning">
      <i className="fa-sharp fa-solid fa-exclamation fa-xl"></i>
        <span>Session Ended</span>
      </div> */}
      <div className="success">
        <i className="fa-solid fa-circle-check fa-lg"></i>
        <span>Created successfully</span>
      </div>
    </div>
  );
};

export default AlertDialog;
