import { Professeur } from "../../../model/Professeur.js";
import { Cours } from "../../../model/Cours.js";
import { Contenu } from "../../../model/Contenu.js";
import "dotenv/config";
import { listFileType } from "../../../constants/index.js";

export const fileFilterContenusCours = async (req, file, cb) => {
  try {
    const user = await Professeur.findById(req?.user?.id).where("isDeleted").equals(false);
    if (!user) {
      cb(null, false);
      return cb(new Error("Accès non autorisé"));
    }
    const existingCours = await Cours.findById(req?.body?.cours_id).where({
      isDeleted: false,
    });
    if (!existingCours) {
      cb(null, false);
      return cb(new Error("Cours introuvable"));
    }

    if (user?._id.toString() != existingCours?.prof?.get("_id")?.toString()) {
      cb(null, false);
      return cb(new Error("Accès non autorisé"));
    }
    // validating form data
    var keys = Object.keys(req.body);

    if (
      keys.length != 3 ||
      keys[0] != "titre" ||
      keys[1] != "description" ||
      keys[2] != "cours_id"
    ) {
      cb(null, false);
      return cb(new Error("syntaxe de requête malformée"));
    }
    //verifying if in the same cours there isn't any contenu with the same title
    const existingContenu = await Contenu.findOne({ titre: req?.body?.titre }).where({
      cours_id: existingCours?._id.toString(),
      isDeleted: false,
    });
    if (existingContenu) {
      cb(null, false);
      return cb(new Error("Un élément portant le même titre existe déjà dans le cours"));
    }

    // verifying if file type is accepted

    if (!listFileType.includes(file.mimetype)) {
      cb(null, false);
      return cb(new Error("Fichier non supporté"));
    }

    cb(null, true);
  } catch (err) {
    if (err?.message.includes("Cast to ObjectId failed for value")) {
      if (err?.message.includes('for model "Cour"')) {
        cb(null, false);
        return cb(new Error("Cours introuvable"));
      }
    }
  }
};
