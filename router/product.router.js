const express = require("express");
const router = express.Router();
const productModel = require("../model/product.model");
const stockModel = require("../model/stock.model");

router.get("/api/product", (req, res) => {
  async function load() {
    let list = await productModel.find();
    res.json(list);
    console.log(list);
  }
  load();
});

router.get("/api/product/:description", (req, res) => {
  let searchByDescription = async () => {
    let result = await productModel.find({
      description: { $regex: req.params.description },
    });
    // res.json(result);
    console.log(res.json(result));
  };
  searchByDescription();
});

router.post("/api/product/add", (req, res) => {
  let savedProductID = "";
  //save to product entity
  let { description, price } = req.body;
  let newProduct = new productModel({
    description: description,
    price: price,
  });
  newProduct.save().then(() => {
    savedProductID = newProduct._id;
    // save to stock entity
    let saveToStock = new stockModel({
      productID: savedProductID,
      description: description,
      quantity: "0",
    });
    saveToStock.save();
    res.send("saved new Product:: saved in stock");
  });
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
