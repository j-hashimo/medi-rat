const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userToolSchema = new Schema(
  {
    link: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    imageURL: {
      type: String,
    },
    imageAlt: {
      type: String,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserToolsModel", userToolSchema);
