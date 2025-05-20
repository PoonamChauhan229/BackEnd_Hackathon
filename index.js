const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const connectToDB = require("./db/connection");
const userRoutes = require("./routes/user");
const cartRoutes = require("./routes/cart");
const productRoutes = require("./routes/product");

connectToDB();

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to MovieStation");
});

app.use("/api/auth", userRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/product", productRoutes);

//server Start:
const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server Started at PORT", PORT);
});
