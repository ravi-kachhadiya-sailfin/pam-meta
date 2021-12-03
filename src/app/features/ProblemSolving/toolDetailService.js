import axios from 'axios';

const TOOL_BASE_URL = '/tool';
const PS_BASE_URL = '/problem-solving';
const HEADERS =
  localStorage.getItem('token') != null
    ? 'Bearer ' + JSON.parse(localStorage.getItem('token'))['accessToken']
    : null;


export const submitDestress = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${TOOL_BASE_URL}/distress/score`, data, {
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

export const submitRating = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${TOOL_BASE_URL}/rating`, data, {
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
export const getPendingForm = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${PS_BASE_URL}/pending/form`, {
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

export const stepOne = () => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${PS_BASE_URL}/start`, null, {
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

export const stepInitialTwo = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${PS_BASE_URL}/initial/step2`, data, {
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

export const stepTwo = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${PS_BASE_URL}/step2`, data, {
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

export const stepThree = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${PS_BASE_URL}/step3`, data, {
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

export const stepFour = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${PS_BASE_URL}/step4`, data, {
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

export const stepFive = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${PS_BASE_URL}/step5`, data, {
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

export const stepSix = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${PS_BASE_URL}/step6`, data, {
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

export const stepSeven = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${PS_BASE_URL}/step7`, data, {
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

export const getHistory = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${PS_BASE_URL}/history?page=1&perPage=100`, {
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