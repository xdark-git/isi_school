import React from "react";

const ProfileDetails = () => {
  return (
    <div className="content user-detail">
      <div>
        <span className="title">Nom</span>
        <span className="data">Fall</span>
      </div>
      <div>
        <span className="title">Prénom</span>
        <span className="data">Papa Ahmadou</span>
      </div>
      <div>
        <span className="title">email</span>
        <span className="data">user1234djfqj@gmail.com</span>
      </div>
      <div>
        <span className="title">Téléphone</span>
        <span className="data">77 000 00 00</span>
      </div>
      <div>
        <span className="title">Identifiant</span>
        <span className="data">411-22-4853/ISI</span>
      </div>
      <div>
        <span className="title">Naissance</span>
        <span className="data">01/02/2022</span>
      </div>
      <div>
        <span className="title">Lieu de naissance</span>
        <span className="data">Dakar</span>
      </div>
    </div>
  );
};

export default ProfileDetails;
