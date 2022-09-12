import mongoose from "mongoose";

const { Schema } = mongoose;

const classeSchema = new Schema(
  {
    nom: {
      type: String,
      required: [true, "Le nom de la classe est requis"],
      minlength: [3, "La taille minimale est de 3 caractères"]
    },
    lien: {
      type: String,
      required: true,
    },
    admin_id: {
      type: String,
      required: true,
    },
    profs_id: [String],
    etudiants_id: [String],
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Classe = mongoose.model("Classe", classeSchema);
Classe.createCollection();
export { Classe };
