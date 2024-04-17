import axios, { AxiosInstance } from 'axios';

export const XHttp: AxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  baseURL: 'https://gw.balancenetwork.com/items/',
  timeout: 10000
});

export const XApiUrl = {
  AboutPageData: () => {
    return XHttp.get('/bs_about');
  }
};
