// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const myFirstElement = <h1>Hello React!</h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myFirstElement);

// const date = new Date()
// // root.render(date.getFullYear());
// // root.render(date.getMonth());
// root.render(date.getDate())



import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";  // Optional: Import global CSS

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

