// // import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import { useCart } from '../context/CartContext';
// // import products from '../data/products';
// // import '../styles/Home.css';


// // const Home = () => {
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [selectedCategory, setSelectedCategory] = useState('All');
// //   const [displayedProducts, setDisplayedProducts] = useState([]);
// //   const [relatedProducts, setRelatedProducts] = useState([]);
// //   const [selectedProduct, setSelectedProduct] = useState(null);
// //   const { addToCart } = useCart();

// //   const categories = ['All', ...new Set(products.map(product => product.category))];

// //   useEffect(() => {
// //     // Show only 15 products initially
// //     const initialProducts = products.slice(0, 15);
// //     setDisplayedProducts(initialProducts);
// //   }, []);

// //   const handleSearch = (e) => {
// //     const term = e.target.value.toLowerCase();
// //     setSearchTerm(term);
// //     filterProducts(term, selectedCategory);
// //   };

// //   const handleCategoryChange = (category) => {
// //     setSelectedCategory(category);
// //     filterProducts(searchTerm, category);
// //   };

// //   const filterProducts = (term, category) => {
// //     let filtered = products;
    
// //     if (category !== 'All') {
// //       filtered = filtered.filter(product => product.category === category);
// //     }
    
// //     if (term) {
// //       filtered = filtered.filter(product => 
// //         product.name.toLowerCase().includes(term) ||
// //         product.description.toLowerCase().includes(term)
// //       );
// //     }

// //     // Limit to 15 products
// //     filtered = filtered.slice(0, 15);
// //     setDisplayedProducts(filtered);
// //   };

// //   const handleProductClick = (product) => {
// //     setSelectedProduct(product);
// //     // Find related products (same category, excluding the selected product)
// //     const related = products
// //       .filter(p => p.category === product.category && p.id !== product.id)
// //       .slice(0, 10); // Show only 10 related products
// //     setRelatedProducts(related);
// //   };

// //   const handleAddToCart = (product) => {
// //     addToCart(product);
// //     alert(`${product.name} added to cart!`);
// //   };

// //   return (
// //     <div className="home">
// //       <h1 className="page-title">Welcome to Our Store</h1>
      
// //       <div className="filters">
// //         <div className="search-bar">
// //           <input
// //             type="text"
// //             placeholder="Search products..."
// //             value={searchTerm}
// //             onChange={handleSearch}
// //           />
// //         </div>
        
// //         <div className="category-filters">
// //           {categories.map(category => (
// //             <button
// //               key={category}
// //               className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
// //               onClick={() => handleCategoryChange(category)}
// //             >
// //               {category}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       {selectedProduct ? (
// //         <div className="product-details">
// //           <div className="selected-product">
// //             <div className="product-image-container">
// //               <img 
// //                 src={selectedProduct.image} 
// //                 alt={selectedProduct.name}
// //                 style={{ width: '100%', height: '100%', objectFit: 'contain' }}
// //               />
// //             </div>
// //             <h2>{selectedProduct.name}</h2>
// //             <p className="price">${selectedProduct.price}</p>
// //             <p>{selectedProduct.description}</p>
// //             <div className="product-actions">
// //               <button className="add-to-cart-btn" onClick={() => handleAddToCart(selectedProduct)}>
// //                 Add to Cart
// //               </button>
// //               <button onClick={() => setSelectedProduct(null)}>Back to All Products</button>
// //             </div>
// //           </div>

// //           <h3>Related Products</h3>
// //           <div className="products-grid">
// //             {relatedProducts.map(product => (
// //               <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
// //                 <div className="product-image-container">
// //                   <img 
// //                     src={product.image} 
// //                     alt={product.name} 
// //                     className="product-image"
// //                     style={{ width: '100%', height: '100%', objectFit: 'contain' }}
// //                   />
// //                   <span className="product-category">{product.category}</span>
// //                 </div>
// //                 <div className="product-info">
// //                   <h3>{product.name}</h3>
// //                   <p className="price">${product.price}</p>
// //                   <p className="description">{product.description}</p>
// //                   <button className="view-details-btn">View Details</button>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       ) : (
// //         <div className="products-grid">
// //           {displayedProducts.map(product => (
// //             <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
// //               <div className="product-image-container">
// //                 <img 
// //                   src={product.image} 
// //                   alt={product.name} 
// //                   className="product-image"
// //                 />
// //                 <span className="product-category">{product.category}</span>
// //               </div>
// //               <div className="product-info">
// //                 <h3>{product.name}</h3>
// //                 <p className="price">${product.price}</p>
// //                 <p className="description">{product.description}</p>
// //                 <button className="view-details-btn">View Details</button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       )}

