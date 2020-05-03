const mongoose = require("mongoose");
// use Schema to create a new document schema
const Schema = mongoose.Schema;
// exercise with four fields
// also add timestamp data
const exerciseSchema = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);
// create User to export User model
const Exercise = mongoose.model("Exercise", exerciseSchema);

// export
module.exports = Exercise;
