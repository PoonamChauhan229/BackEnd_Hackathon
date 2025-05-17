const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart");

router.get("/:userId", cartController.getCart);
router.post("/add", cartController.addToCart);
router.post("/increase", cartController.increaseQty);
router.post("/decrease", cartController.decreaseQty);
router.post("/remove", cartController.removeFromCart);

module.exports = router;
