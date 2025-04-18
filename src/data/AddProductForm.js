// import React, { useState } from 'react';
// import '../styles/AddProductForm.css';

// const AddProductForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     price: '',
//     image: '',
//     description: '',
//     category: '',
//     specifications: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Convert specifications string to an object
//     const formattedSpecs = {};
//     if (formData.specifications.trim()) {
//       formData.specifications.split(',').forEach(pair => {
//         const [key, value] = pair.split(':');
//         if (key && value) {
//           formattedSpecs[key.trim()] = value.trim();
//         }
//       });
//     }

//     const newProduct = {
//       ...formData,
//       price: parseFloat(formData.price),
//       specifications: formattedSpecs
//     };

//     try {
//       const res = await fetch('http://localhost:3000/api/products', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(newProduct)
//       });

//       if (!res.ok) {
//         const errorData = await res.json();
//         throw new Error(errorData.error || 'Failed to add product');
//       }

//       alert('✅ Product added successfully!');
//       setFormData({
//         name: '',
//         price: '',
//         image: '',
//         description: '',
//         category: '',
//         specifications: ''
//       });
//     } catch (error) {
//       console.error('Error:', error);
//       alert(`❌ Error adding product: ${error.message}`);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="add-product-form">
//       <input name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} required />
//       <input name="price" placeholder="Price" type="number" value={formData.price} onChange={handleChange} required />
//       <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
//       <input name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
//       <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
//       <input name="specifications" placeholder="Specifications (e.g. Color: Black, Size: L)" value={formData.specifications} onChange={handleChange} />
//       <button type="submit">Add Product</button>
//     </form>
//   );
// };

// export default AddProductForm;




import React, { useState } from 'react';
import '../styles/AddProductForm.css';

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: '',
    description: '',
    category: '',
    specifications: ''
  });

  // 🌐 Use env variable or fallback to localhost
  const API_BASE = process.env.REACT_APP_API_BASE || 'https://ecommerce-server-orkq.onrender.com/api/signup';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🛠️ Convert "Color: Black, Size: L" to object
    const formattedSpecs = {};
    if (formData.specifications.trim()) {
      formData.specifications.split(',').forEach(pair => {
        const [key, value] = pair.split(':');
        if (key && value) {
          formattedSpecs[key.trim()] = value.trim();
        }
      });
    }

    const newProduct = {
      ...formData,
      price: parseFloat(formData.price),
      specifications: formattedSpecs
    };

    try {
      const res = await fetch(`${API_BASE}/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct)
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to add product');
      }

      alert('✅ Product added successfully!');
      setFormData({
        name: '',
        price: '',
        image: '',
        description: '',
        category: '',
        specifications: ''
      });
    } catch (error) {
      console.error('Error:', error);
      alert(`❌ Error adding product: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-product-form">
      <input name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} required />
      <input name="price" placeholder="Price" type="number" value={formData.price} onChange={handleChange} required />
      <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
      <input name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
      <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
      <input name="specifications" placeholder="Specifications (e.g. Color: Black, Size: L)" value={formData.specifications} onChange={handleChange} />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
