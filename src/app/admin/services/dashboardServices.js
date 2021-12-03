import axios from 'axios';

const DASHBOARD_CONTENT_URL = '/admin';
const HEADERS =
  localStorage.getItem('token') != null
    ? 'Bearer ' + JSON.parse(localStorage.getItem('token'))['accessToken']
    : null;
//user registered
export const getLoginUsers = (start_date, end_date) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${DASHBOARD_CONTENT_URL}/dashboard/contents?start_date=` + start_date + `&end_date=` + end_date, {
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
export const getUnRegisteredUsers = (start_date, end_date) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${DASHBOARD_CONTENT_URL}/dashboard/contents?start_date=` + start_date + `&end_date=` + end_date, {
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
//Top Access Tools
export const getMostAccessTools = (start_date, end_date) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${DASHBOARD_CONTENT_URL}/content/tools/top/accessed?start_date=` + start_date + `&end_date=` + end_date, {
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
//Ratings
export const getTotalRatings = (start_date, end_date) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${DASHBOARD_CONTENT_URL}/dashboard/contents?start_date=` + start_date + `&end_date=` + end_date, {
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
//Accesssed Assesments
export const getAccessedAssessments = (start_date, end_date) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${DASHBOARD_CONTENT_URL}/assessments/accessed?start_date=` + start_date + `&end_date=` + end_date, {
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
//Average Pre-distress score
export const getPreDistressScore = (start_date, end_date) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${DASHBOARD_CONTENT_URL}/dashboard/initialscreeners?start_date=` + start_date + `&end_date=` + end_date, {
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
//Count Of Trauma Selected
export const getSelectedTrauma = (start_date, end_date) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${DASHBOARD_CONTENT_URL}/dashboard/initialscreeners?start_date=` + start_date + `&end_date=` + end_date, {
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
//Graph of Average Ratings
export const getAverageRatings = (start_date, end_date) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${DASHBOARD_CONTENT_URL}/dashboard/avgRatingByTools?start_date=` + start_date + `&end_date=` + end_date, {
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
//Favourites
export const getTotalFavourites = (start_date, end_date) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${DASHBOARD_CONTENT_URL}/dashboard/contents?start_date=` + start_date + `&end_date=` + end_date, {
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
//Access Tools
export const getPostDistressScore = (start_date, end_date) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${DASHBOARD_CONTENT_URL}/dashboard/post-distress/score?start_date=` + start_date + `&end_date=` + end_date, {
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
//Count
export const getFeelingSelected = (start_date, end_date) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${DASHBOARD_CONTENT_URL}/dashboard/feel?start_date=` + start_date + `&end_date=` + end_date, {
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



export const getTraumaCount = (start_date, end_date) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${DASHBOARD_CONTENT_URL}/assessments/trauma/count?start_date=` + start_date + `&end_date=` + end_date, {
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



