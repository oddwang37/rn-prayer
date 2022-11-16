import axios, {AxiosRequestConfig} from 'axios';
// import keychain lib
import _ from 'lodash';
import userSession from './userSession';

const _baseUrl = 'https://prayer.herokuapp.com/';
const instance = axios.create({
  baseURL: _baseUrl,
});

instance.interceptors.request.use(async config => {
  const token = await userSession.retrieve();
  if (!config.headers) {
    config.headers = {};
  }
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

class Http {
  async get(endpoint: string, config: AxiosRequestConfig = {}) {
    if (_.isEmpty(config)) {
      return await instance.get(endpoint, config);
    } else {
      return await axios.get(_baseUrl + endpoint, config);
    }
  }
  async post(
    endpoint: string,
    requestBody: object,
    config: AxiosRequestConfig = {},
  ) {
    return await instance.post(endpoint, requestBody, config);
  }
  async patch(
    endpoint: string,
    requestBody: object,
    config: AxiosRequestConfig = {},
  ) {
    return await instance.patch(endpoint, requestBody, config);
  }
  async put(
    endpoint: string,
    requestBody: object,
    config: AxiosRequestConfig = {},
  ) {
    return await instance.put(endpoint, requestBody, config);
  }
  async delete(endpoint: string, config: AxiosRequestConfig = {}) {
    return await instance.delete(endpoint, config);
  }
}

const http = new Http();

export default http;
