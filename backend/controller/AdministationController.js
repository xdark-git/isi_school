import { Administration } from "../model/Administration.js";
import { Professeur } from "../model/Professeur.js";
import { Etudiant } from "../model/Etudiant.js";
import { Status } from "../model/Status.js";

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

export const loginAdministration = (req, res) => {};
/**
 * create a new Administration
 */
export const createAdministration = async (req, res) => {
  /*
  1. Verify if email, username, telephone doesn't in all 3 collections (Professeur, Etudiant, Administration)
  2. Verify if status id exist
  3. Add the new user
 */
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
    } else {
      // Trying to find if the status select exist and get the id
      Status.findById(req.body.statusId).exec((error, statusData) => {
        if (statusData == null)
          return res.status(406).json({ message: "Not Acceptable Status" });
        else {
          try {
            Administration.create(req.body, (creationError, creationData) => {
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
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    count++;
  }

  return array.join("");
}
