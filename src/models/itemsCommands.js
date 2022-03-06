const mongoose = require("mongoose");

const itemsCommandsSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  wholePrice: {
    type: Number,
    required: true,
  },
  halfPrice: {
    type: Number,
    required: false,
  },
});
module.exports = mongoose.model("itemsCommands", itemsCommandsSchema)
