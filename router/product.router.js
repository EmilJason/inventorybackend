const express = require("express");
const router = express.Router();
const productModel = require("../model/product.model");

router.get("/api/product", (req, res) => {
  async function load() {
    let list = await productModel.find();
    res.json(list);
    console.log(list);
  }
  load();
});

router.post("/api/product/add", (req, res) => {
  let { description, price } = req.body;
  let newProduct = new productModel({
    description: description,
    price: price,
  });

  newProduct.save();
  res.send("saved new Product");
});

router.put("/api/product/:id/edit", (req, res) => {
  // res.send(req.params.id);
  async function search(idquery, values) {
    let id = await productModel.findByIdAndUpdate(idquery, values);
    res.send(id);
  }
  let editValues = {
    description: req.body.description,
  };
  search(req.params.id, editValues);
});

module.exports = router;
