import React from 'react'; // Importing React library
import ReactDOM from 'react-dom/client'; // Importing ReactDOM for rendering the application
import './index.css'; // Importing the main CSS file for styling
import App from './App'; // Importing the main App component

// Rendering the application to the root element in the HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/* Enables additional checks and warnings for development */}
    <App /> {/* Rendering the App component */}
  </React.StrictMode>,
);
