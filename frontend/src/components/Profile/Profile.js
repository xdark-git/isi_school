import React, { useState } from "react";
import Cookies from "universal-cookie";
import { USER_DATA_COOKIE_NAME } from "../../constantes";
import Navbar from "../navbar/Navbar";
import "./asset/css/style.css";
import ProfileDetails from "./dialog/ProfileDetails";
import ProfilePassword from "./dialog/ProfilePassword";

const Profile = () => {
  const cookies = new Cookies();
  const user = cookies.get(USER_DATA_COOKIE_NAME);

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
                <div className="name">{`${user?.prenom}`}</div>
                <div className="profile">{`${user?.status}`}</div>
                <div className="email">{`${user?.email}`}</div>
              </div>
              {/* <div className="modifier">Modifier Profile</div> */}
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
              {onDetails.status === true && <ProfileDetails user={user} />}
              {onChangePassword.status === true && <ProfilePassword />}
            </>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
