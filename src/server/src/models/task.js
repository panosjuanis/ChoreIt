const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    task_name: { type: String, required: true },
    participant_ids: [{type:Schema.Types.ObjectId}, ref="Person"],
    freq: { type: String, required: true },
    difficulty: { type: Number, required: true }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);