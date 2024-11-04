import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product, onEdit, onDelete, onViewDetails }) => {
  // Render stars for the rating
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-4 h-4 mr-0.5 ${i < product.rating ? 'text-yellow-500' : 'text-gray-300'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    
      <div
        className="bg-white border border-gray-200 rounded-lg shadow-md transition-shadow duration-200 p-4 w-64 h-96 flex flex-col justify-between mx-auto hover:shadow-lg hover:scale-105 transform"
        aria-label={`Product card for ${product.name}`}
      >
        {/* Action Icons with Tooltips */}
        <div className="flex justify-between mb-2">
          <button
            onClick={() => onEdit(product._id)}
            className="text-gray-600 hover:text-blue-500"
            aria-label={`Edit ${product.name}`}
            title="Edit Product"
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button
            onClick={() => onDelete(product._id)}
            className="text-gray-600 hover:text-red-500"
            aria-label={`Delete ${product.name}`}
            title="Delete Product"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
{/* Product Image Container */}
<div className="w-full h-40 relative overflow-hidden rounded-md bg-gray-100">
  <img
    src={product.image || "https://via.placeholder.com/150"}
    alt={product.name}
    onError={(e) => e.target.src = "https://via.placeholder.com/150"}
    className="absolute inset-0 w-full h-full object-cover"
  />
</div>



        {/* Product Details */}
        <div className="flex flex-col justify-between flex-grow mb-2">
          <h3 className="text-base font-semibold text-gray-900 mb-1 line-clamp-1">{product.name}</h3>
          <p className="text-gray-700 text-sm mb-3 line-clamp-2" title={product.description}>
            {product.description}
          </p>

          {/* Price and Rating */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-md font-bold text-blue-600">
             Rs:  {(product.price)}
            </span>
            <div aria-label={`Rating: ${product.rating} out of 5`} className="flex items-center">
              {renderStars()}
            </div>
          </div>
        </div>

        {/* View Details Button */}
        <button 
          onClick={() => onViewDetails(product._id)} // Add onClick to navigate to details
          className="w-full bg-blue-500 text-white text-sm font-medium py-2 rounded-md hover:bg-blue-600 transition duration-150"
        >
          View Details
        </button>
      </div>
   
  );
};

export default ProductCard;
