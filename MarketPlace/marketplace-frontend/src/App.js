import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductForm from "./components/ProductForm";
import ProductCard from "./components/ProductCard";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 

import Service from "./components/Service";


const App = () => {
  return (
    <Router>
      <div className="App min-h-screen bg-gray-100">
        <Main />
        <Footer /> 
      </div>
    </Router>
  );
};

const Main = () => {
  const navigate = useNavigate(); // Define navigate using useNavigate

  const {
    showForm,
    editSection,
    formDataEdit,
    formData,
    handleToggleForm,
    handleCloseForm,
    handleChange,
    handleFileChange,
    handleSubmit,
    handleEdit,
    handleUpdate,
    handleEditChange,
    handleDelete,
    filteredProducts,
    searchQuery,
    handleSearchChange,
  } = Service();

  return (
    <>
      <Navbar handleToggleForm={handleToggleForm} />
      <main className="flex flex-col items-center py-10">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {showForm && (
                  <div className="w-full max-w-2xl">
                    <ProductForm
                      formData={formData}
                      handleClose={handleCloseForm}
                      handleToggle={handleToggleForm}
                      handleChange={handleChange}
                      handleFileChange={handleFileChange}
                      handleSubmit={handleSubmit}
                    />
                  </div>
                )}

                {editSection && (
                  <div className="w-full max-w-2xl">
                    <ProductForm
                      formData={formDataEdit}
                      handleClose={handleCloseForm}
                      handleToggle={handleToggleForm}
                      handleChange={handleEditChange}
                      handleFileChange={handleFileChange}
                      handleSubmit={handleUpdate}
                    />
                  </div>
                )}
                <h1 className="text-3xl font-bold text-center mb-8">
                  Our Products
                </h1>

                {/* Search Box */}
                <div className="relative w-full max-w-md mb-6">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="absolute top-2/4 left-3 transform -translate-y-2/4 text-gray-500"
                  />
                </div>
                {filteredProducts.length === 0 ? (
                  <p className="text-center text-gray-600">
                    No products found.
                  </p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredProducts.map((product) => (
                      <ProductCard
                        key={product._id}
                        product={product}
                        onEdit={() => handleEdit(product._id)}
                        onDelete={handleDelete}
                        onViewDetails={() =>
                          navigate(`/products/${product._id}`)
                        }
                      />
                    ))}
                  </div>
                )}

                       

              </>
            }
          />

          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
