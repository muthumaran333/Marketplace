import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: '',
        price: 0,
        description: '',
        image: ''
    });
    const [loading, setLoading] = useState(true);
    const [userRating, setUserRating] = useState(0);
    const [averageRating, setAverageRating] = useState(0);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/products/${id}`);
                setProduct(response.data.data);
                setAverageRating(response.data.data.rating || 0);
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <div className="text-center text-lg">Loading...</div>;
    if (!product) return <div className="text-center text-lg">Product not found.</div>;

    const rateProduct = async (productId, rating, userId) => {
        try {
            const response = await axios.post(`http://localhost:8000/products/${productId}/rate`, {
                rating,
                userId
            });
            const newAverageRating = response.data.averageRating;
            setAverageRating(newAverageRating);
        } catch (error) {
            console.error('Error rating product:', error);
        }
    };

    const handleRatingClick = (rating) => {
        setUserRating(rating);
        rateProduct(id, rating, "user123");
    };

    return (
        <div className="container mx-auto py-12 px-6">
            <button
                onClick={() => navigate(-1)}
className="mb-6 text-white bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg shadow-md transition duration-150"
            >
                Back
            </button>
            <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-lg overflow-hidden transform transition duration-200 hover:shadow-2xl">
                <div className="w-full md:w-1/3 p-4 border border-gray-300 rounded-lg shadow-md">
                    <img 
                        src={product.image || 'https://via.placeholder.com/400'}
                        alt={product.name}
                        className="w-full h-auto object-cover object-center rounded-lg"
                    />
                </div>
                <div className="w-full md:w-2/3 p-8 flex flex-col justify-between bg-gray-100 border-l border-gray-300">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">{product.name}</h2>
                        <p className="text-green-600 text-2xl font-semibold mb-4">
                            Rs : {product.price ? product.price.toFixed(2) : 'N/A'}
                        </p>
                        <p className="text-gray-700 text-lg mb-6 leading-relaxed">{product.description}</p>
                    </div>

                    <div>
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Rate this product</h3>
                            <div className="flex items-center mb-3">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <FontAwesomeIcon
                                        key={star}
                                        icon={userRating >= star ? solidStar : regularStar}
                                        onClick={() => handleRatingClick(star)}
                                        className={`cursor-pointer text-2xl transition-colors duration-150 ${
                                            userRating >= star ? 'text-yellow-500' : 'text-gray-300'
                                        } hover:text-yellow-500`}
                                    />
                                ))}
                            </div>
                            <p className="text-gray-600 text-sm">Your rating: {userRating} ★</p>
                            <p className="text-gray-600 text-sm">Average rating: {averageRating} ★</p>
                        </div>

                        <div className="flex space-x-4">
                            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200">
                                Add to Cart
                            </button>
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
