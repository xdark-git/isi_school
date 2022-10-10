import React from "react";
import Navbar from "../navbar/Navbar";
import "./asset/css/style.css";
import Utilisateurs from "./children/Utilisateurs/Utilisateurs";

const Administration = () => {
  return (
    <main>
      <Navbar />
      <div className="admnistration-component">
        <div className="background-shape">
          <div className="header">
            <div className="utilisateurs focused">Utilisateurs</div>
            <div className="classes">Classes</div>
            <div className="line"></div>
          </div>
          <div className="body">
            <Utilisateurs />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Administration;
