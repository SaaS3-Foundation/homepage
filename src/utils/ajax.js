import Axios from 'axios';

const axios = Axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  (response) => {
    if ([200,201].includes(response.status)) {
      if (response.data.code === 200) {
        return response.data;
      } else {
        return Promise.reject(response.data);
      }
    }
    return Promise.reject({
      msg: 'server failed!'
    });
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axios;
