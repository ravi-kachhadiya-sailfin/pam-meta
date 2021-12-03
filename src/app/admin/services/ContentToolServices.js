import axios from 'axios';

const CONTENT_TOOLS_URL = '/admin';
const HEADERS =
  localStorage.getItem('token') != null
    ? 'Bearer ' + JSON.parse(localStorage.getItem('token'))['accessToken']
    : null;

//Access Content
export const getAccessedContent = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${CONTENT_TOOLS_URL}/content/tools/accessed?`, {
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
export const getToolsDetail = (tid) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${CONTENT_TOOLS_URL}/content/tools/details?toolId=` + tid, {
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


export const getTags = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${CONTENT_TOOLS_URL}/content/tools/tags`, {
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
//Thumnail Image
export const getThumbnailImage = (tid) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${CONTENT_TOOLS_URL}/content/tools/thumbnailImage?toolId=` + tid, { responseType: 'blob' }, {
        headers: {
          Authorization: HEADERS,
        },
        responseType: 'blob'
      })
      .then((res) => {
        resolve(URL.createObjectURL(res.data));
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
//Update thumb image
export const UpdateThumbImage = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${CONTENT_TOOLS_URL}/content/tools/thumbnailImage`, data, {
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
//Large Image
export const getLargeImage = (tid) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${CONTENT_TOOLS_URL}/content/tools/largeImage?toolId=` + tid, {
        headers: {
          Authorization: HEADERS,
        },
        responseType: 'blob'
      })
      .then((res) => {
        resolve(URL.createObjectURL(res.data));
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
//update Large Image
export const updateImage = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${CONTENT_TOOLS_URL}/content/tools/image`, data, {
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


//edit Tools
export const updateTool = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${CONTENT_TOOLS_URL}/content/tools/details`, data,
        {
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
