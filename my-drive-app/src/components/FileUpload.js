// src/components/FileUpload.js
import React, { useState } from 'react';
import axios from '../api/axios';

const FileUpload = () => {
    const [title, setTitle] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setTitle(file.name.replace(/\.[^/.]+$/, ""));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedFile) {
            alert('Please select a file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('file', selectedFile);

        try {
            // Read the file content and include it in the form data
            const reader = new FileReader();
            reader.onload = async (e) => {
                const content = e.target.result;
                formData.append('content', content);

                try {
                    await axios.post('textfiles/', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });
                    setTitle('');
                    setSelectedFile(null);
                } catch (error) {
                    console.error('Error uploading file', error);
                }
            };
            reader.readAsText(selectedFile);
        } catch (error) {
            console.error('Error processing file', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileChange} />
            <button type="submit">Upload</button>
        </form>
    );
};

export default FileUpload;
