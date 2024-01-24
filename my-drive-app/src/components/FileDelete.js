// FileDelete.js
import React from 'react';
import axios from '../api/axios';

const FileDelete = ({ fileId, onDeleteSuccess }) => {
    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this file?')) {
            axios.delete(`textfiles/${fileId}/`)
                .then(() => {
                    alert('File deleted successfully.');
                    if (onDeleteSuccess) onDeleteSuccess();
                })
                .catch(error => {
                    console.error('Error deleting file', error);
                    alert('Error deleting file.');
                });
        }
    };

    return (
        <button onClick={handleDelete} className="delete-button">
            Delete File
        </button>
    );
};

export default FileDelete;
