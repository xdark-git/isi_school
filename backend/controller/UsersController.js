import { Administration } from "../model/Administration.js";
import path from "path";

const __dirname = path.resolve();

export const getCreateAdminPage = (req, res) => {
  res.sendFile(__dirname + "/views/createUser.html");
};

let values;
let arrayOfValues;
let date = new Date();
let unix = Date.parse(date);
// let lienProfile = "User/" + unix;

export const createAdmin = (req, res) => {
  let arr;
  Administration.find()
    .where(
      req.body.email + "," + req.body.username + "," + req.body.numeroDeTel
    )
    .select("email username numeroDeTel -_id")
    .exec((err, data) => {
      //cchecking if data existent before storing
      if (data.length === 3) {
        return res.json({
          alert: "Numéro, Email, Username existent déjà",
        });
      }
      if (data.length > 0 && data.length <= 2) {
        let numero = "",
          email = "",
          username = "";
        for (let i in data) {
          if (data[i].numeroDeTel == req.body.numeroDeTel) {
            for (let i in arr) {
              if (arr[i].numeroDeTel == req.body.numeroDeTel) numero = "Numero";
              if (arr[i].email == req.body.email) numero = "Email";
              if (arr[i].username == req.body.username) numero = "username";
            }
            return res.json({
              alert:
                +numero + ", " + email + ", " + Username + " existent déjà",
            });
          }
        }
      }
      // if there isn't any data found then we create the new account
      if (data.length === 0) {
        Administration.create({
          nom: req.body.nom,
          prenom: req.body.prenom,
          numeroDeTel: req.body.numeroDeTel,
          email: req.body.email,
          username: req.body.username,
        });
        return res.json({
          succes: "Compte créer avec succès",
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
