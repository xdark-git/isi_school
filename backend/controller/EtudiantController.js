import { Administration } from "../model/Administration.js";
import { Professeur } from "../model/Professeur.js";
import { Etudiant } from "../model/Etudiant.js";
import { Status } from "../model/Status.js";

export const loginEtudiant = (req, res) => {};
/**
 * create a new Etudiant
 */
export const createEtudiant = async (req, res) => {
  /*
  1. Verify if email, username, telephone, numeroDeCarte doesn't in all 3 collections (Professeur, Etudiant, Administration)
  2. Verify if status id exist
  3. Add the new user
 */
  await Administration.find({
    $or: [
      { email: req.body.email },
      { username: req.body.username },
      { telephone: req.body.telephone },
    ],
  }).exec((reqError, data) => {
    let email = "Ok";
    let username = "Ok";
    let telephone = "Ok";
    if (data.length > 0) {
      for (let i in data) {
        if (data[i].email == req.body.email) email = "Conflict";
        if (data[i].username == req.body.username) username = "Conflict";
        if (data[i].telephone == req.body.telephone) telephone = "Conflict";
      }
      return res.status(409).json({
        email: email,
        username: username,
        telephone: telephone,
      });
    }
  });

  await Professeur.find({
    $or: [
      { email: req.body.email },
      { username: req.body.username },
      { telephone: req.body.telephone },
    ],
  }).exec((reqError, data) => {
    let email = "Ok";
    let username = "Ok";
    let telephone = "Ok";
    if (data.length > 0) {
      for (let i in data) {
        if (data[i].email == req.body.email) email = "Conflict";
        if (data[i].username == req.body.username) username = "Conflict";
        if (data[i].telephone == req.body.telephone) telephone = "Conflict";
      }
      return res.status(409).json({
        email: email,
        username: username,
        telephone: telephone,
      });
    }
  });

  await Etudiant.find({
    $or: [
      { email: req.body.email },
      { username: req.body.username },
      { telephone: req.body.telephone },
      { numeroDeCarte: req.body.numeroDeCarte },
    ],
  }).exec((reqError, data) => {
    let email = "Ok";
    let username = "Ok";
    let telephone = "Ok";
    let numeroDeCarte = "ok";
    if (data.length > 0) {
      for (let i in data) {
        if (data[i].email == req.body.email) email = "Conflict";
        if (data[i].username == req.body.username) username = "Conflict";
        if (data[i].telephone == req.body.telephone) telephone = "Conflict";
        if (data[i].numeroDeCarte == req.body.numeroDeCarte)
          numeroDeCarte = "Conflict";
      }
      return res.status(409).json({
        email: email,
        username: username,
        telephone: telephone,
        numeroDeCate: numeroDeCarte,
      });
    } else {
      // Trying to find if the status select exist and get the id
      Status.findById(req.body.statusId).exec((error, statusData) => {
        if (statusData == null)
          return res.status(406).json({ message: "Not Acceptable Status" });
        else {
          try {
            Etudiant.create(req.body, (creationError, creationData) => {
              if (creationError != null) {
                return res
                  .status(406)
                  .json({ message: creationError.toString() });
              }
              res.status(201).json({ message: "Created" });
            });
          } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
          }
        }
      });
    }
  });
};
