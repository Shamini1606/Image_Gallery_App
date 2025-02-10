import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import ImageUpload from "./components/ImageUpload";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ImageGallery from "./components/ImageGallery";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/upload" component={ImageUpload} /> */}
        {/* <Route path="/upload" component={ImageUpload} /> */}
        <Route path="/upload" element={<ImageUpload />} />
        <Route path="/gallery" element={<ImageGallery />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      {/* <h1>Hello</h1> */}
    </Router>
  );
};

export default App;
