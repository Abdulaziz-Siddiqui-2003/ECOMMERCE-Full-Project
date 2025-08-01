const mongoose = require('mongoose');
const Product = require('./models/product');
require('dotenv').config();

const sampleProducts = [
  {
    name: "Red Sneakers",
    price: 59.99,
    image: "/images/red-shoes.jpg",
    description: "Stylish red sneakers",
    category: "Footwear",
    stock: 10
  },
  {
    name: "Blue Jeans",
    price: 89.99,
    image: "/images/blue-jeans.jpg",
    description: "Comfortable jeans",
    category: "Clothing",
    stock: 15
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Product.deleteMany();
    await Product.insertMany(sampleProducts);
    console.log("Sample products inserted");
    process.exit();
  });
