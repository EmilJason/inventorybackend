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
  let newProduct = new productModel({
    description: "Lucky Me chicken",
    price: "10.00",
  });

  newProduct.save();
  res.send("saved new Product");
});

module.exports = router;
