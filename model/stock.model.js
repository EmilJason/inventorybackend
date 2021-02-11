const mongoose = require("mongoose");

const Stock = new mongoose.Schema({
  productID: String,
  description: String,
  quantity: String,
  updatedBy: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Stock", Stock);
