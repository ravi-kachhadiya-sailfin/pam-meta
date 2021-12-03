import axios from 'axios';
const TOOLS_BASE_URL = '/tool';
const HEADERS =
  localStorage.getItem('token') != null
    ? 'Bearer ' + JSON.parse(localStorage.getItem('token'))['accessToken']
    : null;



export const setToolRating = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${TOOLS_BASE_URL}/rating`,
        {
          toolId: payload.toolID,
          rating: payload.rating,
        },
        {
          headers: {
            Authorization: HEADERS,
          },
        }
      )
      .then((resp) => {
        resolve('Added');
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


export const shareTool = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${TOOLS_BASE_URL}/share`,
        {
          toolId: payload.toolId,
          media_type :payload.mediaType
        },
        {
          headers: {
            Authorization: HEADERS,
          },
        }
      )
      .then((resp) => {
        resolve('Shared');
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



export const setFavouriteTool = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${TOOLS_BASE_URL}/favorite`,
        {
          toolId: payload.toolID,
        },
        {
          headers: {
            Authorization: HEADERS,
          },
        }
      )
      .then((resp) => {
        resolve('Added');
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

export const getListOfTools = (sortBy = '', filterPayload = [], page = 1) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${TOOLS_BASE_URL}/list`, {
        params: {
          perPage: 100,
          page: page,
          sortBy: sortBy,
          filterBy: [...filterPayload],
        },
        headers: {
          Authorization: HEADERS,
        },
      })
      .then((resp) => {
        resolve(resp.data.data.tools);
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

export const getToolsFilter = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${TOOLS_BASE_URL}/filters`, {
        headers: {
          Authorization: HEADERS,
        },
      })
      .then((resp) => {
        resolve(resp.data.data.filters);
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

export const getToolByType = (perPage, page, feelingEmotion, type) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${TOOLS_BASE_URL}/list/byToolType`, {
        params: {
          perPage: perPage,
          page: page,
          feelingEmotion: feelingEmotion,
          type: type,
        },
        headers: {
          Authorization: HEADERS,
        },
      })
      .then((res) => {
        resolve(res.data.data.tools);
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

export const getToolDetail = (toolId) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${TOOLS_BASE_URL}/details`, {
        params: {
          toolId: toolId,
        },
        headers: {
          Authorization: HEADERS,
        },
      })
      .then((res) => {
        resolve(res.data.data.tool);
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
