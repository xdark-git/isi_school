import multer from "multer";
import path from "path";
import { Professeur } from "../model/Professeur.js";
import { Cours } from "../model/Cours.js";
import "dotenv/config";

export const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    cb(null, `${process.cwd()}/asset/docs`);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
const upload = multer({
  storage: storage,
  fileFilter: async (req, file, cb) => {
    const user = await Professeur.findById(req?.user?.id).where("isDeleted").equals(false);
    if (!user) {
      cb(null, false);
      return cb(new Error("Accès non autorisé"));
    }
    const existingCours = await Cours.findById(req?.body?.cours_id).where({
      isDeleted: false,
      //"prof._id": user?._id?.toString(),
    });
    if (!existingCours) {
      cb(null, false);
      return cb(new Error("Cours introuvable"));
    }

    if (user?._id.toString() != existingCours?.prof?.get("_id")?.toString()) {
      console.log(user?._id.toString(), existingCours?.prof);
      cb(null, false);
      return cb(new Error("Accès non autorisé"));
    }
    cb(null, false);
  },
}).array("files");

export const createNewCoursContenu = async (req, res) => {
  upload(req, res, (err) => {
    if (err) console.log(err);
  });
  // verifying if the user is prof and still exist

  //   const user = await Professeur.findById(req?.user?.id).where("isDeleted").equals(false);
  //   if (!user) {
  //     return res.status(401).json({ message: "Accès non autorisé" });
  //   }
  //   // verify if the cours exist and user is owner
  //   const existingCours = await Cours.findById(req?.body?.cours_id).where({
  //     isDeleted: false,
  //   });
  //   console.log(req.body);
  //   if (!existingCours) {
  //     return res.status(404).json({
  //       message: "Le cours sélectionné n'existe pas",
  //     });
  //   }
  //   if (existingCours?.prof?._id != user?._id) {
  //     return res
  //       .status(401)
  //       .json({ message: "Vous n'avez pas les droits nécessaire pour ajouter dans ce cours" });
  //   }

  return res.json({
    message: "succes",
  });
};

//  const existingCours = await Cours.findById(req?.body?.cours_id).where({
//    isDeleted: false,
//  });
//  console.log(existingCours._id.toString());
// cb(null, `${process.cwd()}/asset/docs`);
