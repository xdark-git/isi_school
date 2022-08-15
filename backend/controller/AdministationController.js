import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

import { Administration } from "../model/Administration.js";
import { Professeur } from "../model/Professeur.js";
import { Etudiant } from "../model/Etudiant.js";
import { Status } from "../model/Status.js";
import generateToken from "../functions/token/generateToken.js";
import cookieOption from "../functions/cookieOptions.js";

import path, { resolve } from "path";

const __dirname = path.resolve();

// export const getCreateAdminPage = (req, res) => {
//   res.sendFile(__dirname + "/views/createUser.html");
// };

let values;
let arrayOfValues;
let date = new Date();
let unix = Date.parse(date);
// let lienProfile = "User/" + unix;

export const signinAdministration = async (req, res) => {
  try {
    const existingUser = await Administration.findOne({
      email: req.body.email,
    });

    // console.log(hashedMotDePasse);
    if (!existingUser) {
      return res.status(400).json({ message: "Invalid credential" });
    }
    if (existingUser) {
      // console.log(existingUser);
      const isMotDePasseCorrect = await bcrypt.compare(
        req.body.motDePasse,
        existingUser["motDePasse"]
      );
      if (isMotDePasseCorrect) {
        const status = await Status.findById(existingUser.statusId).select("-_id nom");

        const token = await generateToken({
          email: existingUser["email"],
          id: existingUser["_id"],
        });

        return res
          .status(200)
          .cookie("token", token, cookieOption)
          .json({ data: existingUser, status });
      } else {
        return res.status(400).json({ message: "Invalid credential" });
      }
    }
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong." });
  }
};

export const signupAdministration = async (req, res) => {
  // verifying if email, username and telephone exist in Professeur collection
  const existingEmailInProfesseur = await Professeur.findOne({
    email: req.body.email,
  });

  const existingUsernameInProfesseur = await Professeur.findOne({
    username: req.body.username,
  });

  const existingTelephoneInProfesseur = await Professeur.findOne({
    telephone: req.body.telephone,
  });
  if (existingEmailInProfesseur || existingUsernameInProfesseur || existingTelephoneInProfesseur) {
    let email = "ok";
    let username = "ok";
    let telephone = "ok";
    if (existingEmailInProfesseur) email = "Conflict";
    if (existingUsernameInProfesseur) username = "Conflict";
    if (existingTelephoneInProfesseur) telephone = "Conflict";
    return res.status(409).json({ email: email, username: username, telephone: telephone });
  }

  // verifying if email, username and telephone exist in Etudiant collection
  const existingEmailInEtudiant = await Etudiant.findOne({
    email: req.body.email,
  });

  const existingUsernameInEtudiant = await Etudiant.findOne({
    username: req.body.username,
  });

  const existingTelephoneInEtudiant = await Etudiant.findOne({
    telephone: req.body.telephone,
  });
  if (existingEmailInEtudiant || existingUsernameInEtudiant || existingTelephoneInEtudiant) {
    let email = "ok";
    let username = "ok";
    let telephone = "ok";
    if (existingEmailInEtudiant) email = "Conflict";
    if (existingUsernameInEtudiant) username = "Conflict";
    if (existingTelephoneInEtudiant) telephone = "Conflict";
    return res.status(409).json({ email: email, username: username, telephone: telephone });
  }

  // verifying if email, username and telephone exist in Administration collection
  const existingEmailInAdministration = await Administration.findOne({
    email: req.body.email,
  });
  const existingUsernameInAdministration = await Administration.findOne({
    username: req.body.username,
  });
  const existingTelephoneInAdministration = await Administration.findOne({
    telephone: req.body.telephone,
  });
  if (
    existingEmailInAdministration ||
    existingUsernameInAdministration ||
    existingTelephoneInAdministration
  ) {
    let email = "ok";
    let username = "ok";
    let telephone = "ok";
    if (existingEmailInAdministration) email = "Conflict";
    if (existingUsernameInAdministration) username = "Conflict";
    if (existingTelephoneInAdministration) telephone = "Conflict";
    return res.status(409).json({ email: email, username: username, telephone: telephone });
  }
  // verify if the statusid exist and creating the new user
  const existingStatusIdInStatus = await Status.findById(req.body.statusId).select("-_id -__v");
  if (!existingStatusIdInStatus) {
    return res.status(406).json({ message: "Not Acceptable Status" });
  }
  if (existingStatusIdInStatus) {
    const hashedMotDePasse = await bcrypt.hash(req.body.motDePasse, 12);
    try {
      const result = await Administration.create({
        nom: req.body.nom,
        prenom: req.body.prenom,
        telephone: req.body.telephone,
        dateDeNaissance: req.body.dateDeNaissance,
        lieuDeNaissance: req.body.lieuDeNaissance,
        username: req.body.username,
        email: req.body.email,
        motDePasse: hashedMotDePasse,
        statusId: req.body.statusId,
      });
      if (result) {
        const status = existingStatusIdInStatus;

        // const token = await generateToken({
        //   email: existingUser["email"],
        //   id: existingUser["_id"],
        // });

        res.status(201).json({
          message: "Created",
          data: {
            _id: result["_id"],
            nom: req.body.nom,
            prenom: req.body.prenom,
            telephone: req.body.telephone,
            dateDeNaissance: req.body.dateDeNaissance,
            lieuDeNaissance: req.body.lieuDeNaissance,
            username: req.body.username,
            email: req.body.email,
          },
          status,
        });
      }
    } catch (err) {
      // console.log(err);
      return res.status(500).json({ message: "Something went wrong." });
    }
  }
};

/**
 * shuffle array to create a userlink
 */
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  let newArr = [];
  let count = 0;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    if (count % 2 == 0 && isNaN(array[randomIndex])) {
      //console.log(array[randomIndex] + " is not a number");
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex].toUpperCase(),
        array[currentIndex],
      ];
    } else {
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    count++;
  }

  return array.join("");
}
