const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  categoryService: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CategoryService",
  },
  photos: [
    {
      type: String, // Guardaremos la URL de la imagen en la base de datos
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now, // Valor por defecto: la fecha actual al momento de creación
  },
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
