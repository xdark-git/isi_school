import multer from "multer";
import path from "path";
import { Professeur } from "../model/Professeur.js";
import { Cours } from "../model/Cours.js";
import fs from "fs";
import "dotenv/config";
import { fileFilterContenusCours } from "../functions/multer/fileFilter/fileFilterContenusCours.js";
import { error } from "console";
import { Contenu } from "../model/Contenu.js";
import { handleContenuError } from "../functions/handleErrors/handleContenuErro.js";

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
  fileFilter: (req, file, cb) => fileFilterContenusCours(req, file, cb),
}).array("files", 10);

export const createNewCoursContenu = async (req, res) => {
  upload(req, res, async (err) => {
    if (err?.message.includes("Accès non autorisé")) {
      return res.status(401).json({ message: err?.message });
    }
    if (err?.message.includes("Cours introuvable")) {
      return res.status(404).json({ message: err?.message });
    }
    if (err?.message.includes("syntaxe de requête malformée")) {
      return res.status(400).json({ message: err?.message });
    }
    if (err?.message.includes("Un élément portant le même titre existe déjà dans le cours")) {
      return res.status(409).json({ message: err?.message });
    }
    if (err?.message.includes("Fichier non supporté")) {
      return res.status(409).json({ message: err?.message });
    }
    if (req?.files.length === 0 && !err) {
      return res.status(400).json({ message: "Un fichier est au minimum requis" });
    }

    try {
      let piece_jointe = [];
      req?.files.forEach((el) =>
        piece_jointe.push({
          filename: el?.filename,
          originalname: el?.originalname,
          mimetype: el?.mimetype,
        })
      );

      const contenu = await Contenu.create({
        titre: req?.body?.titre,
        description: req?.body?.description,
        piece_jointe: piece_jointe,
        cours_id: req?.body?.cours_id,
      });
    } catch (error) {
      console.log(error);
      req?.files.map(async (el) => {
        await fs.rm(`${process.cwd()}/asset/docs/${el?.filename}`, (err) => {
          if (!err) console.log("deleted successfully");
        });
      });
      const errors = handleContenuError(error, res);
      return res.status(400).json({ errors });
    }

    return res.status(201).json({ message: "Contenu ajouté" });
  });
};
