import Header from './Header';
import Navbar from './Navbar';
import Sidebar from './Sidebar.jsx';
import LaptopHeader from './LaptopHeader.jsx'
import LaptopList from './LaptopList.jsx'
import React, { useState } from 'react';
import CartComponent from './cartComponent.jsx';

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <div className="header">
        <Header cartCount={cartCount} />
      </div>
      <Navbar />
      <LaptopHeader />
      <Sidebar />
      <LaptopList cartCount={cartCount} setCartCount={setCartCount} />
      <CartComponent/>
    </>
  )
}

export default App;
