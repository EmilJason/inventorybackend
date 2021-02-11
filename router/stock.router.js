const express = require("express");
const mongoose = require("mongoose");
const stockModel = require("../model/stock.model");

const router = express.Router();

router.get("/api/stock", (req, res) => {
  try {
    async function load() {
      let loadStock = await stockModel.find();
      res.json(loadStock);
    }
    load();
  } catch (error) {
    res.send(error.message);
  }
});

router.post("/api/stock/add", (req, res) => {
  let newStock = new stockModel({
    productID: req.body.id,
    description: req.body.description,
    quantity: req.body.quantity,
  });
  newStock.save().then(() => res.send(newStock._id));
});

module.exports = router;
