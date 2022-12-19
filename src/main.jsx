import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import Marketplace from './pages/marketplace';
import ApiInfo from './pages/appInfo';
import Faucet from './pages/faucet';
import ContractConsole from './pages/contractConsole';
import Web3Provider from './provider/web3';
import CookieModal from './components/comm/CookieModal/index.jsx';

import './index.less';

const root = createRoot(document.getElementById('root'));

root.render(
  <Web3Provider>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/marketplace" element={<Marketplace />} />
        <Route exact path="/api_info/:id" element={<ApiInfo />} />
        <Route exact path="/faucet" element={<Faucet />} />
        <Route exact path="/contractConsole/:id" element={<ContractConsole />} />
      </Routes>
    </BrowserRouter>
    <CookieModal />
  </Web3Provider>,
);
