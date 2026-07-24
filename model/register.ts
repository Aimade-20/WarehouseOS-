import mongoose, { Schema } from "mongoose";

const registerSchema = new Schema(
  {
    fullname: {
      type: String,
      required: [true, "Le nom est obligatoire"],
      minLength: [3, "Le nom doit contenir au moins 3 caractères"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "le email est obligatoire"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "le mot de passe est obligatoire"],
      minLength: [8, "Le mot de passe doit contenir au moins 8 caractères"],
    },
  },
  {
    timestamps: true,
  },
);
export default mongoose.models.User || mongoose.model("User", registerSchema);
