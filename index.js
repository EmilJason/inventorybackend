const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 1995;

const app = express();

mongoose.connect(
  "mongodb+srv://emilJason:3m1lj450n@inventorycluster.ff5tz.mongodb.net/inventorydata?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => console.log("Error:", error)
);

app.get("/", (req, res) => res.send("You are in Home"));
app.get("/api", (req, res) => res.send("You are in API Home"));
app.use(require("./router/product.router"));
app.use(require("./router/supplier.router"));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
