import Axios from 'axios';

const axios = Axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});
axios.interceptors.request.use(
  (config) => config,
  (err) => Promise.reject(err),
);

axios.interceptors.response.use(
  (response) => {
    if ([200, 201].includes(response.status)) {
      if (response.data.code === 200) {
        return response.data;
      }
      return Promise.reject(response.data);
    }
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({
      msg: 'server failed!',
    });
  },
  (err) => Promise.reject(err),
);

export default axios;
