import React, { useState } from "react";
import DisplayInformationRecu from "../DisplayInformation/DisplayInformationRecu";
import "./css/style.css";

const ListInformationRecu = () => {
  const [displayOne, setDisplayOne] = useState({ status: false, id: null });
  const display = { displayOne, setDisplayOne };
  const arr = [
    "true",
    "false",
    "true",
    "true",
    "false",
    "false",
    "true",
    "false",
    "true",
    "true",
    "false",
    "false",
    "false",
  ];
  const list = arr.map((el, index) => {
    return (
      <li
        key={index}
        className={`${el}`}
        onClick={() => {
          setDisplayOne({ status: true, id: `${index}` });
        }}
      >
        <span className="user">Papa Ahmadou Fall</span>
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
