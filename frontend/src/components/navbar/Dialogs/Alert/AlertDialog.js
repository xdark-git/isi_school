import React from "react";
import "../style.css";
import { useSelector, useDispatch } from "react-redux";
import { alertDialogOpened, closeAlertDialog } from "../../../../constantes";

const AlertDialog = () => {
  const dispatch = useDispatch();
  const isAlertDialogOpened = useSelector((state) => state?.stateAlertDialog?.status);
  if (isAlertDialogOpened === alertDialogOpened) {
    setTimeout(()=>{dispatch({ type: closeAlertDialog })}, 4000);
  }
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
