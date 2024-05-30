import React, { useState, useEffect } from 'react';
import ProductList from './project/main';
import ProductPage from './project/BuyNow';
import CartPage from './project/cart';
import './App.css'; 

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const navigateTo = (route) => {
    window.location.href = route; // Redirect to the specified route
  };

  return (
    <div>
      {window.location.pathname === '/' && <ProductList products={products} />}
      {window.location.pathname.includes('/product/') && <ProductPage products={products} />}
      {window.location.pathname === '/cart' && <CartPage products={products} />}

      <div className="centered-button-container">
        <button onClick={() => navigateTo('/')} className="blue-button">Go to Home</button>
        <button onClick={() => navigateTo('/cart')} className="blue-button">Go to Cart</button>
      </div>
    </div>



  );
};

export default App;
