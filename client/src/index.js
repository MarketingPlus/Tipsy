import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { StoreProvider } from "./store";

ReactDOM.render(
  <React.StrictMode>

    <StoreProvider>
        <App />
    </StoreProvider>
  </React.StrictMode>,
    document.getElementById('root')
);
