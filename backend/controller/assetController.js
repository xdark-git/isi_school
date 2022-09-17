import "dotenv/config";
import { Administration } from "../model/Administration.js";
import { Professeur } from "../model/Professeur.js";
import { Etudiant } from "../model/Etudiant.js";

export const getUserProfile = async (req, res) => {
  if (req?.params?.imageName == "defaultProfilePicture")
    return res.sendFile(process.cwd() + "/asset/images/default.jpg");
  else return res.sendFile(process.cwd() + "/asset/images/" + req?.params?.imageName + ".jpg");
};
