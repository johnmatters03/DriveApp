// ParentComponent.js
import React, { useState } from 'react';
import FileList from './FileList';
import FileView from './FileView';
import FileDelete from './FileDelete';

const ParentComponent = () => {
    const [selectedFileId, setSelectedFileId] = useState(null);
    const [files, setFiles] = useState([]); // Assuming you have state to hold files

    const handleFileSelect = (fileId) => {
        setSelectedFileId(fileId);
    };

    const handleDeleteSuccess = () => {
        // Remove the deleted file from the files state
        setFiles(files.filter(file => file.id !== selectedFileId));
        // Reset the selected file ID
        setSelectedFileId(null);
    };

    return (
        <div>
            <FileList onSelectFile={handleFileSelect} />
            {selectedFileId && (
                <>
                    <FileView fileId={selectedFileId} />
                    <FileDelete fileId={selectedFileId} onDeleteSuccess={handleDeleteSuccess} />
                </>
            )}
        </div>
    );
};

export default ParentComponent;
