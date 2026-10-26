import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import './styles.css';
import './artwork.css';
import './services.css';
import './header.css';
import './promotions.css';

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
