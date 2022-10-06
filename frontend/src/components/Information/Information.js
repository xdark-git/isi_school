import React from "react";
import Navbar from "../navbar/Navbar";
import "./asset/css/style.css";
import DisplayInformation from "./dialog/DisplayInformation/DisplayInformation";
import ListInformation from "./dialog/ListInformation/ListInformation";

const Information = () => {
  return (
    <main>
      <Navbar />
      <div className="information-component">
        <div className="search">
          <i className="fa-light fa-sliders"></i>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input name="research" type="text" className="research" />
        </div>
        <div className="body">
          <div className="information-nav">
            <div className="btn-nouvelle">
              <i className="fa-thin fa-pen"></i>
              <span>Nouvelle information</span>
            </div>
            <div className="list-option">
              <div className="boite-reception focused">
                <i class="fa-solid fa-inbox"></i>
                <span>Boîte de reception</span>
              </div>
              <div className="envoye">
                <i class="fa-regular fa-paper-plane"></i>
                <span>Envoyés</span>
              </div>
            </div>
          </div>
          <div className="information-content">
            {/* <ListInformation /> */}
            <DisplayInformation />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Information;
