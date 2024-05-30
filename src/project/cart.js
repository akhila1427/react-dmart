import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './navbar';
import { Link } from 'react-router-dom';

const CartPage = ({ products }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = parseInt(queryParams.get('productId'));
  const initialQuantity = parseInt(queryParams.get('quantity')) || 1;
  const product = products.find(p => p.id === productId);

  const [quantity, setQuantity] = useState(initialQuantity);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (product) {
      const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
      if (existingItemIndex !== -1) {
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingItemIndex].quantity += quantity;
        setCartItems(updatedCartItems);
      } else {
        setCartItems(prevCartItems => [...prevCartItems, { ...product, quantity }]);
      }
    }
  }, [product, quantity]);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleDelete = () => {
    setQuantity(0);
  };

  if (!product || quantity === 0) {
    return <div>No items in the cart</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container my-4">
        <div className="row justify-content-end">
          <div className="col-md-6 text-right">
            <h1 style={{ color: 'black', marginBottom: '20px', fontSize: '28px' }}>Shopping Cart</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-5 text-center">
            <img
              src={product.images[0]}
              className="img-fluid"
              alt={product.title}
              style={{ height: '250px', objectFit: 'cover', marginBottom: '20px' }}
            />
          </div>
          <div className="col-md-5 text-center">
            <h2 style={{ color: 'black', fontSize: '24px' }}>{product.title}</h2>
            <h3 style={{ fontSize: '20px' }}>${product.price}</h3>
            <p style={{ fontSize: '16px' }}>{product.description}</p>
            <div className="quantity-selector" style={{ marginBottom: '20px' }}>
              <button onClick={handleDecrease} className="btn btn-sm btn-outline-secondary">-</button>
              <span style={{ margin: '0 10px', fontSize: '16px' }}>{quantity}</span>
              <button onClick={handleIncrease} className="btn btn-sm btn-outline-secondary">+</button>
            </div>
            <button onClick={handleDelete} className="btn btn-danger btn-sm mb-3">Delete</button>
            <p style={{ fontSize: '18px' }}>Item Price: ${(product.price * quantity).toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
