import React, { useState } from "react";
import "./css/style.css";
import DisplayInformationEnvoye from "../DisplayInformation/DisplayInformationEnvoye";

const ListInformationEnvoye = (props) => {
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
        className="true"
        onClick={() => {
          setDisplayOne({ status: true, id: `${index}` });
        }}
      >
        <span className="user">Mouhamadou Fallou Konteye</span>
        <span className="obet">Lorem Ipsum is not simply random text</span>
      </li>
    );
  });
  if (displayOne.status === true) {
    return <DisplayInformationEnvoye display={display} />;
  } else {
    return <ul className="list-envoye-recu">{list}</ul>;
  }
};

export default ListInformationEnvoye;
