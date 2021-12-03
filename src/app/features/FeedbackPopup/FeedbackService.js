import axios from "axios";

const FEEBACK_BASE_URL = "/contact";

export const submitLoggedInFeedback = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${FEEBACK_BASE_URL}/contact-request`,
        {
          ...payload,
        },
        {
          headers: {
            Authorization:
              "Bearer " +
              JSON.parse(localStorage.getItem("token"))["accessToken"], //the token is a variable which holds the token
          },
        })
      .then((resp) => {
        resolve();
      })
      .catch((error) => {
        if (error.response) {
          switch (error.response.data.statusCode) {
            case 400:
            case 401:
            case 404:
            case 409:
              reject(error.response.data.errors[0]);
              break;
            default:
              reject("Unknown error occurred");
              break;
          }
        } else {
          reject("Network Error");
        }
      });
  });
};

export const submitFeedback = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${FEEBACK_BASE_URL}/contact-request`, {
        ...payload,
      })
      .then((resp) => {
        resolve();
      })
      .catch((error) => {
        if (error.response) {
          switch (error.response.data.statusCode) {
            case 400:
            case 401:
            case 404:
            case 409:
              reject(error.response.data.errors[0]);
              break;
            default:
              reject("Unknown error occurred");
              break;
          }
        } else {
          reject("Network Error");
        }
      });
  });
};