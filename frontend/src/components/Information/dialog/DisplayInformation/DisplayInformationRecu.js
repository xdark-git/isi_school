import React from "react";
import "./css/style.css";

const DisplayInformationRecu = (props) => {
  // console.log(props?.display?.displayOne);
  return (
    <div className="display-information">
      <div
        className="retour"
        onClick={() => {
          props?.display?.setDisplayOne({ status: false, id: null });
        }}
      >
        <i className="fa-solid fa-arrow-left fa-lg"></i>
        <span>Retour</span>
      </div>
      <div className="objet">{props?.display?.displayOne?.data?.description}</div>
      <div className="contenu">
        <img src={process.env.PUBLIC_URL + "/img/user/default.jpg"} alt="" />
        <div className="information-header">
          <span className="name">{`${props?.display?.displayOne?.data?.prenom} ${props?.display?.displayOne?.data?.nom}`}</span>
          <span className="email">{`${props?.display?.displayOne?.data?.email}`}</span>
          <div className="to">A {`antalo@gmail.com`}</div>
        </div>
        <div className="information-body">
          <div className="text">
            On the other hand, we denounce with righteous indignation and dislike men who are so
            beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire,
            that they cannot foresee the pain and trouble that are bound to ensue; and equal blame
            belongs to those who fail in their duty through weakness of will, which is the same as
            saying through shrinking from toil and pain. These cases are perfectly simple and easy
            to distinguish. In a free hour, when our power of choice is untrammelled and when
            nothing prevents our being able to do what we like best, every pleasure is to be
            welcomed and every pain avoided. But in certain circumstances and owing to the claims of
            duty or the obligations of business it will frequently occur that pleasures have to be
            repudiated and annoyances accepted. The wise man therefore always holds in these matters
            to this principle of selection: he rejects pleasures to secure other greater pleasures,
            or else he endures pains to avoid worse pains.
          </div>
          <div className="border"></div>
          <div className="files">
            <div>
              <img src={process.env.PUBLIC_URL + "/img/pdf.png"} alt="" />
              <span>rapport1.pdf</span>
              <i className="fa-solid fa-download"></i>
            </div> <div>
              <img src={process.env.PUBLIC_URL + "/img/pdf.png"} alt="" />
              <span>rapport2.pdf</span>
              <i className="fa-solid fa-download"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayInformationRecu;
