import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import ProductModal from './product';
import './navbar.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('API Response:', data);
        setProducts(data.products); // Update state with the products array
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!Array.isArray(products)) {
    return <div>Error: Products data is not an array.</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <br/><br/><br/>
        <div className="row">
          {products.map(product => (
            <div key={product.id} className="col-lg-4 col-md-6 mb-4">
              <div className="card product-card">
                <img
                  src={product.images[0]}
                  className="card-img-top"
                  alt={product.title}
                  style={{ height: '150px', objectFit: 'contain' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">Price: ${product.price}</p>
                  <button
  className="btn btn-primary"
  style={{ backgroundColor: 'rgb(40, 167, 69)', borderColor: 'rgb(40, 167, 69)' }}
  onClick={() => handleShowModal(product)}
>
  Buy Now
</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProductModal
        show={showModal}
        handleClose={handleCloseModal}
        product={selectedProduct}
      />
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-row row">
            <div className="col-md-4">
              <h3>Address</h3>
              <p>Saroornagar Post Office Road, Lb Nagar, Hyderabad - 500074 (Near Metro Station)</p>
            </div>
            <div className="col-md-4">
              <h3>Social Media</h3>
              <ul className="list-unstyled social-media-links">
                <li><a href="https://www.instagram.com/dmartindia/?hl=en">Instagram</a></li>
                <li><a href="https://x.com/dmartsupport?lang=en">Twitter</a></li>
                <li><a href="https://www.facebook.com/AvenueSupermarts/">Facebook</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>Contact Details</h3>
              <p>Email: dmart@gmail.com</p>
              <p>Mobile: +91456907654</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductList;
