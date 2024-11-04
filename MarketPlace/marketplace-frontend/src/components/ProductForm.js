import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ProductForm = ({ formData = {}, handleClose, handleToggle, handleChange, handleFileChange, handleSubmit }) => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImagePreview = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
    handleFileChange(event);
  };

  return ( 
    <form
      onSubmit={(e) => {
        handleSubmit(e);
        setImagePreview(null); // Reset image preview on submit
      }}
      className="relative max-w-md mx-auto p-8 bg-white border border-gray-200 rounded-lg shadow-md space-y-6"
    >
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out"
        aria-label="Close form"
      >
        <FontAwesomeIcon icon={faTimes} size="lg" />
      </button>

      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Add New Product</h2>

      <div className="space-y-4">
        <label className="block text-gray-700">Product Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          aria-describedby="name-desc"
          className="w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <small id="name-desc" className="text-gray-500">Enter the product name.</small>

        <label className="block text-gray-700">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          aria-describedby="description-desc"
          className="w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <small id="description-desc" className="text-gray-500">Provide a brief description of the product.</small>

        <label className="block text-gray-700">Category</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          aria-describedby="category-desc"
          className="w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <small id="category-desc" className="text-gray-500">Specify the product category.</small>

        <label className="block text-gray-700">Rating (0-5)</label>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          min="0"
          max="5"
          required
          aria-describedby="rating-desc"
          className="w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <small id="rating-desc" className="text-gray-500">Rate the product from 0 to 5.</small>

        {/* Price input field */}
        <label className="block text-gray-700">Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          min="0"
          step="0.01" // Allow for cents if needed
          aria-describedby="price-desc"
          className="w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <small id="price-desc" className="text-gray-500">Enter the price of the product.</small>

        <label className="block text-gray-700">Upload Image</label>
        <input
          type="file"
          name="image"
          onChange={handleImagePreview}
          required
          aria-describedby="image-desc"
          className="w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded focus:outline-none"
        />
        <small id="image-desc" className="text-gray-500">Upload a product image.</small>

        {imagePreview && (
          <div className="mt-4">
            <img src={imagePreview} alt="Preview" className="w-full h-auto rounded-lg" />
          </div>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded shadow-sm transition duration-150 ease-in-out"
      >
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;
