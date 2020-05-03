const mongoose = require("mongoose");
// use Schema to create a new document schema
const Schema = mongoose.Schema;
// one field type string, required
// also add timestamp data
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
);
// create User to export User model
const User = mongoose.model("User", userSchema);

// export
module.exports = User;
