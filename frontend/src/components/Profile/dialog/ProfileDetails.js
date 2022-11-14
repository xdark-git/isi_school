import React from "react";

const ProfileDetails = (props) => {
  const dateDeNaissaince = new Date(props?.user?.dateDeNaissance);

  return (
    <div className="content user-detail">
      <div>
        <span className="title">Nom</span>
        <span className="data">{props?.user?.nom}</span>
      </div>
      <div>
        <span className="title">Prénom</span>
        <span className="data">{props?.user?.prenom}</span>
      </div>
      <div>
        <span className="title">email</span>
        <span className="data">{props?.user?.email}</span>
      </div>
      <div>
        <span className="title">Téléphone</span>
        <span className="data">{props?.user?.telephone}</span>
      </div>
      <div>
        <span className="title">Identifiant</span>
        <span className="data">
          {props?.user?.identifiant === undefined ? "N/A" : props?.user?.identifiant}
        </span>
      </div>
      <div>
        <span className="title">Naissance</span>
        <span className="data">{`${dateDeNaissaince?.getDate()}/${
          dateDeNaissaince?.getMonth() < 9
            ? "" + dateDeNaissaince?.getMonth() + 1
            : dateDeNaissaince?.getMonth() + 1
        }/${dateDeNaissaince?.getFullYear()}`}</span>
      </div>
      <div>
        <span className="title">Lieu de naissance</span>
        <span className="data">{props?.user?.lieuDeNaissance}</span>
      </div>
    </div>
  );
};

export default ProfileDetails;
