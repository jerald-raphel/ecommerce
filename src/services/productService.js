import products from '../data/products';

// Function to get products from local data
export const getLocalProducts = () => {
  return products;
};

// Function to fetch products from API
export const fetchAPIProducts = async () => {
  try {
    const response = await fetch('https://ecommerce-server-orkq.onrender.com/api/products', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    
    const data = await response.json();
    return data.products || [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

// Function to combine both local and API products
export const getAllProducts = async () => {
  const localProducts = getLocalProducts();
  const apiProducts = await fetchAPIProducts();
  
  // Combine both sets of products
  // If API products have the same IDs as local products, they will override local ones
  const combinedProducts = [...localProducts];
  
  // Add API products with higher IDs to avoid conflicts
  apiProducts.forEach(apiProduct => {
    // Check if product with same ID already exists
    const existingIndex = combinedProducts.findIndex(p => p.id === apiProduct.id);
    
    if (existingIndex >= 0) {
      // Replace existing product with API version
      combinedProducts[existingIndex] = apiProduct;
    } else {
      // Add new product
      combinedProducts.push(apiProduct);
    }
  });
  
  return combinedProducts;
};

// Function to add a new product via API
export const addProduct = async (productData) => {
  try {
    const response = await fetch('https://ecommerce-server-orkq.onrender.com/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(productData)
    });
    
    if (!response.ok) {
      throw new Error('Failed to add product');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
}; 