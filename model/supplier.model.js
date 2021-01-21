const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
  name: String,
  address: String,
  contactNumber: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Supplier", supplierSchema);
