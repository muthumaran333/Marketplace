const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.js");
const cors = require('cors')
const PORT = 8000;

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/productsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error) => {
    console.error("Connection error:", error.message);
});


// GET route to fetch all products
app.get("/", async (req, res) => {
    try {
        const data = await Product.find(); 
        res.json({ success: true, data: data });
        console.log(data); 
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ success: false, message: "Error fetching products" });
    }
});

// GET Product by id
app.get("/products/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const product = await Product.findById(id);
      
      if (!product) {
        return res
          .status(404)
          .json({ success: false, message: "Product not found" });
      }
      
      res.json({ success: true, data: product });
    } catch (error) {
      console.error("Error fetching product by id:", error);
      res
        .status(500)
        .json({ success: false, message: "Error fetching product by id" });
    }
  });
  

// POST route to create a new product
app.post("/create", async (req, res) => {
    try {
        console.log(req.body); 
        const productData = new Product(req.body); 
        await productData.save(); // Save the product to the database
        res.status(201).json({ success: true, message: "Product created successfully", data: productData });
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ success: false, message: "Error creating product" });
    }
});

app.put("/update/:id", async (req, res) => {
    try {
      const id = req.params.id;
  
      // Check if product exists
      const productExist = await Product.findOne({ _id: id });
      if (!productExist) {
        return res.status(404).json({ success: false, message: "Product not found" });
      }
  
      // Update the product with new data
      const productData = await Product.findByIdAndUpdate(id, req.body, { new: true });
  
      // Respond with success and updated product data
      res.json({ success: true, message: "Product updated successfully", data: productData });
    } catch (error) {
      console.error("Error updating product:", error); // Log the error for debugging
      res.status(500).json({ success: false, message: "Internal server error while updating the product" });
    }
  });
  




app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id; 
    console.log("Deleting product with ID:", id); 
    try {
        const data = await Product.deleteOne({ _id: id });
        
        if (data.deletedCount === 0) {
            return res.status(404).send({ success: false, message: "Product not found" });
        }

        res.send({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).send({ success: false, message: "Error deleting product" });
    }
});



// POST route to submit a rating for a product
app.post("/products/:id/rate", async (req, res) => {
  const { rating, userId } = req.body; // Extract rating and userId from the request body
  const productId = req.params.id;

  if (rating < 0 || rating > 5) {
      return res.status(400).json({ success: false, message: "Rating must be between 0 and 5" });
  }

  try {
      const product = await Product.findById(productId);

      if (!product) {
          return res.status(404).json({ success: false, message: "Product not found" });
      }

      // Add the new rating to the ratings array
      product.ratings.push({ userId, rating });
      product.ratingsCount += 1;

      // Recalculate the average rating
      const totalRating = product.ratings.reduce((acc, r) => acc + r.rating, 0);
      product.rating = (totalRating / product.ratingsCount).toFixed(2);;

      // Save the updated product
      await product.save();

      res.json({ success: true, message: "Rating submitted successfully", data: product });
  } catch (error) {
      console.error("Error submitting rating:", error);
      res.status(500).json({ success: false, message: "Error submitting rating" });
  }
});
