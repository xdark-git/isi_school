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

export const updateClasseName = async (req, res) => {
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
    //check if there isn't a classe who already has the new nom
    const existingClasse = await Classe.findOne(req.body).where("isDeleted").equals(false);

    if (existingClasse) {
      return res
        .status(409)
        .json({ errors: { message: "Une classe portant le même nom existe déjà" } });
    }
    // checking if the classe exist and updating it
    const updateNomClasse = await Classe.findByIdAndUpdate(req?.params?._id, req?.body, {
      runValidators: true,
    })
      .where("isDeleted")
      .equals(false);
    if (updateNomClasse) return res.status(200).json({ message: "Modification effectuée" });
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
    if (req?.user?.status == "Etudiant") {
      const user = await Etudiant.findById(req?.user?.id).where("isDeleted").equals(false);

      if (!user) {
        return res.status(401).json({ message: "Accès non autorisé" });
      }
      const classes = await Classe.find({ etudiants_id: { $in: [req?.user?.id] } })
        .where("isDeleted")
        .equals(false)
        .select("-__v -isDeleted");

      return res.status(200).json(classes);
    }
  } catch (error) {
    // console.log(error);
    return res.status(500).json({ message: "Un problème est survenu" });
  }
};

export const getOne = async (req, res) => {
  try {
    //checking if the user still exist
    let user;
    if (req?.user?.status == "Administrateur")
      user = await Administration.findById(req?.user?.id).where("isDeleted").equals(false);

    if (req?.user?.status == "Professeur")
      user = await Professeur.findById(req?.user?.id).where("isDeleted").equals(false);

    if (req?.user?.status == "Etudiant")
      user = await Etudiant.findById(req?.user?.id).where("isDeleted").equals(false);

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
    //fetching all etudiants and professeurs that is in the classe
    const existingEtudiantsInThisClasse = await Etudiant.find({})
      .where({
        isDeleted: false,
        classe_id: classe["_id"],
      })
      .select("_id nom prenom photoDeProfil username email");
    const existingProfsInThisClasse = await Professeur.find({
      classe_id: { $in: [classe["_id"]] },
    })
      .where({ isDeleted: false })
      .select("_id nom prenom photoDeProfil username email");
    //fetching all cours that has a classe_id equals to classe id
    const existingCoursInThisClasse = await Cours.find({})
      .where({
        isDeleted: false,
        classe_id: classe["_id"],
      })
      .select("-__v -isDeleted");

    return res.status(200).json({
      classe,
      cours: existingCoursInThisClasse,
      professeurs: existingProfsInThisClasse,
      etudiants: existingEtudiantsInThisClasse,
    });
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
    //adding the classe id professeur classe_id
    existingProf?.classe_id.push(req?.params?._id);
    await existingProf.save();

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
    const updateEtudiantClasseId = await Etudiant.findByIdAndUpdate(existingEtudiant["_id"], {
      classe_id: req?.params?._id,
    });

    return res.status(200).json({ message: "Etudiant ajouté avec succès" });
  } catch (error) {
    console.log(error);
  }
};

export const deleteClasse = async (req, res) => {
  //checking if the user still exist and is admin
  try {
    const user = await Administration.findById(req?.user?.id).where("isDeleted").equals(false);
    if (!user) {
      return res.status(401).json({ message: "Accès non autorisé" });
    }

    const classe = await Classe.findById(req?.params?._id)
      .where("isDeleted")
      .equals(false)
      .select("-__v");

    if (!classe) {
      return res.status(404).json({ message: "Classe introuvable" });
    }
    //fetch all etudiant in the classe and change classe id to null
    const existingEtudiantsInTheClasse = await Etudiant.updateMany(
      { classe_id: req?.params?._id },
      { classe_id: null }
    );
    //fetch all prof in the classe and delete current classe id in the array
    const existingProfsInTheClasse = await Professeur.updateMany(
      {
        classe_id: { $in: [req?.params?._id] },
      },
      {
        $pullAll: {
          classe_id: [req?.params?._id],
        },
      }
    );
    //fetch all cours and change isDeleted to true
    const existingCoursInTheClasse = await Cours.updateMany(
      {
        classe_id: req?.params?._id,
      },
      {
        isDeleted: true,
      }
    );
    //deleting the classe
    classe["isDeleted"] = true;
    const isDeletionSuccess = await classe.save();

    if (isDeletionSuccess["isDeleted"] == true)
      return res.status(200).json({ message: "Classe supprimée" });
    else return res.status(500).json({ message: "Problème survenu lors la suppression" });
  } catch (error) {
    if (handleModelIdOnFindError(error) == true) {
      return res.status(404).json({ message: "Classe introuvable" });
    } else {
      return res.status(500).json({ message: "Une erreur est survenue" });
    }
  }
};
