const mongoose = require("mongoose");

const menuItems = new mongoose.Schema({
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
module.exports = mongoose.model("menuItems", menuItems)
