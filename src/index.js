import React from 'react';
import './index.scss';
import App from './App';
import Marketplace from './pages/marketplace';
import ApiInfo from './pages/api_info';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Faucet from './pages/faucet/Faucet';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route exact path='/marketplace' element={<Marketplace />}></Route>
      <Route exact path='/api_info/:id' element={<ApiInfo />} />
      <Route exact path='/faucet' element={<Faucet />} />
    </Routes>
  </Router>
);

// calc rem fontsize
// let html = document.documentElement;
// let htmlClientWidth = 0;
// const rejustRootSize = function () {
//   html.getBoundingClientRect().width > 750
//     ? (htmlClientWidth = 750)
//     : (htmlClientWidth = html.getBoundingClientRect().width);
//   html.style.fontSize = (htmlClientWidth / 750) * 100 + 'px';
// };
// rejustRootSize();
// window.onresize = rejustRootSize;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
