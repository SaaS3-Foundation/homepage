export const CHAIN_INFO_TEST = {
  chainId: '0x507',
  chainName: 'Moonbase Alpha',
  nativeCurrency: {
    name: 'DEV',
    symbol: 'DEV',
    decimals: 18
  },
  rpcUrls: ['https://rpc.api.moonbase.moonbeam.network'],
  blockExplorerUrls: ['https://moonbase.moonscan.io/']
};
export const CHAIN_INFO = {
  chainId: '0x507',
  chainName: 'Moonbase Alpha',
  nativeCurrency: {
    name: 'DEV',
    symbol: 'DEV',
    decimals: 18
  },
  rpcUrls: ['https://rpc.api.moonbase.moonbeam.network'],
  blockExplorerUrls: ['https://moonbase.moonscan.io/']
};
// export const CHAIN_INFO = {
//   chainId: '0x504',
//   chainName: 'Moonbeam',
//   nativeCurrency: {
//     name: 'GLMR',
//     symbol: 'GLMR',
//     decimals: 18
//   },
//   rpcUrls: ['https://rpc.api.moonbeam.network'],
//   blockExplorerUrls: ['https://moonbeam.moonscan.io/']
// };

export async function switchNetwork(walletProvider) {
  const chain = getCurrChainInfo();
  try {
    const ret = await walletProvider.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: chain.chainId }]
    });
    return ret;
  } catch (error) {
    console.log(error, 'error');
    if (error.code === 4902) {
      return await addNetwork(walletProvider).then(() => switchNetwork(walletProvider));
    }
    throw error;
  }
}
export async function addNetwork(walletProvider) {
  try {
    return await walletProvider.request({
      method: 'wallet_addEthereumChain',
      params: [getCurrChainInfo()]
    });
  } catch (error) {
    throw error;
  }
}

export const getCurrChainInfo = () => {
  return process.env.NODE_ENV === 'production' ? CHAIN_INFO : CHAIN_INFO_TEST;
};
