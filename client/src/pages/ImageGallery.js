// src/pages/ImageGallery.js


import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/ImageGallery.css';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const response = await axios.get("/api/images", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setImages(response.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/images/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    fetchImages(); // Refresh the image list
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <h1>Image Gallery</h1>
      <div className="gallery">
        {images.map((image) => (
          <div key={image._id}>
            <img src={image.imageUrl} alt={image.title} />
            <h2>{image.title}</h2>
            <p>{image.description}</p>
            <button onClick={() => handleDelete(image._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
