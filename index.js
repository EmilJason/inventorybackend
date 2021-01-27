const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 1995;

const app = express();
app.use(cors);

mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => console.log("Error:", error)
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("You are in Home"));
app.get("/api", (req, res) => res.send("You are in API Home"));
app.use(require("./router/product.router"));
app.use(require("./router/supplier.router"));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
