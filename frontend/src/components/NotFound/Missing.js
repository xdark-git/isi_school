import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import Navbar from "../navbar/Navbar";
import "./asset/css/missing.css";

const Missing = () => {
  const [display, setDisplay] = useState();
  const classeStatus = useSelector((state) => state?.classe?.opened);
  const coursStatus = useSelector((state) => state?.cours?.opened);

  useEffect(() => {
    const pathName = window.location.pathname.split("/")[1];
    const param = window.location.pathname.split("/")[2];
    if (pathName === "classes" && param) {
      if (classeStatus === false) setDisplay(true);
    } else if (pathName === "cours" && param) {
      if (coursStatus === false) setDisplay(true);
    } else {
      setDisplay(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [classeStatus]);

  return (
    <main>
      <Navbar />
      {display === true ? (
        <div className="not-found">
          <div className="title">Oups !</div>
          <div className="description">La page que vous recherchez semble introuvable</div>
        </div>
      ) : (
        <Loading />
      )}
    </main>
  );
};
export default Missing;
