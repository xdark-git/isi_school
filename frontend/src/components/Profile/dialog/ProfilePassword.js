import React from "react";

const ProfilePassword = () => {
  return (
    <div className="content user-password">
      <div className="password">
        <label>Actuel</label>
        <input type="password" />
      </div>
      <div className="password">
        <label>Nouveau</label>
        <input type="password" />
      </div>
      <div className="password">
        <label>Confirmer</label>
        <input type="password" />
      </div>
      <button>Enregistrer</button>
    </div>
  );
};

export default ProfilePassword;
