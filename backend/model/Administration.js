import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema } = mongoose;

const adminSchema = new Schema(
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
    admin_id: {
      type: String,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Administration = mongoose.model("Administration", adminSchema);
Administration.createCollection();
export { Administration };
