import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const defaultPassword = bcrypt.hashSync("passer1234", 12);

const adminSchema = new Schema({
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
  lienProfile: {
    type: String,
    required: true,
    unique: true,
  },
  numeroDeTel: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  motDePasse: {
    type: String,
    required: true,
    default: defaultPassword,
  },
});


export const Administration = mongoose
  .model("Administration", adminSchema)
  .createCollection();

