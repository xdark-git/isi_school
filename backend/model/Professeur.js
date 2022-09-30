import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema } = mongoose;

const professeurSchema = new Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    prenom: {
      type: String,
      required: true,
    },
    photoDeProfil: {
      type: String,
      default: "defaultProfilePicture",
    },
    telephone: {
      type: String,
      required: true,
      // unique: true,
    },
    identifiantProf: {
      type: String,
      required: true,
      // unique: true,
    },
    specialite: {
      type: [String],
      required: true,
    },
    dateDeNaissance: {
      type: Date,
      required: true,
    },
    lieuDeNaissance: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      // unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
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
