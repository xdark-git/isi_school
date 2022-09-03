import "dotenv/config";
import { Classe } from "../model/Classe.js";
import { Administration } from "../model/Administration.js";
import { Status } from "../model/Status.js";
import generateUniqueLink from "../functions/generateUniqueLink.js";

export const createClasse = async (req, res) => {
  try {
    //checking if the user still exist
    const user = await Administration.findById(req?.user?.id);
    if (!user) {
      return res.status(401).json({ message: "Access denied" });
    }

    //verifying if the req body has a nom propety
    var keys = Object.keys(req.body);
    if (keys.length != 1 || keys[0] != "nom") {
      return res.status(400).json({
        message: "malformed request syntax",
      });
    }
    //check if there isn't a classe who already had the same name
    const existingClasse = await Classe.findOne(req.body);
    console.log(existingClasse);
    if (existingClasse) {
      return res.status(409).json({ message: "A classe with the same name already exist" });
    }

    //classe creation
    const lien = generateUniqueLink(req?.user?.id);
    const classe = await Classe.create({ nom: req.body.nom, lien: lien, admin_id: req.user.id });
    return res.status(200).json(classe);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong." });
  }
};
