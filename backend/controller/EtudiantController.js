import { Administration } from "../model/Administration.js";
import { Professeur } from "../model/Professeur.js";
import { Etudiant } from "../model/Etudiant.js";
import { Status } from "../model/Status.js";

export const loginEtudiant = async (req, res) => {
  /*
    1. check request format is valid
    2. find user by Email and password
    3. if user exist find statusnom byid,
        send all information
      else
        send failed message
  */
  await Etudiant.findOne({
    email: req.body.email,
    motDePasse: req.body.motDePasse,
  })
    .select("-__v -motDePasse")
    .exec((error, data) => {
      if (error)
        return res.status(500).json({ message: "Internal Server Error" });

      if (data == null)
        return res.status(406).json({ message: "Not Acceptable" });

      if (data != null) {
        Status.findById(data.statusId)
          .select("-_id nom")
          .exec((statusError, statusData) => {
            return res.status(200).json({ data, status: statusData.nom });
          });
        //
      }
    });
};
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
