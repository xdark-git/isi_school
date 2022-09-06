import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./style.css";

const Missing = () => {
  const location = useLocation();
  const [display, setDisplay] = useState();
  const classeStatus = useSelector((state) => state?.classe?.opened);

  useEffect(() => {
    const pathName = window.location.pathname.split("/")[1];
    const param = window.location.pathname.split("/")[2];
    console.log(param)
    if (pathName === "classes" && param) {
      if (classeStatus === false) setDisplay(true);
    }
    
    if(pathName !== "classes"){
      setDisplay(true)
    }
    console.log(classeStatus)
    // console.log();
  }, [classeStatus]);
 
  return (
    <main>
      <Navbar />
      {display === true && (
        <div className="not-found">
          <div className="title">Oups !</div>
          <div className="description">La page que vous recherchez semble introuvable</div>
        </div>
      )}
    </main>
  );
};
export default Missing;
