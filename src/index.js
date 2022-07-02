import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from './Nav';
import Meme from './Meme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Nav />
    <Meme />
  </React.StrictMode>
);

reportWebVitals();
