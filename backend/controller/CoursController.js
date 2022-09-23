import "dotenv/config";
import { Cours } from "../model/Cours.js";
import { Contenu } from "../model/Contenu.js";
import { Classe } from "../model/Classe.js";
import { Administration } from "../model/Administration.js";
import { Professeur } from "../model/Professeur.js";
import { Etudiant } from "../model/Etudiant.js";
import generateUniqueLink from "../functions/generateUniqueLink.js";
import { handleModelIdOnFindCours } from "../functions/handleErrors/handleCoursError.js";

export const createCours = async (req, res) => {
  try {
    //checking if the user still exist and is Admin
    const user = await Administration.findById(req?.user?.id).where("isDeleted").equals(false);
    if (!user) {
      return res.status(401).json({ message: "Accès non autorisé" });
    }
    //verifying if the req body has the normal format
    var keys = Object.keys(req.body);
    if (keys.length != 3 || keys[0] != "titre" || keys[1] != "prof_id" || keys[2] != "classe_id") {
      return res.status(400).json({
        message: "malformed request syntax",
      });
    }
    //verifying if there isn't any cours with the same name in that classe
    const existingCours = await Cours.findOne({ titre: req?.body?.titre })
      .where("isDeleted")
      .equals(false);
    if (existingCours) {
      return res
        .status(409)
        .json({ errors: { message: "Un Cours portant le même nom existe déjà" } });
    }
    //verifying if the class still exist
    const existingClasse = await Classe.findById(req?.body?.classe_id)
      .where("isDeleted")
      .equals(false);
    if (!existingClasse) {
      return res.status(401).json({ errors: { message: "La classe sélectionnée n'existe pas" } });
    }
    //verifying prof
    const existingProf = await Professeur.findById(req?.body?.prof_id)
      .where("isDeleted")
      .equals(false);
    if (!existingProf) {
      return res
        .status(401)
        .json({ errors: { message: "Le professeur sélectionné n'existe pas" } });
    }
    // checking if the prof is in the classe
    if (existingClasse?.profs_id.includes(req?.body?.prof_id) === false) {
      return res
        .status(401)
        .json({ errors: { message: "Le professeur n'existe pas dans la classe" } });
    }

    //cours creation
    const lien = generateUniqueLink(req?.body?.classe_id);
    const cours = await Cours.create({
      titre: req?.body?.titre,
      lien: lien,
      prof: {
        _id: existingProf?._id,
        nom: existingProf?.nom,
        prenom: existingProf?.prenom,
        email: existingProf?.email,
        photoDeprofil: existingProf?.photoDeProfil,
      },
      classe_id: req?.body?.classe_id,
      admin_id: req.user.id,
    });

    const newCours = await Cours.findById(cours["_id"])
      .where("isDeleted")
      .equals(false)
      .select("-__v -isDeleted");

    return res.status(200).json(newCours);
  } catch (error) {
    console.log(error.toString());
  }
};

export const getAll = (req, res) => {};
export const getOne = async (req, res) => {
  try {
    //checking if the user still exist
    let user;
    if (req?.user?.status == "Administrateur") {
      user = await Administration.findById(req?.user?.id).where("isDeleted").equals(false);
    }

    if (req?.user?.status == "Professeur") {
      user = await Professeur.findById(req?.user?.id).where("isDeleted").equals(false);
    }

    if (req?.user?.status == "Etudiant") {
      user = await Etudiant.findById(req?.user?.id).where("isDeleted").equals(false);
    }

    if (!user) {
      return res.status(401).json({ message: "Accès non autorisé" });
    }

    const cours = await Cours.findById(req?.params?._id)
      .where({ isDeleted: false })
      .select("-__v -isDeleted");

    if (!cours) {
      return res.status(404).json({ message: "Cours introuvable" });
    }
    // get the classe and verify if not deleted
    const classe = await Classe.findById(cours?.classe_id).where({ isDeleted: false });
    if (!classe) {
      return res.status(404).json({ message: "Classe supprimée" });
    }

    //check if classe_id exist in user
    // if it exist and is an array, check if it includes the classe id
    // if it exist but not an array, check if it's equall to classe id
    if (
      "classe_id" in user &&
      Array.isArray(user?.classe_id) &&
      !user?.classe_id.includes(classe?._id.toString())
    ) {
      return res.status(401).json({ message: "Accès non autorisé" });
    }
    if (
      "classe_id" in user &&
      !Array.isArray(user?.classe_id) &&
      user?.classe_id != classe?._id.toString()
    ) {
      return res.status(401).json({ message: "Accès non autorisé" });
    }

    // fetching all contenu of the classe
    const contenu = await Contenu.find({})
      .where({ isDeleted: false, cours_id: cours?.id })
      .select("-__v -isDeleted");

    return res.status(201).json({ cours: cours, contenus: contenu });
  } catch (error) {
    console.log(error);
    const errors = handleModelIdOnFindCours(error, res);
  }
};
