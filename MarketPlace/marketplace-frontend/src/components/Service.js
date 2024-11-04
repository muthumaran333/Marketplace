import { useState, useEffect } from 'react';
import axios from 'axios';

const Service = () => {
  const [showForm, setShowForm] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [editSection, setEditSection] = useState(false);
  const [formDataEdit, setFormDataEdit] = useState({
    name: '',
    description: '',
    category: '',
    price : '',
    rating: '',
    image: '',
    id: ''
  });
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    price : '',
    rating: '',
    image: '' 
  });

  const handleToggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    fetchData();
  };


  // fetch the data 
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/');
      if (response.data.success) {
        setDataList(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  
// for the initial rendering
  useEffect(() => {
    fetchData();
  }, []);


  // for post or add the product

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result; // Set Base64 string
        if (editSection) {
          setFormDataEdit({ ...formDataEdit, image: base64Image });
        } else {
          setFormData({ ...formData, image: base64Image });
        }
        handleUpload(base64Image);
      };
      reader.readAsDataURL(file); // Convert to Base64
    }
  };

  const handleUpload = (base64Image) => {
    fetch('http://localhost:8000/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image: base64Image }), // Send the base64 image
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/create', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.success) {
        alert('Product created successfully');
        handleCloseForm(); 
        setFormData({ name: '', description: '', category: '', rating: '', image: '' });
      }
    } catch (error) {
      console.error('Error creating product:', error);
      alert('Failed to create product. Please try again.');
    }
  };

  // for put or edit

  const handleEdit = (productId) => {
    const productToEdit = dataList.find((product) => product._id === productId);
    if (productToEdit) {
      setFormDataEdit({
        name: productToEdit.name,
        description: productToEdit.description,
        category: productToEdit.category,
        price: productToEdit.price,
        rating: productToEdit.rating,
        image: productToEdit.image,
        id: productToEdit._id,
      });
      setEditSection(true);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8000/update/${formDataEdit.id}`, formDataEdit, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.success) {
        alert('Product updated successfully');
        handleCloseForm(); 
        setEditSection(false);
        setFormDataEdit({
          name: '',
          description: '',
          category: '',
          price: '',
          rating: '',
          image: '',
          id: ''
        });
        await fetchData(); 
      }
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Failed to update product. Please try again.');
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setFormDataEdit({ ...formDataEdit, [name]: value });
  };

  // for delete the data

  
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/delete/${id}`);
      console.log(`Delete product with ID: ${id}`);
      
      if (response.data.success) {
        alert('Product deleted successfully!');
        fetchData();
      } else {
        alert('Failed to delete product. Please try again.');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('An error occurred while trying to delete the product.');
    }
  };




  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter dataList based on search query
  const filteredProducts = dataList.filter(product => {
    const matchesName = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDescription = product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesName || matchesDescription; 
  });


  return {
    showForm,
    dataList,
    editSection,
    formDataEdit,
    formData,
    handleToggleForm,
    handleCloseForm,
    fetchData,
    handleChange,
    handleFileChange,
    handleUpload,
    handleSubmit,
    handleEdit,
    handleUpdate,
    handleEditChange,
    handleDelete,
    handleSearchChange,
    searchQuery,
    filteredProducts
  };
};

export default Service;
