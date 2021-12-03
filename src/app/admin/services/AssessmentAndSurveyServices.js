import axios from 'axios';

const ASSESSMENT_SURVEY_URL = '/admin';
const HEADERS =
  localStorage.getItem('token') != null
    ? 'Bearer ' + JSON.parse(localStorage.getItem('token'))['accessToken']
    : null;

//Access Content
export const getAssessmentCount = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${ASSESSMENT_SURVEY_URL}/assessments/taken/count`, {
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
//Assessment Detail
export const getAssessmentDetail = (aid) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${ASSESSMENT_SURVEY_URL}/assessments/details?assessmentId=` + aid, {
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
export const updateAssessmentQuestion = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${ASSESSMENT_SURVEY_URL}/assessments/question/update`, data, {
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
//Update Assessment Question Status
export const updateAssessmentStatus = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${ASSESSMENT_SURVEY_URL}/assessments/question/status`, data, {
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
