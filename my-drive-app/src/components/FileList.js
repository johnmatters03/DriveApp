// FileList.js
import React, { useState, useEffect } from 'react';
import axios from '../api/axios';

const FileList = ({ onSelectFile }) => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        axios.get('textfiles/')
            .then(response => {
                setFiles(response.data);
            })
            .catch(error => {
                console.error('Error fetching files', error);
            });
    }, []);

    const handleFileClick = (fileId) => {
        if (onSelectFile) {
            onSelectFile(fileId);
        }
    };

    return (
        <div>
            <h2>File List</h2>
            <ul>
                {files.map(file => (
                    <li key={file.id} onClick={() => handleFileClick(file.id)}>
                        {file.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FileList;
