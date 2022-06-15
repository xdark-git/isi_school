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

export const createAdmin = (req, res, next) => {
  Administration.find(
    { email: req.body.email, numeroDeTel: req.body.numeroDeTel },
    (error, data) => {
      console.log(data);
      if (data.email || data.numeroDeTel) {
        if (data.email && data.numeroDeTel == undefined) {
          return res.json({
            alert: "Cet adresse email existe déjà",
          });
        }
        if (data.email == undefined && data.numeroDeTel) {
          return res.json({
            alert: "Ce numéro de téléphone existe déjà",
          });
        }
        if (data.email && data.numeroDeTel) {
          return res.json({
            alert: "Ce numéro de téléphone et Cet email existent déjà",
          });
        }
      } else {
        values = req.body.nom + "" + req.body.prenom + "" + unix;
        arrayOfValues = values.split("");
        const lienProfile = "User/" + shuffle(arrayOfValues);
        console.log(lienProfile);
        /*
        Administration.create(
          {
            nom: req.body.nom,
            prenom: req.body.prenom,
            lienProfile: lienProfile,
            numeroDeTel: req.body.numeroDeTel,
            email: req.body.email,
          },
          (error, data) => {
            if (error) {
              // return res.json({
              //   error: "failed",
              // });
              console.log(error.toString());
            }
            return res.json({
              success: "Nouveau compte crée avec succès",
            });
          }
        ); */
      }
    }
  );
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
