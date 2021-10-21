import axios, { AxiosResponse } from 'axios';

const getURL = () => {
  return 'http://192.168.44.197:5000/';
};
/**
 * <GET>
 *
 * @param url
 * @param params
 * @returns {Promise}
 * @constructor
 */
export const GETProvider = (url: string, params: object | null) => {
  return axios.get(getURL() + url, {
    params
  });
};

/**
 * <POST>
 *
 * @param url
 * @param params
 * @param body
 * @returns {Promise}
 * @constructor
 */
export const POSTProvider = (url: string, params: object | null, body: object | null) => {
  return axios.post(getURL() + url, body, {
    params
  });
};

/**
 * <PUT>
 *
 * @param url
 * @param body
 * @param params
 * @returns {Promise}
 * @constructor
 */
export const PUTProvider = (url: string, params: object | null, body: object) => {
  return axios.put(getURL() + url, body, {
    params
  });
};

/**
 * <DELETE>
 *
 * @param url
 * @param params
 * @param body
 * @returns {Promise}
 * @constructor
 */
export const DELETEProvider = (url: string, params: object | null, body: object | null) => {
  return axios.delete(getURL() + url, {
    params,
    data: body
  });
};
