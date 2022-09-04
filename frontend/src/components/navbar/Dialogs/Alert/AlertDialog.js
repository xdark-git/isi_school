import React from "react";
import "../style.css";
import { useSelector } from "react-redux";

const AlertDialog = () => {
  const message = useSelector((state) => state?.stateAlertDialog?.message);
  const typeMessage = useSelector((state) => state?.stateAlertDialog?.typeMessage);
  return (
    <div className="alert">
      {typeMessage === "ERROR" && (
        <div className="warning">
          <i className="fa-sharp fa-solid fa-exclamation fa-xl"></i>
          <span>{message}</span>
        </div>
      )}
      {typeMessage === "SUCCESS" && (
        <div className="success">
          <i className="fa-solid fa-circle-check fa-lg"></i>
          <span>Created successfully</span>
        </div>
      )}
    </div>
  );
};

export default AlertDialog;
