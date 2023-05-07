import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  nombresUsuarios: {
    type: String,
    require: true,
    trim: true
  },

  celularUsuarios: {
    type: Number,
    require: true,
    trim: true
  },
},{
  timestamps: true

})

const Usuario = mongoose.model("Usuario", userSchema);
export default Usuario;