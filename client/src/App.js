// src/App.js

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Auth from "./pages/Auth";
import ImageUpload from "./pages/ImageUpload";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ImageGallery from "./pages/ImageGallery";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Help from "./components/Help";
import Footer from "./components/Footer";

const App = () => {
  const location = useLocation(); // Get the current location

  return (
    <>
      {/* Conditionally render Navbar based on the current route */}
      {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/upload" element={<ImageUpload />} />
        <Route path="/images" element={<ImageGallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
      </Routes>
      <Footer />
    </>
  );
};

// Wrap the App component with Router
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
