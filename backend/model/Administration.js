import mongoose from "mongoose";
import bcrypt from "bcrypt";

const defaultPassword = bcrypt.hashSync("passer1234", 12);
const { Schema } = mongoose;

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
  numeroDeTel: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
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

const Administration = mongoose.model("Administration", adminSchema);
Administration.createCollection();
export { Administration };
