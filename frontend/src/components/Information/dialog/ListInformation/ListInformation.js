import React from "react";
import "./css/style.css"

const ListInformation = () => {
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
      <li className={`${el}`}>
        <span className="user">Mouhamadou Fallou Konteye</span>
        <span className="obet">Lorem Ipsum is not simply random text</span>
      </li>
    );
  });
  return <ul>{list}</ul>;
};

export default ListInformation;
