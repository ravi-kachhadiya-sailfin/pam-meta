// Setup defaults and the response interceptor for the axios HTTP library.

import axios from "axios";
import i18n from "common/i18n";

export const setupAxios = () => {
  // console.log("env", window.DEPLOY_ENV, process.env.REACT_APP_API_BASEURL, process.env.NODE_ENV)
  // If the base URL contains DEPLOY_ENV, update with the deployment environment from public/env.js
  axios.defaults.baseURL = process.env.REACT_APP_API_BASEURL.replace(
    "DEPLOY_ENV",
    window.DEPLOY_ENV
  );
  axios.defaults.timeout = parseInt(process.env.REACT_APP_API_TIMEOUT);

  // For any API error, set a default error message which the services in the application should either use or override
  axios.interceptors.response.use(
    (response) => {
      // Any status code of 2xx causes this function to trigger
      // Return the unmodified response back to the service for handling
      return response;
    },
    (error) => {
      // Any results other than status code 2xx causes this function to trigger
      if (error.response) {
        // The request was made and the server responded with a status code other than 2xx
        if (error.response.data.status && error.response.data.code) {
          error.message = i18n.t(
            `common:apiDefaultErrorMessages.${error.response.data.status}.${error.response.data.code}`,
            {
              name: error.response.data.detail?.properties?.[0]?.name,
              value: error.response.data.detail?.properties?.[0]?.value,
              resource: error.response.data.detail?.properties?.[0]?.resource,
              message: error.response.data.detail?.properties?.[0]?.message,
            }
          );
        } else {
          error.message = i18n.t(
            `common:apiDefaultErrorMessages.500.SERVER_ERROR`,
            {
              message: error.response.data.message,
            }
          );
        }
        error.status = error.response.data.status;
        error.code = error.response.data.code;
      } else if (error.request) {
        // The request was made but no response was received
        error.message = i18n.t(
          "common:apiDefaultErrorMessages.REQUEST_TIMEOUT"
        );
      } else {
        // Something happened in setting up the request that triggered an error
        error.message = i18n.t("common:apiDefaultErrorMessages.REQUEST_ERROR");
      }

      // Return the default error message to the service in error.message
      // Also return error.status and error.code if the error came from the backend
      return Promise.reject(error);
    }
  );
};
