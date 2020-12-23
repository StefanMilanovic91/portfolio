import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './GlobalContext/GlobalContext';

import App from './App'; 

import './css/main.min.css';


ReactDOM.render(
    <BrowserRouter>
        <GlobalProvider>
            <App />
        </GlobalProvider>
    </BrowserRouter>,
    document.querySelector('#root'));