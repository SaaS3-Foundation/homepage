export const CHAIN_INFO_TEST = {
  chainId: '0x507',
  chainName: 'Moonbase Alpha',
  nativeCurrency: {
    name: 'DEV',
    symbol: 'DEV',
    decimals: 18
  },
  rpcUrls: ['https://rpc.testnet.moonbeam.network'],
  blockExplorerUrls: []
};
export const CHAIN_INFO = {
  chainId: '0x507',
  chainName: 'Moonbase Alpha',
  nativeCurrency: {
    name: 'DEV',
    symbol: 'DEV',
    decimals: 18
  },
  rpcUrls: ['https://rpc.testnet.moonbeam.network'],
  blockExplorerUrls: []
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

export function switchNetwork(walletProvider) {
  const chain = process.env.NODE_ENV === 'production' ? CHAIN_INFO : CHAIN_INFO_TEST;
  return walletProvider.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: chain.chainId }]
  });
}
export async function addNetwork(walletProvider) {
  const chain = process.env.NODE_ENV === 'production' ? CHAIN_INFO : CHAIN_INFO_TEST;
  try {
    return await walletProvider.request({
      method: 'wallet_addEthereumChain',
      params: [chain]
    });
  } catch (error) {
    throw error;
  }
}
