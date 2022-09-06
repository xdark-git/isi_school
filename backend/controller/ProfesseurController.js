import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

import { Administration } from "../model/Administration.js";
import { Professeur } from "../model/Professeur.js";
import { Etudiant } from "../model/Etudiant.js";
import { Status } from "../model/Status.js";
import generateToken from "../functions/token/generateToken.js";

export const signinProfesseur = async (req, res) => {
  try {
    const existingUser = await Professeur.findOne({
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
          status: status["nom"],
        });

        // const refreshToken = await generateRefreshToken({
        //   email: existingUser["email"],
        //   id: existingUser["_id"],
        //   status: status["nom"],
        // });

        //cleaning data to send
        const data = await Professeur.findById(existingUser["_id"]).select("-__v -motDePasse");

        return res.status(200).json({ data: data, status, token: token });
      } else {
        return res.status(400).json({ message: "Invalid credential" });
      }
    }
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong." });
  }
};
/**
 * create a new Professuer
 */
export const signupProfesseur = async (req, res) => {
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
  const existingIdentifiantProfInProfesseur = await Professeur.findOne({
    identifiantProf: req.body.identifiantProf,
  });
  if (
    existingEmailInProfesseur ||
    existingUsernameInProfesseur ||
    existingTelephoneInProfesseur ||
    existingIdentifiantProfInProfesseur
  ) {
    let email = "ok";
    let username = "ok";
    let telephone = "ok";
    let identifiantProf = "ok";
    if (existingEmailInProfesseur) email = "Conflict";
    if (existingUsernameInProfesseur) username = "Conflict";
    if (existingTelephoneInProfesseur) telephone = "Conflict";
    if (existingIdentifiantProfInProfesseur) identifiantProf = "Conflict";
    return res.status(409).json({
      email: email,
      username: username,
      telephone: telephone,
      identifiantProf: identifiantProf,
    });
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
  const existingNumeroCarteInEtudiant = await Etudiant.findOne({
    numeroDeCarte: req.body.numeroDeCarte,
  });
  if (
    existingEmailInEtudiant ||
    existingUsernameInEtudiant ||
    existingTelephoneInEtudiant ||
    existingNumeroCarteInEtudiant
  ) {
    let email = "ok";
    let username = "ok";
    let telephone = "ok";
    let numeroDeCarte = "ok";
    if (existingEmailInEtudiant) email = "Conflict";
    if (existingUsernameInEtudiant) username = "Conflict";
    if (existingTelephoneInEtudiant) telephone = "Conflict";
    if (existingNumeroCarteInEtudiant) numeroDeCarte = "Confilct";
    return res.status(409).json({
      email: email,
      username: username,
      telephone: telephone,
      numeroDeCarte: numeroDeCarte,
    });
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

    const admin = await Administration.findById(req?.user?.id);
    if (!admin) {
      return res.status(401).json({ message: "Access denied" });
    }

    try {
      const result = await Professeur.create({
        nom: req.body.nom,
        prenom: req.body.prenom,
        telephone: req.body.telephone,
        identifiantProf: req.body.identifiantProf,
        specialite: req.body.specialite,
        dateDeNaissance: req.body.dateDeNaissance,
        lieuDeNaissance: req.body.lieuDeNaissance,
        username: req.body.username,
        email: req.body.email,
        motDePasse: hashedMotDePasse,
        statusId: req.body.statusId,
        admin_id: req?.user?.id,
      });
      if (result) {
        const status = existingStatusIdInStatus;

        res.status(201).json({
          message: "Created",
          data: {
            _id: result["_id"],
            nom: req.body.nom,
            prenom: req.body.prenom,
            telephone: req.body.telephone,
            identifiantProf: req.body.identifiantProf,
            specialite: req.body.specialite,
            dateDeNaissance: req.body.dateDeNaissance,
            lieuDeNaissance: req.body.lieuDeNaissance,
            username: req.body.username,
            email: req.body.email,
          },
          status,
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};
