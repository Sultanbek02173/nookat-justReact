  import axios from "axios";
import { BASE_URL } from "./constants";
import i18n from "../../i18n/i18n";

const axiosApi = axios.create({
  baseURL: BASE_URL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosApi.interceptors.request.use(
  config => {
    const locale = i18n.language || 'ru';
    config.headers['Accept-Language'] = locale;
    config.url = `/${locale}${config.url}`;
    return config;    
  },
  error => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

export default axiosApi;
