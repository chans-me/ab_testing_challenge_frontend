import axios from 'axios';

const http = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*',
    'accept': 'application/json',
    'content-type': 'application/json',
  },
});

/* Response Interceptors */
const interceptResErrors = (err) => {
  try {
    err = Object.assign(new Error(), {message: err.response.data.error});
  } catch (e) {
    // Will return err if something goes wrong
  }
  return Promise.reject(err);
};
const interceptResponse = (res) => {
  try {
    return Promise.resolve(res.data.result);
  } catch (e) {
    return Promise.resolve(res);
  }
};
http.interceptors.response.use(interceptResponse, interceptResErrors);

/* Request Interceptors */
const interceptReqErrors = err => Promise.reject(err);
const interceptRequest = (config) => {
  return config;
};
http.interceptors.request.use(interceptRequest, interceptReqErrors);

export default http;