import React from "react";
import "./asset/css/nocontent.css";

const NoContent = () => {
  return (
    <div className="no-content-main">
      <div className="no-content-description">
        Il n'y a pas de données disponible pour l'instant
      </div>
      <div className="no-content-image"></div>
    </div>
  );
};

export default NoContent;
