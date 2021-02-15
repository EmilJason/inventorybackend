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

router.put("/api/stock/new/:id", (req, res) => {
  let { quantity } = req.body;
  stockModel.findOne({ productID: req.params.id }).then((result) => {
    let qty = Number(result.quantity) + Number(quantity);
    stockModel
      .findByIdAndUpdate(result._id, { quantity: qty })
      .then(() => res.send("saved successfully"))
      .catch((e) => res.send(e.message));
  });
});

module.exports = router;
