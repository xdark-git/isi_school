import { Administration } from "../model/users.js";
import path from "path";

const __dirname = path.resolve();

let date = new Date();
let unix = Date.parse(date);
let lienProfile = "User/" + unix;

export const getCreateAdminPage = (req, res) => {
  res.sendFile(__dirname + "/views/createUser.html");
};

export const createAdmin = (req, res, next) => {
  Administration.find(
    { email: req.body.email, numeroDeTel: req.body.numeroDeTel },
    (error, data) => {
      console.log(req.body);
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
              return res.json({
                error: "failed",
              });
            }
            return res.json({
              success: "Nouveau compte crée avec succès",
            });
          }
        );
      }
    }
  );
};
