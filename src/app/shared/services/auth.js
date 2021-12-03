import axios from "axios";

const AUTH_BASE_URL = "/auth";

export const userLogin = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${AUTH_BASE_URL}/login`, {
        email: payload.email,
        password: payload.password,
      })
      .then((resp) => {
        localStorage.setItem("token", JSON.stringify(resp.data.data.token));
        resolve({
          token: resp.data.data.token,
          msg: "Please enter passcode to continue"
        });
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
              reject("Unknown error occurred");
              break;
          }
        } else {
          reject("Network Error");
        }
      });
  });
};

export const registerUser = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${AUTH_BASE_URL}/register`, {
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

export const forgetPassword = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${AUTH_BASE_URL}/forgot-password`, {
        ...payload,
      })
      .then((resp) => {
        resolve(resp.data.data.message);
      })
      .catch((error) => {
        switch (error.response.data.statusCode) {
          case 400:
          case 401:
          case 404:
            reject(error.response.data.errors[0]);
            break;
          default:
            reject("Unknown error occurred");
            break;
        }
      });
  });
};

//reset Password
export const resetPassword = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${AUTH_BASE_URL}/reset-password`, {
        ...payload,
      })
      .then((resp) => {
        resolve(resp.data.data.message);
      })
      .catch((error) => {
        switch (error.response.data.statusCode) {
          case 400:
            reject(error.response.data.errors[0]);
            break;
          case 401:
          case 404:
            reject(error.response.data.errors[0]);
            break;
          default:
            reject("Unknown error occurred");
            break;
        }
      });
  });
};
//verify OTP
export const verifyOTP = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${AUTH_BASE_URL}/verify-otp`, {
        ...payload,
      })
      .then((resp) => {
        localStorage.setItem("token", JSON.stringify(resp.data.data.token));
        localStorage.setItem("user", JSON.stringify(resp.data.data.user));
        resolve("Please enter otp to continue");
      })
      .catch((error) => {
        switch (error.response.data.statusCode) {
          case 400:
            reject(error.response.data.errors[0]);
            break;
          case 401:
          case 404:
            reject(error.response.data.errors[0]);
            break;
          default:
            reject("Unknown error occurred");
            break;
        }
      });
  });
};

//resend OTP
export const resendOTP = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${AUTH_BASE_URL}/resend-otp`, {
        ...payload,
      })
      .then((resp) => {
        localStorage.setItem("token", JSON.stringify(resp.data.data.token));
        resolve(resp.data.data.message);
      })
      .catch((error) => {
        switch (error.response.data.statusCode) {
          case 400:
            reject(error.response.data.errors[0]);
            break;
          case 401:
          case 404:
            reject(error.response.data.errors[0]);
            break;
          default:
            reject("Unknown error occurred");
            break;
        }
      });
  });
};

//verify Email
export const verifyEmail = (token) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${AUTH_BASE_URL}/verify-email?token=${token}`)
      .then((resp) => {
        resolve(resp.data.data.message);
      })
      .catch((error) => {
        if (error.response) {
          switch (error.response.data.statusCode) {
            case 400:
              reject(error.response.data.errors[0].message);
              break;
            case 409:
            case 401:
              reject(error.response.data.errors[0]);
              break;
            default:
              reject("Unknown errors occurred");
          }
        } else {
          reject("Network error occurred");
        }
      });
  });
};

//refresh token
export const refreshToken = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${AUTH_BASE_URL}/refresh-token`, {
        ...payload,
      })
      .then((resp) => {
        localStorage.setItem(JSON.stringify(resp.data.data.token));
        resolve();
      })
      .catch((error) => {
        if (error.response) {
          switch (error.response.data.statusCode) {
            case "400":
              reject(error.response.data.errors[0].message);
              break;
            case "404":
              reject(error.response.data.errors[0]);
              break;
            default:
              reject("Unknown error");
          }
        } else {
          reject("Network error occurred");
        }
      });
  });
};
