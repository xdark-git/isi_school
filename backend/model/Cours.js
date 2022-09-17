import mongoose from "mongoose";

const { Schema } = mongoose;
const coursSchema = new Schema(
  {
    titre: {
      type: String,
      required: [true, "Le nom du cours est requis"],
      minlength: [2, "La taille minimale est de 2 caractères"],
    },
    lien: {
      type: String,
      required: true,
    },
    prof_id: {
      type: String,
      required: [true, "L'identifiant du prof est requis"],
    },
    classe_id: {
      type: String,
      required: [true, "L'identifiant de la classe est requis"],
    },
    admin_id: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Cours = mongoose.model("Cour", coursSchema);
Cours.createCollection();
export { Cours };
