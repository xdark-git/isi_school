import React from "react";
import "../style.css";
import { useSelector } from "react-redux";

const AlertDialog = () => {
  const message = useSelector((state) => state?.stateAlertDialog?.message);
  return (
    <div className="alert">
      <div className="warning">
        <span>{message}</span>
      </div>
      {/* {typeMessage === "SUCCESS" && (
        <div className="success">
          <i className="fa-solid fa-circle-check fa-lg"></i>
          <span>Created successfully</span>
        </div>
      )} */}
    </div>
  );
};

export default AlertDialog;
