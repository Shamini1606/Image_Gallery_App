import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import ImageUpload from "./components/ImageUpload";
import ImageGallery from "./components/ImageGallery";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/upload" component={ImageUpload} />
        <Route path="/gallery" component={ImageGallery} />
        <Route path="/" component={Auth} />
      </Routes>
    </Router>
  );
};

export default App;
