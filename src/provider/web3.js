import { createContext, useEffect, useState } from 'react';
import Web3 from 'web3/dist/web3.min';

const web3 = new Web3();

const web3Context = createContext({
  web3,
  provider: null,
  setProvider: () => {},
  account: '',
  chainId: ''
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
    web3.eth.getAccounts().then((res) => {
      setAccount(res[0]);
    });
    fetchSetChain();
  };

  const fetchSetChain = async () => {
    const res = await web3.eth.getChainId();
    setChainId(res);
  };

  useEffect(() => {
    const addListener = () => {
      console.log('add listener');
      provider.on('connect', () => {});
      provider.on('accountsChanged', () => {
        fetchSetAccount();
      });
      provider.on('disconnect', () => {
        setChainId('');
        setAccount('');
        setProvider(null);
        web3.setProvider(null);
      });
      provider.on('chainChanged', () => {
        fetchSetAccount();
      });
    };
    if (provider) {
      fetchSetAccount();
      addListener();
    }
    return () => {
      try {
        provider.removeListener('connect');
        provider.removeListener('accountsChanged');
        provider.removeListener('disconnect');
        provider.removeListener('chainChanged');
      } catch (error) {}
    };
  }, [provider]);

  return (
    <web3Context.Provider
      value={{
        web3,
        provider,
        chainId,
        account,
        setProvider: _setProvider
      }}
    >
      {props.children}
    </web3Context.Provider>
  );
}

export default Web3Provider;
export { web3Context };
