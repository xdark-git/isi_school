import "dotenv/config";
import { Classe } from "../model/Classe.js";

export const createClasse = (req, res) => {
  return res.json({
    message: "route is working",
  });
};
