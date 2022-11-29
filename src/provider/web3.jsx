import {
  createContext, useEffect, useMemo, useState,
} from 'react';
import Web3 from 'web3';
import { Notification, Toast } from '@douyinfe/semi-ui';
import { getCurrChainInfo, switchNetwork } from '@/utils/web3';

export const web3 = new Web3();

const web3Context = createContext({
  web3,
  provider: null,
  setProvider: () => {},
  account: '',
  chainId: '',
  connect: async () => {},
});

function Web3Provider({ children }) {
  const [provider, setProvider] = useState(null);
  const [chainId, setChainId] = useState();
  const [account, setAccount] = useState();
  const _setProvider = (_provider) => {
    web3.setProvider(_provider);
    setProvider(_provider);
    return _provider;
  };

  const fetchSetAccount = () => {
    web3.eth.getAccounts().then((accounts) => {
      setAccount(accounts[0]);
    });
    fetchSetChain();
  };

  const fetchSetChain = async () => {
    const _chainId = await web3.eth.getChainId();
    if (web3.utils.toHex(_chainId) !== getCurrChainInfo().chainId) {
      Toast.error(`Place switch network to ${getCurrChainInfo().chainId}`);
      disconnect();
      return;
    }
    setChainId(_chainId);
  };

  const disconnect = () => {
    setChainId('');
    setAccount('');
    _setProvider(null);
    removeListener();
  };

  const addListener = () => {
    removeListener();
    console.log('add listener');
    provider.on('accountsChanged', fetchSetAccount);
    provider.on('disconnect', disconnect);
    provider.on('chainChanged', fetchSetAccount);
  };

  const removeListener = () => {
    try {
      provider.removeListener('accountsChanged', fetchSetAccount);
      provider.removeListener('disconnect', disconnect);
      provider.removeListener('chainChanged', fetchSetAccount);
    } catch (error) {}
  };

  const connect = async () => {
    try {
      if (!window.ethereum) {
        Notification.open({
          title: 'Please install the MetaMask plugin.',
          content: 'Website: https://metamask.io/',
        });

        window.open('https://metamask.io/');
        return;
      }
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      await switchNetwork(window.ethereum);
      setAccount(accounts[0]);
      _setProvider(window.ethereum);
      Toast.success('Successfully connect wallet!');
      return window.ethereum;
    } catch (error) {
      if (error.code === 4001) {
        Toast.error('Please connect to MetaMask.');
      } else {
        Toast.error(error?.message || 'Connect wallet failed.');
      }
      throw error;
    }
  };

  useEffect(() => {
    if (provider) {
      fetchSetAccount();
      addListener();
    }
    return () => {
      removeListener();
    };
  }, [provider]);

  const value = useMemo(
    () => ({
      web3,
      provider,
      chainId,
      account,
      setProvider: _setProvider,
      connect,
      disconnect,
    }),
    [account, chainId, provider, web3],
  );
  return (
    <web3Context.Provider value={value}>
      {children}
    </web3Context.Provider>
  );
}

export default Web3Provider;
export { web3Context };
