import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Global />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
