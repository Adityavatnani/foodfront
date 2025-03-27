import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import ScrollButton from './components/Scroll/ScrollButton.jsx';
//import LiveTracking from "./components/LiveTracking";


const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    
      {/* Login Popup */}
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}

      <div className="app">
        {/* Navbar */}
        <Navbar setShowLogin={setShowLogin} />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />

      {/* Scroll Up/Down Button */}
      <ScrollButton />
    </>
  );
};

export default App;
