import Header from './Header';
import Navbar from './Navbar';
import Sidebar from './Sidebar.jsx';
import LaptopHeader from './LaptopHeader.jsx'
import LaptopList from './LaptopList.jsx'
import React, { useState } from 'react';
import CartComponent from './cartComponent.jsx';
import Cart from './Cart.jsx';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Link to="/cart" >Cart</Link>
      {/* <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes> */}
      <div className="header">
        <Header cartCount={cartCount} />
      </div>
      <Navbar />
      <LaptopHeader />
      <Sidebar />
      <LaptopList cartCount={cartCount} setCartCount={setCartCount} />
      <CartComponent />
    </>
  )
}

export default App;