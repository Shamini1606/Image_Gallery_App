import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ImageUpload.css';

const ImageUpload = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(''); // State for error message

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        formData.append('title', title);
        formData.append('description', description);
        
        try {
            await axios.post('/api/images', formData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            setErrorMessage(''); // Clear error message on success
            alert('Image uploaded successfully!');
        } catch (error) {
            console.error('Error uploading image:', error);
            setErrorMessage('Failed to upload image. Please try again.'); // Set error message
        }
    };

    return (
        <div className="upload-container">
            <h2>Upload Image</h2>
            {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display error message */}
            <form onSubmit={handleSubmit} className="upload-form">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Image Title"
                    required
                />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Image Description"
                />
                <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                />
                <button type="submit">Upload Image</button>
            </form>
        </div>
    );
};

export default ImageUpload;