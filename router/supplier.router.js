const express = require("express");
const router = express.Router();
const supplierModel = require("../model/supplier.model");

router.post("/api/supplier/add", (req, res) => {
  let newSupplier = new supplierModel({
    name: "Abc Company",
    address: "071 makati city",
    contactNumber: "099949494",
  });
  newSupplier.save();
  res.send("saved supplier!");
});

router.get("/api/supplier", (req, res) => {
  res.send("your in supplier page");
});

module.exports = router;
