import bcrypt from "bcrypt";
import "dotenv/config";

import { Administration } from "../model/Administration.js";
import { Professeur } from "../model/Professeur.js";
import { Etudiant } from "../model/Etudiant.js";
import { Status } from "../model/Status.js";
import generateToken from "../functions/token/generateToken.js";

let values;
let arrayOfValues;
let date = new Date();
let unix = Date.parse(date);
// let lienProfile = "User/" + unix;

export const signinAdministration = async (req, res) => {
  // const existingUser = await Administration.findOne({
  //   email: req.body.email,
  // }
  try {
    const existingUser = await Administration.findOne({
      email: req.body.email,
    })
      .where("isDeleted")
      .equals(false);

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
          status: status["nom"],
        });

        //cleaning data to send
        const data = await Administration.findById(existingUser["_id"])
          .where("isDeleted")
          .equals(false)
          .select("-__v -motDePasse -isDeleted");

        return res.status(200).json({ data: data, status, token: token });
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
  })
    .where("isDeleted")
    .equals(false);

  const existingUsernameInProfesseur = await Professeur.findOne({
    username: req.body.username,
  })
    .where("isDeleted")
    .equals(false);

  const existingTelephoneInProfesseur = await Professeur.findOne({
    telephone: req.body.telephone,
  })
    .where("isDeleted")
    .equals(false);
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
  })
    .where("isDeleted")
    .equals(false);

  const existingUsernameInEtudiant = await Etudiant.findOne({
    username: req.body.username,
  })
    .where("isDeleted")
    .equals(false);

  const existingTelephoneInEtudiant = await Etudiant.findOne({
    telephone: req.body.telephone,
  })
    .where("isDeleted")
    .equals(false);
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
  })
    .where("isDeleted")
    .equals(false);
  const existingUsernameInAdministration = await Administration.findOne({
    username: req.body.username,
  })
    .where("isDeleted")
    .equals(false);
  const existingTelephoneInAdministration = await Administration.findOne({
    telephone: req.body.telephone,
  })
    .where("isDeleted")
    .equals(false);
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
  if (!existingStatusIdInStatus || existingStatusIdInStatus?.nom != "Administrateur") {
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
        const newUser = await Administration.findById(result["_id"])
          .where("isDeleted")
          .equals(false)
          .select("-__v -motDePasse -isDeleted");

        res.status(201).json({
          message: "Created",
          data: newUser,
          status,
        });
      }
    } catch (err) {
      // console.log(err.toString());
      return res.status(500).json({ message: "Something went wrong." });
    }
  }
};

export const getAllUsers = async (req, res) => {
  try {
    //checking if the user still exist and is Admin
    const user = await Administration.findById(req?.user?.id).where("isDeleted").equals(false);
    if (!user) {
      return res.status(401).json({ message: "Accès non autorisé" });
    }

    const listAdministrateur = await Administration.find({})
      .where({ isDeleted: false })
      .select("-__v -motDePasse -isDeleted");

    const listProfesseur = await Professeur.find({})
      .where({ isDeleted: false })
      .select("-__v -motDePasse -isDeleted");

    const listEtudiant = await Etudiant.find({})
      .where({ isDeleted: false })
      .select("-__v -motDePasse -isDeleted");
    const users = [...listAdministrateur, ...listProfesseur, ...listEtudiant];
    const status = await Status.find({}).select("-__v ");

    return res.status(200).json({
      users,
      status,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Un problème est survenu" });
  }
};
