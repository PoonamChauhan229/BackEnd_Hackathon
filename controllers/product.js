const Product = require("../model/product");

const getAllProducts = async (req, res) => {
  try {
    const { page = 1 } = req.query;
    const limit = 12;
    const skip = (page - 1) * limit;

    const total = await Product.countDocuments();
    const products = await Product.find().skip(skip).limit(limit);

    res.status(200).json({
      total,
      page: Number(page),
      limit,
      totalPages: Math.ceil(total / limit),
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to fetch products", error });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch product", error });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};
