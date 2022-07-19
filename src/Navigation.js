import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import Authentication from './components/Auth/Authentication';
import reportWebVitals from './reportWebVitals';
import Grocery from "./components/Grocery/Grocery.js"
import CreateProduct from './components/Creation/CreateProduct';

ReactDOM.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="/grocery" element={<Grocery/>}></Route>
      <Route path="/login" element={<Authentication/>}></Route>
      <Route path="/createproduct" element={<CreateProduct/>}></Route>
    </Routes>
  </BrowserRouter>,
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();