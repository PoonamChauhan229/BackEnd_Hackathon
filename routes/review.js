const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");
const { auth } = require("../middleware/auth");

router.post("/", auth, reviewController.createReview);
router.get("/:productId", reviewController.getProductReviews);
router.put("/:reviewId", auth, reviewController.updateReview);
router.delete("/:reviewId", auth, reviewController.deleteReview);
router.get("/user", auth, reviewController.getUserReviews);

module.exports = router;
