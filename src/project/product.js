import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './navbar.css';

const ProductModal = ({ show, handleClose, product }) => {
  if (!product) return null;

  const handleAddToCart = () => {
    const cartUrl = `/cart?productId=${product.id}&quantity=1`;
    window.location.href = cartUrl;
  };

  const handleBuyNow = () => {
    const buyNowUrl = `/product/${product.id}`;
    window.location.href = buyNowUrl;
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="modal-title-centered">{product.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <img
          src={product.images[0]}
          className="img-fluid mb-3"
          alt={product.title}
          style={{ height: '120px', objectFit: 'cover' }}
        />
        <h5 className="mb-2">Price: ${product.price}</h5>
        <p>{product.description}</p>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
        <Button variant="primary" onClick={handleBuyNow}>
          Buy Now
        </Button>  
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
