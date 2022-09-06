import React from "react";
import Navbar from "../navbar/Navbar";
import "./style.css";

const Missing = () => {
  return (
    <main>
      <Navbar />
      <div className="not-found">
        <div className="title">Oups !</div>
        <div className="description">La page que vous recherchez semble introuvable</div>
      </div>
    </main>
  );
};
export default Missing;
