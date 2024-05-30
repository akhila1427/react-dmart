import React, { useState } from 'react';
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const ProductPage = ({ products }) => {
  const productId = window.location.pathname.split('/product/')[1];
  const product = products.find(p => p.id === parseInt(productId));
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product ? product.price : 0);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    mobile: '',
    address: ''
  });

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setTotalPrice(product.price * newQuantity);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setTotalPrice(product.price * newQuantity);
    }
  };

  const handleAddToCart = () => {
    const cartUrl = `/cart?productId=${product.id}&quantity=${quantity}`;
    window.open(cartUrl, '_blank');
  };

  const handleBuyNow = () => {
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails({ ...customerDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted:', { productId, quantity, totalPrice, customerDetails });
    setShowModal(false);
    setShowConfirmation(true);
  };

  return (
    <div>
      <Navbar />
      <div className="container my-4">
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
            <h1>{product.title}</h1>
            <h2>${totalPrice.toFixed(2)}</h2>
            <p>{product.description}</p>
            <div className="quantity-selector">
              <button onClick={handleDecrease}>-</button>
              <span>{quantity}</span>
              <button onClick={handleIncrease}>+</button>
            </div>
            <button onClick={handleBuyNow} className="btn btn-success mt-3 buy-now-button">Buy Now</button>
          </div>
        </div>
      </div>

      {/* Customer Details Modal */}
      <div className={`modal ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Enter Your Details</h5>
              <button type="button" className="close" onClick={() => setShowModal(false)}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
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

      {/* Order Confirmation Modal */}
      <div className={`modal ${showConfirmation ? 'show' : ''}`} style={{ display: showConfirmation ? 'block' : 'none' }} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Order Confirmation</h5>
              <button type="button" className="close" onClick={() => setShowConfirmation(false)}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Your order has been placed and will be delivered in 7 working days.</p>
              <button type="button" className="btn btn-primary" onClick={() => setShowConfirmation(false)}>OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