// //       {displayedProducts.length === 0 && (
// //         <div className="no-products">
// //           <p>No products found matching your criteria.</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Home; 





// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useCart } from '../context/CartContext';
// import products from '../data/products';
// import '../styles/Home.css';
// import NewProducts from './NewProducts'; // ✅ Import NewProducts component

// const Home = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [displayedProducts, setDisplayedProducts] = useState([]);
//   const [relatedProducts, setRelatedProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const { addToCart } = useCart();

//   const categories = ['All', ...new Set(products.map(product => product.category))];

//   useEffect(() => {
//     // Show only 15 products initially
//     const initialProducts = products.slice(0, 15);
//     setDisplayedProducts(initialProducts);
//   }, []);

//   const handleSearch = (e) => {
//     const term = e.target.value.toLowerCase();
//     setSearchTerm(term);
//     filterProducts(term, selectedCategory);
//   };

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//     filterProducts(searchTerm, category);
//   };

//   const filterProducts = (term, category) => {
//     let filtered = products;

//     if (category !== 'All') {
//       filtered = filtered.filter(product => product.category === category);
//     }

//     if (term) {
//       filtered = filtered.filter(product =>
//         product.name.toLowerCase().includes(term) ||
//         product.description.toLowerCase().includes(term)
//       );
//     }

//     // Limit to 15 products
//     filtered = filtered.slice(0, 15);
//     setDisplayedProducts(filtered);
//   };

//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//     // Find related products (same category, excluding the selected product)
//     const related = products
//       .filter(p => p.category === product.category && p.id !== product.id)
//       .slice(0, 10); // Show only 10 related products
//     setRelatedProducts(related);
//   };

//   const handleAddToCart = (product) => {
//     addToCart(product);
//     alert(`${product.name} added to cart!`);
//   };

//   return (
//     <div className="home">
//       <h1 className="page-title">Welcome to Our Store</h1>

//       {/* ✅ New Products section */}
//       <NewProducts />

//       <div className="filters">
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//         </div>

//         <div className="category-filters">
//           {categories.map(category => (
//             <button
//               key={category}
//               className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
//               onClick={() => handleCategoryChange(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       {selectedProduct ? (
//         <div className="product-details">
//           <div className="selected-product">
//             <div className="product-image-container">
//               <img 
//                 src={selectedProduct.image} 
//                 alt={selectedProduct.name}
//                 style={{ width: '100%', height: '100%', objectFit: 'contain' }}
//               />
//             </div>
//             <h2>{selectedProduct.name}</h2>
//             <p className="price">${selectedProduct.price}</p>
//             <p>{selectedProduct.description}</p>
//             <div className="product-actions">
//               <button className="add-to-cart-btn" onClick={() => handleAddToCart(selectedProduct)}>
//                 Add to Cart
//               </button>
//               <button onClick={() => setSelectedProduct(null)}>Back to All Products</button>
//             </div>
//           </div>

//           <h3>Related Products</h3>
//           <div className="products-grid">
//             {relatedProducts.map(product => (
//               <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
//                 <div className="product-image-container">
//                   <img 
//                     src={product.image} 
//                     alt={product.name} 
//                     className="product-image"
//                     style={{ width: '100%', height: '100%', objectFit: 'contain' }}
//                   />
//                   <span className="product-category">{product.category}</span>
//                 </div>
//                 <div className="product-info">
//                   <h3>{product.name}</h3>
//                   <p className="price">${product.price}</p>
//                   <p className="description">{product.description}</p>
//                   <button className="view-details-btn">View Details</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <div className="products-grid">
//           {displayedProducts.map(product => (
//             <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
//               <div className="product-image-container">
//                 <img 
//                   src={product.image} 
//                   alt={product.name} 
//                   className="product-image"
//                 />
//                 <span className="product-category">{product.category}</span>
//               </div>
//               <div className="product-info">
//                 <h3>{product.name}</h3>
//                 <p className="price">${product.price}</p>
//                 <p className="description">{product.description}</p>
//                 <button className="view-details-btn">View Details</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {displayedProducts.length === 0 && (
//         <div className="no-products">
//           <p>No products found matching your criteria.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;
