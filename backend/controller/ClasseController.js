import "dotenv/config";
import { Classe } from "../model/Classe.js";
import { Administration } from "../model/Administration.js";
import { Professeur } from "../model/Professeur.js";
import { Etudiant } from "../model/Etudiant.js";
import generateUniqueLink from "../functions/generateUniqueLink.js";
import { handleClasseError, handleModelIdOnFindError } from "../functions/handleError.js";
import { Cours } from "../model/Cours.js";

export const createClasse = async (req, res) => {
  try {
    //checking if the user still exist and is Admin
    const user = await Administration.findById(req?.user?.id).where("isDeleted").equals(false);
    if (!user) {
      return res.status(401).json({ message: "Accès non autorisé" });
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
      return res
        .status(409)
        .json({ errors: { message: "Une classe portant le même nom existe déjà" } });
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
    const errors = handleClasseError(error);
    return res.status(500).json({ errors });
  }
};

export const getAll = async (req, res) => {
  try {
    //checking if the user still exist
    if (req?.user?.status == "Administrateur") {
      const user = await Administration.findById(req?.user?.id).where("isDeleted").equals(false);

      if (!user) {
        return res.status(401).json({ message: "Accès non autorisé" });
      }

      const classes = await Classe.find({})
        .where("isDeleted")
        .equals(false)
        .select("-__v -isDeleted");

      return res.status(200).json(classes);
    }
    if (req?.user?.status == "Professeur") {
      const user = await Professeur.findById(req?.user?.id).where("isDeleted").equals(false);

      if (!user) {
        return res.status(401).json({ message: "Accès non autorisé" });
      }
      const classes = await Classe.find({ profs_id: { $in: [req?.user?.id] } })
        .where("isDeleted")
        .equals(false)
        .select("-__v -isDeleted");

      return res.status(200).json(classes);
    }
    if(req?.user?.status == "Etudiant")
    {
      const user = await Etudiant.findById(req?.user?.id).where("isDeleted").equals(false);

      if (!user) {
        return res.status(401).json({ message: "Accès non autorisé" });
      }
      const classes = await Classe.find({ etudiants_id: { $in: [req?.user?.id] } })
        .where("isDeleted")
        .equals(false)
        .select("-__v -isDeleted");

      return res.status(200).json(classes)
    }
    // console.log(req?.user);
  } catch (error) {
    // console.log(error);
    return res.status(500).json({ message: "Un problème est survenu" });
  }
};

export const getOne = async (req, res) => {
  try {
    //checking if the user still exist
    const user = await Administration.findById(req?.user?.id).where("isDeleted").equals(false);
    if (!user) {
      return res.status(401).json({ message: "Accès non autorisé" });
    }

    const classe = await Classe.findById(req?.params?._id)
      .where("isDeleted")
      .equals(false)
      .select("-__v -isDeleted");

    if (!classe) {
      return res.status(404).json({ message: "Introuvable" });
    }
    //fetching all cours that has a cours_id equals to classe id
    const existingCoursInThisClasse = await Cours.find({}).where({
      isDeleted: false,
      classe_id: classe["_id"],
    });

    return res.status(200).json(classe);
  } catch (error) {
    // return res.status(400).json({ message: "malformed request syntax." });
    return res.status(404).json({ message: "Introuvable" });
  }
};

export const addNewProf = async (req, res) => {
  try {
    //checking if the user still exist and is admin
    const user = await Administration.findById(req?.user?.id).where("isDeleted").equals(false);
    if (!user) {
      return res.status(401).json({ message: "Accès non autorisé" });
    }
    //verifying if the prof exist
    const existingProf = await Professeur.findById(req?.body?.prof_id)
      .where("isDeleted")
      .equals(false);
    if (!existingProf) {
      return res
        .status(401)
        .json({ errors: { message: "Le professeur sélectionné n'existe pas" } });
    }
    //verifying if the class still exist and the prof isn't already added
    const existingClasse = await Classe.findById(req?.params?._id).where("isDeleted").equals(false);
    if (!existingClasse) {
      return res.status(401).json({ errors: { message: "La classe sélectionnée n'existe pas" } });
    }
    if (existingClasse?.profs_id.includes(req?.body?.prof_id) == true) {
      return res
        .status(401)
        .json({ errors: { message: "Le professeur existe déjà dans la classe" } });
    }
    //updating the classe
    existingClasse?.profs_id.push(req?.body?.prof_id);
    const isItUpdated = await existingClasse.save();
    return res.status(200).json({ message: "Professeur ajouter avec succès" });
  } catch (errors) {
    const error = handleModelIdOnFindError(errors);

    if (error == true && errors.message.includes("Classe"))
      return res.status(401).json({ errors: { message: "La classe sélectionnée n'existe pas" } });

    if (error == true && errors.message.includes("Professeur"))
      return res
        .status(401)
        .json({ errors: { message: "Le professeur sélectionné n'existe pas" } });
  }
};

export const addNewEtudiant = async (req, res) => {
  try {
    //checking if the user still exist and is admin
    const user = await Administration.findById(req?.user?.id).where("isDeleted").equals(false);
    if (!user) {
      return res.status(401).json({ message: "Accès non autorisé" });
    }
    // verifying if the Etudiant still exist and isn't in any classe yet
    const existingEtudiant = await Etudiant.findById(req?.body?.etudiant_id)
      .where("isDeleted")
      .equals(false);
    if (!existingEtudiant) {
      return res.status(401).json({ errors: { message: "L'étudiant sélectionné n'existe pas" } });
    }

    const isEtudiantAlreadyInAClasse = await Classe.find({
      etudiants_id: { $in: [req?.body?.etudiant_id] },
    })
      .where("isDeleted")
      .equals(false)
      .select("-__v -isDeleted");
    if (isEtudiantAlreadyInAClasse.length > 0) {
      return res
        .status(401)
        .json({ errors: { message: "L'étudiant sélectionné existe déjà dans une classe" } });
    }

    //verifying if the classe that we try to add the Etudiant exist
    //updating classe
    const existingClasse = await Classe.findById(req?.params?._id).where("isDeleted").equals(false);
    if (!existingClasse) {
      return res.status(401).json({ errors: { message: "La classe sélectionnée n'existe pas" } });
    }
    existingClasse?.etudiants_id.push(req?.body?.etudiant_id);
    const isItUpdated = await existingClasse.save();
    return res.status(200).json({ message: "Etudiant ajouté avec succès" });

  } catch (error) {}
};
