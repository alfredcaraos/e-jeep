import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './login/login';
import Register from './login/register';
import Booking from './booking/booking';
import Account from './account/account';
import Payment from './booking/payment';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/account" element={<Account />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
