import mongoose from "mongoose";

const { Schema } = mongoose;

const etudiantSchema = new Schema({
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
    unique: true,
  },
  numeroDeCarte: {
    type: String,
    required: true,
    unique: true,
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
    // default: defaultPassword,
  },
  statusId: {
    type: String,
    required: true,
  },
});

const Etudiant = mongoose.model("Etudiant", etudiantSchema);
Etudiant.createCollection();
export { Etudiant };
