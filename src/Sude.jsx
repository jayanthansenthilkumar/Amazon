import React from 'react';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import LaptopHeader from './components/LaptopHeader.jsx';
import Sidebar from './components/Sidebar.jsx';
import './Sude.css';

const Sude = () => {
    return (
        <>
            <div className="header">
                <Header />
            </div>
            <Navbar />
            <LaptopHeader />
            <div className="main-content">
                <Sidebar />
                <div className="content-area">
                    <div className="container">
                        <h2 className="section-heading">Results</h2>
                        <p className='section-subheading'>Check each product page for other buying options.</p>
                        <div className="product-grid">
                            {/* Product Card */}
                            <div className="product-card">
                                <img src="/products/shoe.jpg" alt="Product" className="product-image" />
                                <h3 className="product-title">Nike Running Shoes</h3>
                                <p className="product-price">₹2,499</p>
                                <button className="add-to-cart-btn">Add to Cart</button>
                            </div>

                            <div className="product-card">
                                <img src="/products/headphone.jpg" alt="Product" className="product-image" />
                                <h3 className="product-title">Boat Headphones</h3>
                                <p className="product-price">₹1,299</p>
                                <button className="add-to-cart-btn">Add to Cart</button>
                            </div>

                            <div className="product-card">
                                <img src="/products/laptop.jpg" alt="Product" className="product-image" />
                                <h3 className="product-title">HP Pavilion 15</h3>
                                <p className="product-price">₹56,990</p>
                                <button className="add-to-cart-btn">Add to Cart</button>
                            </div>

                            {/* Add more cards as needed */}
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};
export default Sude;