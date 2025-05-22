const express = require("express");
const router = express.Router();
const {
  createOrder,
  getUserOrders,
  getOrderById,
} = require("../controllers/order");
const { auth } = require("../middleware/auth");

router.post("/orders", auth, createOrder);
router.get("/orders", auth, getUserOrders);
router.get("/orders/:id", auth, getOrderById);

module.exports = router;
