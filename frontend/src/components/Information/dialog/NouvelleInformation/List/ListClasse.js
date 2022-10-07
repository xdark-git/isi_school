import React from "react";

const ListClasse = (props) => {
  console.log(props?.classe);
  const arr = [
    "Ceci sera remplacer par le nom de la classe",
    "Ceci sera remplacer par le nom de la classe",
    "Ceci sera remplacer par le nom de la classe",
    "Ceci sera remplacer par le nom de la classe",
  ];
  const list = arr.map((el, index) => {
    return (
      <li
        key={index}
        onClick={() => {
          props?.classe?.classe?.setClasseName(el);
          props?.classe?.classe?.setClasseId("ceci sera remplacer par l'id de classe");
          props?.classe?.open?.setOpenListClasse(false);
        }}
      >
        {el}
      </li>
    );
  });
  return <ul className="listing-classe">{list}</ul>;
};

export default ListClasse;
