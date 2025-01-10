import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Adjust the path if your App component is elsewhere
import './index.css'; // Optional: Your global CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
