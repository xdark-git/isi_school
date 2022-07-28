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

/**
 * we will first make sure that the email, username and telephone aren't
 * already been used and create the new user
 */
export const createAdmin = (req, res) => {
  Administration.find(
    {
      $or: [
        { email: req.body.email },
        { username: req.body.username },
        { telephone: req.body.telephone },
      ],
    },
    (reqError, data) => {
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
        Status.findById(req.body.statusId).exec((error, data) => {
          if (data.length < 0)
            return res.status(204).json({ message: "No Content" });
        });

        try {
          Administration.create(req.body).then(
            res.status(201).json({ message: "Created" })
          );
        } catch (error) {
          res.status(500).json({ message: "Internal Server Error" });
        }
      }
    }
  );
};

/*
  First check if the username, email, numeroDeTel, identifiantProf
 aren't already used
 then check if the statusId exist in statusCollection
 if all verification passed successfully then create the newProf
 */
export const createProfesseur = (req, res) => {};

/*
 First check if the username, email, numeroDeTel, numeroDeCarte
 aren't already used
 then check if the statusId exist in statusCollection
 if all verification passed successfully then create the newProf
 */

export const createEtudiant = (req, res) => {};
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
