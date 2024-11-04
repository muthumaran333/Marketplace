const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String, 
    trim: true,
    maxlength: [100, 'Product name cannot exceed 100 characters']
  },
  description: {
    type: String,
    maxlength: [500, 'Product description cannot exceed 500 characters']
  },
  category: {
     type: String,
      trim: true,
        maxlength: [500, 'Category name cannot exceed 50 characters']
   },
   price: { 
    type: Number,
    trim: true,
    maxlength: [50, 'Price cannot exceed 50 characters'],
  },

  image: {
    type: String,
  },
  rating: {
    type: Number,
    default: 0,
    min: [0, 'Rating cannot be below 0'],
    max: [5, 'Rating cannot exceed 5']
  },
  ratingsCount: {
    type: Number,
    default: 0,
    min: [0, 'Ratings count cannot be negative']
  },
  ratings: [{ 
    userId: { type: String, required: true }, 
    rating: { type: Number, required: true, min: 0, max: 5 }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

ProductSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Product', ProductSchema);




















// const mongoose = require('mongoose');

// const ProductSchema = new mongoose.Schema({
//   name: {
//     type: String, 
//     required: [true, 'Product name is required'],
//     trim: true,
//     maxlength: [100, 'Product name cannot exceed 100 characters']
//   },
//   description: {
//     type: String,
//     required: [true, 'Product description is required'],
//     maxlength: [500, 'Product description cannot exceed 500 characters']
//   },
//   image: {
//     type: String,
//     required: [true, 'Product image URL is required']
//   },
//   rating: {
//     type: Number,
//     default: 0,
//     min: [0, 'Rating cannot be below 0'],
//     max: [5, 'Rating cannot exceed 5']
//   },
//   category: {
//     type: String,
//     required: [true, 'Product category is required'],
//     trim: true,
//     maxlength: [50, 'Category name cannot exceed 50 characters']
//   },
//   ratingsCount: {
//     type: Number,
//     default: 0,
//     min: [0, 'Ratings count cannot be negative']
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// ProductSchema.pre('save', function (next) {
//   this.updatedAt = Date.now();
//   next();
// });

// module.exports = mongoose.model('Product', ProductSchema);
