import mongoose from "mongoose";

const { Schema } = mongoose;

const statusSchma = new Schema({
  nom: {
    type: String,
    required: true,
    unique: true,
  },
});

const Status = mongoose.model("Status", statusSchma);
Status.createCollection();
export { Status };
