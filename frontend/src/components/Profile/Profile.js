import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import "./asset/css/style.css";
import ProfileDetails from "./dialog/ProfileDetails";
import ProfilePassword from "./dialog/ProfilePassword";

const Profile = () => {
  const [onDetails, setOnDetails] = useState({ className: "focused", status: true });
  const [onChangePassword, setOnChangePassword] = useState({ className: "", status: false });
  return (
    <main>
      <Navbar />
      <div className="profile-component">
        <div className="body">
          <div className="profile-img">
            <img src={process.env.PUBLIC_URL + "/img/user/default.jpg"} alt="" />
            <div>
              <label htmlFor="profileImage">Changer de photo</label>
              <input type="file" name="profileImage" id="profileImage" />
            </div>
          </div>
          <div className="profile-content">
            <div className="header">
              <div className="infos">
                <div className="name">Papa Ahmadou</div>
                <div className="profile">Etudiant</div>
                <div className="email">pahmadou@gmail.com</div>
              </div>
              <div className="modifier">Modifier Profile</div>
            </div>
            <div className="nav">
              <span
                className={`details ${onDetails?.className}`}
                onClick={() => {
                  setOnDetails({ className: "focused", status: true });
                  setOnChangePassword({ className: "", status: false });
                }}
              >
                Details
              </span>
              <span
                className={`motDePasse ${onChangePassword?.className}`}
                onClick={() => {
                  setOnDetails({ className: "", status: false });
                  setOnChangePassword({ className: "focused", status: true });
                }}
              >
                changer de mot de passe
              </span>
              <div></div>
            </div>
            <>
              {onDetails.status === true && <ProfileDetails />}
              {onChangePassword.status === true && <ProfilePassword />}
            </>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
