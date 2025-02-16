// src/components/About.js
import React from "react";
import "../styles/About.css"; // Optional: Import a CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our Image Gallery App! We are passionate about photography
        and believe in the power of sharing beautiful moments. Our platform
        allows users to showcase their creativity and connect with others who
        share their interests.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to create a vibrant community where photography
        enthusiasts can upload, share, and discover stunning images. We aim to
        provide a user-friendly interface that makes it easy for anyone to
        participate, whether you're a professional photographer or just starting
        out.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Easy image uploads with descriptions and titles.</li>
        <li>A beautiful gallery to browse through images shared by users.</li>
        <li>Community engagement through comments and likes.</li>
        <li>Secure user authentication to protect your content.</li>
      </ul>
      <h2>Join Us</h2>
      <p>
        We invite you to join our community! Sign up today to start sharing your
        images and exploring the creativity of others. Together, let's celebrate
        the art of photography!
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions, feedback, or suggestions, feel free to reach
        out to us at{" "}
        <a href="mailto:support@imagegalleryapp.com">
          support@imagegalleryapp.com
        </a>
        .
      </p>
    </div>
  );
};

export default About;
