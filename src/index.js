import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './Componement/Blog/Index';
import Detail from './Componement/Blog/Detail';
import MemberIndex from './Componement/Member/MemberIndex';
import Update from './Componement/Member/Update';
import Add_product from './Componement/Product.js/Add_product';
import My_Product from './Componement/Product.js/My_Product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path='/blog/list' element={<Index />} />
          <Route path='/blog/detail/:id' element={<Detail />} />
          <Route path='/member/login-register' element={<MemberIndex />} />
          <Route path='/account' element={<Update />} />
          <Route path='/Add-product' element={<Add_product />} />
          <Route path='/My-product' element={<My_Product />} />


        </Routes>
      </App>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
