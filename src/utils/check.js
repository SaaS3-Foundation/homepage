import { decodeAddress, encodeAddress } from '@polkadot/keyring';
import { hexToU8a, isHex } from '@polkadot/util';
import { ethers } from 'ethers';
// const { decodeAddress, encodeAddress } = require('@polkadot/keyring');
// const { hexToU8a, isHex } = require('@polkadot/util');

// check dot chain address
export const isValidPolkadotAddress = (address) => {
  try {
    const valid = encodeAddress(isHex(address) ? hexToU8a(address) : decodeAddress(address));
    return valid;
  } catch (error) {}
  return false;
};

// check erc20 address
export const isValidETHAddress = (address) => {
  return ethers.utils.isAddress(address);
};


export const isType = (data) => {
  return Object.prototype.toString.call(data).replace(/^\[object\s|\]$/g, '').toLowerCase();
}
