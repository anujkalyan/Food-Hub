const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  imgsrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  indication: {
    type: String,
  },
  dosage: {
    type: String,
  },
  sideEffects: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  countInStock: {
    type: Number,
  }
 
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
