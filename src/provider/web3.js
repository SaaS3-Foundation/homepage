import { createContext, useEffect, useState } from 'react';
import Web3 from 'web3/dist/web3.min';
import { message, notification } from 'antd';
import { getCurrChainInfo, switchNetwork } from 'src/utils/web3';

const web3 = new Web3();

const web3Context = createContext({
  web3,
  provider: null,
  setProvider: () => {},
  account: '',
  chainId: '',
  connect: async () => {}
});

function Web3Provider(props) {
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
    const chainId = await web3.eth.getChainId();
    if (web3.utils.toHex(chainId) !== getCurrChainInfo().chainId) {
      message.error('Place switch network to ' + getCurrChainInfo().chainId);
      disconnect();
      return;
    }
    setChainId(chainId);
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
        notification.open({
          message: 'Please install the MetaMask plugin.',
          description: 'Website: https://metamask.io/'
        });

        window.open('https://metamask.io/', 'install metamsk', '');
        return;
      }
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      await switchNetwork(window.ethereum);
      setAccount(accounts[0]);
      _setProvider(window.ethereum);
      message.success('Successfully connect wallet!');
      return window.ethereum;
    } catch (error) {
      if (error.code === 4001) {
        message.error('Please connect to MetaMask.');
      } else {
        message.error(error?.message || 'Connect wallet failed.');
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

  return (
    <web3Context.Provider
      value={{
        web3,
        provider,
        chainId,
        account,
        setProvider: _setProvider,
        connect,
        disconnect
      }}
    >
      {props.children}
    </web3Context.Provider>
  );
}

export default Web3Provider;
export { web3Context };
