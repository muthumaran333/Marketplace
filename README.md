
# 📈 Marketplace Project

This project is a full-stack marketplace web application that allows users to view products, see product details, rate items, and perform CRUD operations. The application utilizes **ReactJS** for the frontend, **Express.js** for the backend, and **MongoDB** as the database.

---

## 📑 Table of Contents
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Setup Instructions](#-setup-instructions)
- [Usage](#-usage)
- [API Endpoints](#-api-endpoints)
- [Screenshots](#-project-structure)
- [Contributing](#-contributing)

---

## ✨ Features

- **📋 Product Listings:** Display a list of products with search and filter capabilities.
- **🔍 Product Details:** View detailed information and ratings for each product.
- **✏️ CRUD Operations:** Create, edit, delete, and rate products.
- **📱 Responsive Design:** User-friendly interface adaptable for both desktop and mobile.

---

## 🛠 Technologies Used

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Backend-Express-orange?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?logo=mongodb&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-indigo?logo=tailwind-css&logoColor=white)

- **Frontend:** 
  - React
  - Tailwind CSS
    
- **Backend:**
  - Node.js
  - Express

- **Database:**
  - MongoDB

---

## 🚀 Setup Instructions

### 📦 Clone the Repository
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/muthumaran333/Marketplace.git
   ```

### 📋 Prerequisites
- **Node.js:** Make sure to have Node.js installed. You can download it from [Node.js official website](https://nodejs.org/).
- **MongoDB:** You will need MongoDB installed and running. You can download it from [MongoDB official website](https://www.mongodb.com/try/download/community).

### 🌐 Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd Marketplace/marketplace-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend server:
   ```bash
   npm start
   ```

### ⚙️ Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd Marketplace/marketplace-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```

---

## 🖼️ Screenshots

### 🛍️ Marketplace Dashboard
![Marketplace Dashboard](https://github.com/muthumaran333/Marketplace/blob/main/images/Capture1.PNG)

*This is the main dashboard of the marketplace where users can browse and view all available products in a clean and user-friendly interface.*

### 📄 Product Details Page
![Product Details](https://github.com/muthumaran333/Marketplace/blob/main/images/Capture12.PNG)

*This page displays detailed information about a selected product, including images, descriptions, and user ratings.*

### 🛒 Add Product Page
![Add Product](https://github.com/muthumaran333/Marketplace/blob/main/images/Capture56.PNG)

*This is the page where sellers can add new products to the marketplace by filling in the necessary details and uploading images.*

### 🛒 Available Products
![Available Products](https://github.com/muthumaran333/Marketplace/blob/main/images/fullproducts.PNG)

*This screenshot shows the available products in the marketplace. Users can easily browse through the product listings with essential details like name and price.*

### 🔄 Update Products
![Update Products](https://github.com/muthumaran333/Marketplace/blob/main/images/update%20product.PNG)

*This page enables sellers to update their product details. Sellers can change images, descriptions, and pricing to keep listings accurate.*

### 📱 Responsive Design
![Responsive Design](https://github.com/muthumaran333/Marketplace/blob/main/images/1d.PNG)

*This screenshot highlights the responsive design of the marketplace website. The layout adjusts seamlessly to different screen sizes for optimal user experience.*

### 🗄️ Database Overview
![Database Overview](https://github.com/muthumaran333/Marketplace/blob/main/images/Capture.PNG)

*This image illustrates the database schema used in the marketplace application. It outlines the structure of product listings and user data for efficient management.*

---

## Usage

1. **View All Products 🛍️**  
   Browse through the marketplace to see a list of available products.

2. **View Product Details 📄**  
   Select a specific product to view detailed information, including descriptions and ratings.

3. **Add a Product 🛒**  
   Sellers can add new product listings to the marketplace by providing the necessary details.

4. **Rate a Product ⭐**  
   Users can submit ratings for products they have purchased or viewed to help other buyers make informed decisions.

5. **Delete a Product 🗑️**  
   Sellers have the ability to remove their product listings from the marketplace as needed.

6. **Search for Products 🔍**  
   Use the search functionality to quickly find specific products based on keywords or categories.

---

## 📡 API Endpoints

| **Method** | **Endpoint**                      | **Description**                                           |
|------------|-----------------------------------|-----------------------------------------------------------|
| GET        | `/`                               | Fetch all products from the database.                    |
| GET        | `/products/:id`                  | Retrieve a specific product by its ID.                   |
| POST       | `/create`                         | Create a new product with the data provided in the request body. |
| PUT        | `/update/:id`                    | Update an existing product identified by its ID.         |
| DELETE     | `/delete/:id`                    | Delete a product identified by its ID.                   |
| POST       | `/products/:id/rate`             | Submit a rating for a specific product identified by its ID. |

---

## 🤝 Contributing

We welcome contributions! Please follow these steps to contribute:
1. Fork the project.
2. Create a new branch (`feature/new-feature`).
3. Commit your changes.
4. Open a pull request.
