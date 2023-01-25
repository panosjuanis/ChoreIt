const mongoose = require("mongoose");
const { Schema } = mongoose;

const homeSchema = new Schema(
  {
    name: { type: String, required: true },
    participants: [{type:Schema.Types.ObjectId}, ref="Person"],
    tasks: [{type:Schema.Types.ObjectId}, ref="Task"]

  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Home", homeSchema);