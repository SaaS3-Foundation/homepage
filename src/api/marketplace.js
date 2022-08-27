import axios from "../utils/ajax";

export function getMarketplaceList (params) {
  return axios.get('/saas3/dapi/list', {
    params
  });
}


export function missionAction (data) {
  return axios.post('http://rpc.saas3.io:3101/saas3/airdrop/mission/action', data);
}