import mongoose from "mongoose";

const { Schema } = mongoose;

const contenuSchema = new Schema(
  {
    titre: {
      type: String,
      required: [true, "Le titre est requis"],
      minlength: [3, "La taille minimale du titre et de 3 caractères"],
      maxlength: [50, "La taille maximale du titre et de 50 caractères"],
    },
    description: {
      type: String,
      minlength: [15, "La taille minimale est de 15 caractères"],
      maxlength: [150, "la taille maximale de la description est de 150 caractères"],
    },
    piece_jointe: [
      {
        type: Map,
        filename: {
          type: String,
        },
        originalname: {
          type: String,
        },
        mimetype: {
          type: String,
        },
        size:{
          type: String
        },
        required: [true, "Au minimum, une pièce jointe est requise"],
      },
    ],
    cours_id: {
      type: String,
      required: [true, "L'identifiant du cours est requis"],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Contenu = mongoose.model("Contenu", contenuSchema);
Contenu.createCollection();
export { Contenu };
