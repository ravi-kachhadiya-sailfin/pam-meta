import axios from "axios";

const PROFILE_BASE_URL = "/profile";

export const getUserPersonalProfileData = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${PROFILE_BASE_URL}/user`, {
        headers: {
          Authorization:
            "Bearer " +
            JSON.parse(localStorage.getItem("token"))["accessToken"], //the token is a variable which holds the token
        },
      })
      .then((resp) => {
        resolve(resp.data.data.personalProfile);
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

export const updateUserPersonalProfileData = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .put(
        `${PROFILE_BASE_URL}/personal`,
        {
          name: payload.name,
          gender: payload.gender,
          age: payload.age,
          sexualOrientation: payload.sexualOrientation,
          transgender: payload.transgender,
          research: payload.research,
          privacySetting: payload.privacySetting,
          isEmailConsentAgreed: payload.isEmailConsentAgreed,
          securityAnswer: payload.securityAnswer,
          race: payload.race,
          phone: payload.phone,
          organizationCode: payload.organizationCode,
        },
        {
          headers: {
            Authorization:
              "Bearer " +
              JSON.parse(localStorage.getItem("token"))["accessToken"], //the token is a variable which holds the token
          },
        }
      )
      .then((resp) => {
        resolve(resp.data.data.personalProfile);
      })
      .catch((error) => {
        if (error.response) {
          switch (error.response.data.statusCode) {
            case 400:
              reject(error.response.data.errors.join('\n'));
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

export const getUserHealthCareData = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${PROFILE_BASE_URL}/user`, {
        headers: {
          Authorization:
            "Bearer " +
            JSON.parse(localStorage.getItem("token"))["accessToken"], //the token is a variable which holds the token
        },
      })
      .then((resp) => {
        resolve(resp.data.data.healthcareProfile);
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

export const updateUserHealthCareData = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${PROFILE_BASE_URL}/healthcare`,
        {
          "healthcareFacility": payload.healthcareFacility || "",
          "leftHealthcarePosition": payload.leftHealthcarePosition || "",
          "healthcareRole": payload.healthcareRole || "",
          "experienceInHealthcare": payload.experienceInHealthcare || [],
          "caregiver": payload.caregiver || "",
        },
        {
          headers: {
            Authorization:
              "Bearer " +
              JSON.parse(localStorage.getItem("token"))["accessToken"], //the token is a variable which holds the token
          },
        }
      )
      .then((resp) => {
        resolve(resp.data.data.personalProfile);
      })
      .catch((error) => {
        if (error.response) {
          switch (error.response.data.statusCode) {
            case 400:
              reject(error.response.data.errors.join('\n'));
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

export const updateUserProfilePicture = (payload) => {
  console.log("Image:", payload)
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${PROFILE_BASE_URL}/image`,
        payload,
        {
          headers: {
            Authorization:
              "Bearer " +
              JSON.parse(localStorage.getItem("token"))["accessToken"], //the token is a variable which holds the token
          },
        }
      )
      .then((resp) => {
        console.log("response", resp)
        resolve(resp.data);
      })
      .catch((error) => {
        if (error.response) {
          switch (error.response.data.statusCode) {
            case 400:
              reject(error.response.data.errors.join('\n'));
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