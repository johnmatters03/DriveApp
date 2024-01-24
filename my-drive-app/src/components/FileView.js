import React, { useState, useEffect } from 'react';
import axios from '../api/axios'; // Adjust the import path as necessary

const FileView = ({ fileId }) => {
    const [fileContent, setFileContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (fileId) {
            setLoading(true);
            axios.get(`textfiles/${fileId}/`)
                .then(response => {
                    setFileContent(response.data.content);
                    setLoading(false);
                })
                .catch(error => {
                    setError('Error fetching file content');
                    setLoading(false);
                });
        }
    }, [fileId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h2>File Content</h2>
            <p>{fileContent}</p>
        </div>
    );
};

export default FileView;
