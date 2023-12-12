import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Make sure this is the correct path to your index.css file
import './App.css'; // Import App.css here
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
