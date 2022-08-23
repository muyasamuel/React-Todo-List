import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AlertContextProvider from './alert-context/alertContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AlertContextProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </AlertContextProvider>
    
  
  
);


