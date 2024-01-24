import logo from './logo.svg';
import './App.css';
import React from 'react';
import FileUpload from './components/FileUpload';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Drive App</h1>
      </header>
      <main>
        <FileUpload />
        <ParentComponent />
      </main>
    </div>
  );
}

export default App;
