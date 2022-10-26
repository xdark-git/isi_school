import React, { useState } from "react";
import DisplayInformationRecu from "../DisplayInformation/DisplayInformationRecu";
import "./css/style.css";

const ListInformationRecu = () => {
  const [displayOne, setDisplayOne] = useState({ status: false, id: null, data: null });
  const display = { displayOne, setDisplayOne };
  const arr = [
    {
      nom: "Seck",
      prenom: "Assane",
      email: "assane@gmail.com",
      description: "Lorem Ipsum is not simply random text",
      status: "true",
    },
    {
      nom: "Seck",
      prenom: "Ngor",
      email: "ngorseck@gmail.com",
      description: "Lorem Ipsum is not simply random text",
      status: "false",
    },
    {
      nom: "Ly",
      prenom: "Abdoulaye",
      email: "	abdoulayly@gmail.com",
      description: "Lorem Ipsum is not simply random text",
      status: "false",
    },
    {
      nom: "Seck",
      prenom: "Assane",
      email: "assane@gmail.com",
      description: "Lorem Ipsum is not simply random text",
      status: "false",
    },
    {
      nom: "Seck",
      prenom: "Ngor",
      email: "ngorseck@gmail.com",
      description: "Lorem Ipsum is not simply random text",
      status: "true",
    },
    {
      nom: "Ly",
      prenom: "Abdoulaye",
      email: "	abdoulayly@gmail.com",
      description: "Lorem Ipsum is not simply random text",
      status: "true",
    },
    {
      nom: "Seck",
      prenom: "Assane",
      email: "assane@gmail.com",
      description: "Lorem Ipsum is not simply random text",
      status: "true",
    },

    {
      nom: "Seck",
      prenom: "Assane",
      email: "assane@gmail.com",
      description: "Lorem Ipsum is not simply random text",
      status: "true",
    },
    {
      nom: "Seck",
      prenom: "Assane",
      email: "assane@gmail.com",
      description: "Lorem Ipsum is not simply random text",
      status: "false",
    },
    {
      nom: "Seck",
      prenom: "Ngor",
      email: "ngorseck@gmail.com",
      description: "Lorem Ipsum is not simply random text",
      status: "true",
    },
    {
      nom: "Ly",
      prenom: "Abdoulaye",
      email: "	abdoulayly@gmail.com",
      description: "Lorem Ipsum is not simply random text",
      status: "true",
    },
    {
      nom: "Seck",
      prenom: "Assane",
      email: "assane@gmail.com",
      description: "Lorem Ipsum is not simply random text",
      status: "true",
    },

    {
      nom: "Seck",
      prenom: "Assane",
      email: "assane@gmail.com",
      description: "Lorem Ipsum is not simply random text",
      status: "true",
    },
  ];
  const list = arr.map((el, index) => {
    return (
      <li
        key={index}
        className={`${el?.status}`}
        onClick={() => {
          setDisplayOne({ status: true, id: `${index}`, data: el });
        }}
      >
        <span className="user">{`${el?.prenom} ${el?.nom}`}</span>
        <span className="obet">Lorem Ipsum is not simply random text</span>
      </li>
    );
  });
  if (displayOne.status === true) {
    return <DisplayInformationRecu display={display} />;
  } else {
    return <ul className="list-envoye-recu">{list}</ul>;
  }
};

export default ListInformationRecu;
