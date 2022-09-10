import "dotenv/config";
import { Classe } from "../model/Classe.js";
import { Administration } from "../model/Administration.js";
import { Status } from "../model/Status.js";
import generateUniqueLink from "../functions/generateUniqueLink.js";

export const createClasse = async (req, res) => {
  try {
    //checking if the user still exist
    const user = await Administration.findById(req?.user?.id).where("isDeleted").equals(false);
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
    const existingClasse = await Classe.findOne(req.body).where("isDeleted").equals(false);

    if (existingClasse) {
      return res.status(409).json({ message: "A classe with the same name already exist" });
    }

    //classe creation
    const lien = generateUniqueLink(req?.user?.id);
    const classe = await Classe.create({ nom: req.body.nom, lien: lien, admin_id: req.user.id });
    // cleaning the data to send
    const newClasse = await Classe.findById(classe["_id"])
      .where("isDeleted")
      .equals(false)
      .select("-__v -isDeleted");
    return res.status(200).json(newClasse);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong." });
  }
};

export const getAll = async (req, res) => {
  try {
    //checking if the user still exist
    const user = await Administration.findById(req?.user?.id).where("isDeleted").equals(false);
    if (!user) {
      return res.status(401).json({ message: "Access denied" });
    }

    const classes = await Classe.find({})
      .where("isDeleted")
      .equals(false)
      .select("-__v -isDeleted");

    return res.status(200).json(classes);
  } catch (error) {
    // console.log(error);
    return res.status(500).json({ message: "Something went wrong." });
  }
};

export const getOne = async (req, res) => {
  try {
    //checking if the user still exist
    const user = await Administration.findById(req?.user?.id).where("isDeleted").equals(false);
    if (!user) {
      return res.status(401).json({ message: "Access denied" });
    }

    const classe = await Classe.findById(req?.params?._id)
      .where("isDeleted")
      .equals(false)
      .select("-__v -isDeleted");

    if (!classe) {
      return res.status(404).json({ message: "Not found" });
    }

    return res.status(200).json(classe);
  } catch (error) {
    // return res.status(400).json({ message: "malformed request syntax." });
    return res.status(404).json({ message: "Not Found" });
  }
};
