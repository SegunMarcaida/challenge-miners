import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {initializeAmplitude} from "./amplitude";

initializeAmplitude();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
