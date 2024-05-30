

import React, { useState } from 'react';
import Navbar from './navbar';

const CheckoutPage = ({ products }) => {
  const queryParams = new URLSearchParams(window.location.search);
  const productId = queryParams.get('productId');
  const quantity = queryParams.get('quantity');
  const totalPrice = queryParams.get('totalPrice');

  const product = products.find(p => p.id === parseInt(productId));

  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    mobile: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails({ ...customerDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your order has been placed');
    console.log('Order submitted:', { productId, quantity, totalPrice, customerDetails });
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container my-4">
        <h1>Checkout</h1>
        <div className="row">
          <div className="col-md-6">
            <img
              src={product.images[0]}
              className="img-fluid"
              alt={product.title}
              style={{ height: '300px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-6">
            <p>Product ID: {productId}</p>
            <p>Product: {product.title}</p>
            <p>Quantity: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={customerDetails.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="mobile"
                  name="mobile"
                  value={customerDetails.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <textarea
                  className="form-control"
                  id="address"
                  name="address"
                  value={customerDetails.address}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit Order</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
