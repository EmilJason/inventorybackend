const express = require("express");
const router = express.Router();
const productModel = require("../model/product.model");

router.get("/api/product", (req, res) => {
  res.send("Your in Product API");
});

router.post("/api/product/add", (req, res) => {
  let newProduct = new productModel({
    description: "Lucky Me beef",
    price: "10.00",
  });

  newProduct.save();
  res.send("saved new Product");
});

module.exports = router;