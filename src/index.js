import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AlertContextProvider from './alert-context/alertContext';
import InputContextProvider from './alert-context/inputContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AlertContextProvider>
    <InputContextProvider>
      <React.StrictMode>
      <App />
    </React.StrictMode>
  </InputContextProvider> 
  </AlertContextProvider>
    
  
  
);


