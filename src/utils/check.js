
import { decodeAddress, encodeAddress } from '@polkadot/keyring';
import { hexToU8a, isHex } from '@polkadot/util';
// const { decodeAddress, encodeAddress } = require('@polkadot/keyring');
// const { hexToU8a, isHex } = require('@polkadot/util');

// check dot chain address
export const isValidPolkadotAddress = (address) => {
  try {
    const valid = encodeAddress(isHex(address) ? hexToU8a(address) : decodeAddress(address));
    return valid;
  } catch (error) {
  }
  return false;
};