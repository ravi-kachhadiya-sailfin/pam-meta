import axios from 'axios';

const ASSESMENT_BASE_URL = '/assessment';
const HEADERS =
  localStorage.getItem('token') != null
    ? 'Bearer ' + JSON.parse(localStorage.getItem('token'))['accessToken']
    : null;

export const getAssesmentQuestions = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${ASSESMENT_BASE_URL}/initial`, {
        headers: {
          Authorization: HEADERS,
        },
      })
      .then((res) => {
        resolve(res.data.data.assessments);
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

export const submitAssesment = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${ASSESMENT_BASE_URL}/initial`, data, {

        headers: {
          Authorization: HEADERS,
        },
      })
      .then((res) => {
        resolve(res.data.data.assessments);
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

export const submitFullAssesment = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${ASSESMENT_BASE_URL}/full`, data, {
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
}

export const getReAssesmentQuestions = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${ASSESMENT_BASE_URL}/reassess`, {
        headers: {
          Authorization: HEADERS,
        },
      })
      .then((res) => {
        resolve(res.data.data.assessments);
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