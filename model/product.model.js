const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  description: String,
  price: String,
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", productSchema);
