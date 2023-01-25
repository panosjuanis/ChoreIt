const mongoose = require("mongoose");
const { Schema } = mongoose;

const personSchema = new Schema(
  {
    tag: { type: String, required: true },
    fullname: { type: String, required: true },
    mail: { type: String, required: true },
    score: { type: Number, required: true }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Person", personSchema);