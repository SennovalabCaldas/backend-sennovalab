// clientModel.js
const mongoose = require("mongoose");

const certificationSchema = new mongoose.Schema({
  certificationName: {
    type: String,
    required: true,
  },
  entity: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  joinDate: {
    type: Date,
    default: Date.now,
  },
});

const Certification = mongoose.model("Certification", certificationSchema);

module.exports = Certification;
