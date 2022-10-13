import React, { useRef } from "react";

const ListClasse = (props) => {
  // console.log(props?.classe);
  const arr = [
    "Ceci sera remplacer par le nom de la classe 1",
    "Ceci sera remplacer par le nom de la classe 2",
    "Ceci sera remplacer par le nom de la classe 3",
    "Ceci sera remplacer par le nom de la classe 4",
  ];
  const list = useRef();

  // console.log(props?.classe?.classe?.classeName)

  if (props?.classe?.classe?.classeName != null) {
    list.current = arr
      .filter((el) => {
        const regex = new RegExp(`^${props?.classe?.classe?.classeName}.*$`, "i");
        //   console.log(el?.match(regex));
        return el?.match(regex);
      })
      .map((el, index) => {
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
  } else {
    list.current = arr.map((el, index) => {
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
  }

  return <ul className="listing-classe">{list.current}</ul>;
};

export default ListClasse;
