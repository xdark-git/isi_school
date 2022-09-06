import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import "./style.css";

const Missing = () => {
  const [display, setDisplay] = useState();
  useEffect(() => {
    setTimeout(() => {
      setDisplay(true);
    }, 500);
  }, []);
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
