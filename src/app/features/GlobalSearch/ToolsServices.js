import axios from 'axios';

const HOME_BASE_URL = '/home';
const TOOLS_BASE_URL = '/tool';
const HEADERS =
  localStorage.getItem('token') != null
    ? 'Bearer ' + JSON.parse(localStorage.getItem('token'))['accessToken']
    : null;


export const getRecommendedTools = (config) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${HOME_BASE_URL}/recommended/tools?perPage=6&&quickToolPage=1&&specializedToolPage=1`, {
        headers: {
          Authorization: HEADERS,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        if (error.response) {
          switch (error.response.data.statusCode) {
            case 400:
              reject(error.response.data.errors[0].message);
              break;
            case 401:
            case 404:
              reject(error.response.data.errors[0]);
              break;
            default:
              reject('Unknown error occurred');
              break;
          }
        } else {
          reject('Network Error');
        }
      });
  });
};

export const getSearchTools = (config) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${TOOLS_BASE_URL}/search?perPage=20&&quickToolPage=1&&specializedToolPage=1&&name=` + config.name, {
        headers: {
          Authorization: HEADERS,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        if (error.response) {
          switch (error.response.data.statusCode) {
            case 400:
              reject(error.response.data.errors[0].message);
              break;
            case 401:
            case 404:
              reject(error.response.data.errors[0]);
              break;
            default:
              reject('Unknown error occurred');
              break;
          }
        } else {
          reject('Network Error');
        }
      });
  });
};

export const getFavouriteTools = (config) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${TOOLS_BASE_URL}/favorite?perPage=6&&quickToolPage=1&&specializedToolPage=1`, {
        headers: {
          Authorization: HEADERS,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        if (error.response) {
          switch (error.response.data.statusCode) {
            case 400:
              reject(error.response.data.errors[0].message);
              break;
            case 401:
            case 404:
              reject(error.response.data.errors[0]);
              break;
            default:
              reject('Unknown error occurred');
              break;
          }
        } else {
          reject('Network Error');
        }
      });
  });
};
