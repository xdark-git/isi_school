import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema } = mongoose;

const professeurSchema = new Schema(
  {
    nom: {
      type: String,
      required: [true, "Le nom est requis"],
    },
    prenom: {
      type: String,
      required: [true, "Le prenom est requis"],
    },
    photoDeProfil: {
      type: String,
      default: "defaultProfilePicture",
    },
    telephone: {
      type: String,
      required: [true, "Le téléphone est requis"],
      // unique: true,
    },
    identifiantProf: {
      type: String,
      required: [true, "L'Identifiant est requis"],
      // unique: true,
    },
    specialite: {
      type: [String],
      // required: true,
    },
    dateDeNaissance: {
      type: Date,
      required: [true, "La date de naissaince est requise"],
    },
    lieuDeNaissance: {
      type: String,
      required: [true, "Le lieu de naissaince est requis"],
    },
    username: {
      type: String,
      required: [true, "Le username est requis"],
      // unique: true,
    },
    email: {
      type: String,
      required: [true, "L'email est requis"],
      // unique: true,
    },
    motDePasse: {
      type: String,
      required: true,
      // default: defaultPassword,
    },
    statusId: {
      type: String,
      required: true,
    },
    classe_id: [String],
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

const Professeur = mongoose.model("Professeur", professeurSchema);
Professeur.createCollection();
export { Professeur };
