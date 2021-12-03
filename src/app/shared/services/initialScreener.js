import axios from "axios";
const SCREENER_BASE_URL = "/screener";

export const saveInitialScreener = () => {
  var number;
  const feelingEmotionData = sessionStorage.getItem("feelingEmotion")
    ? sessionStorage.getItem("feelingEmotion").toUpperCase
    : sessionStorage.getItem(" lastFeelingEmotion")?.toUpperCase
  switch (feelingEmotionData) {
    case "HAPPY":
      number = 6;
      break;
    case "CONTENT":
      number = 5;
      break;
    case "SAD":
      number = 1;
      break;
    case "AFRAID":
      number = 2;
      break;
    case "GUILTY":
      number = 3;
      break;
    case "ANGRY":
      number = 7;
      break;
    case "WORRIED":
      number = 2;
      break;
    case "STRESSED":
      number = 4;
      break;
    case "GRIEVING":
      number = 8;
      break;
    case "NOT_SURE":
      number = 9;
      break;
    default:
      number = 9;
      break;
  }
  return new Promise((resolve, reject) => {
    axios
      .post(`${SCREENER_BASE_URL}/initial`, {
        feelingEmotion: parseInt(number),
        distressLevel: parseInt(sessionStorage.getItem("distressLevel")),
        hasTraumaticEvent:
          sessionStorage.getItem("hasTraumaticEvent") === "Yes" ? true : false,
      })
      .then((resp) => {
        sessionStorage.setItem(
          "sessionId",
          JSON.stringify(resp.data.data.sessionId)
        );
        sessionStorage.setItem(
          "distressLevel", 0
        );
        sessionStorage.setItem(
          "hasTraumaticEvent", false
        );
        sessionStorage.setItem('lastFeelingEmotion', sessionStorage.getItem("feelingEmotion"));
        sessionStorage.removeItem(
          "feelingEmotion"
        );
        //resolve(mockData.tools);
        resolve(resp.data.data.tools);
      })
      .catch((error) => {
        if (error.response) {
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
        } else {
          reject("Network Error");
        }
      });
  });
};

export const saveInitialScreenerLoggedIn = () => {
  var number;
  switch (sessionStorage.getItem("feelingEmotion").toUpperCase()) {
    case "HAPPY":
      number = 6;
      break;
    case "CONTENT":
      number = 5;
      break;
    case "SAD":
      number = 1;
      break;
    case "AFRAID":
      number = 2;
      break;
    case "GUILTY":
      number = 3;
      break;
    case "ANGRY":
      number = 7;
      break;
    case "WORRIED":
      number = 2;
      break;
    case "STRESSED":
      number = 4;
      break;
    case "GRIEVING":
      number = 8;
      break;
    case "NOT_SURE":
      number = 9;
      break;
    default:
      number = 9;
      break;
  }
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${SCREENER_BASE_URL}/initial`,
        {
          feelingEmotion: parseInt(number),
          distressLevel: parseInt(sessionStorage.getItem("distressLevel")),
          hasTraumaticEvent:
            sessionStorage.getItem("hasTraumaticEvent") === "Yes"
              ? true
              : false,
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
        sessionStorage.setItem(
          "sessionId",
          JSON.stringify(resp.data.data.sessionId)
        );
        sessionStorage.setItem(
          "distressLevel", 0
        );
        sessionStorage.setItem(
          "hasTraumaticEvent", false
        );
        sessionStorage.removeItem(
          "feelingEmotion"
        );
        //resolve(mockData.tools);
        resolve(resp.data.data.tools);
      })
      .catch((error) => {
        if (error.response) {
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
        } else {
          reject("Network Error");
        }
      });
  });
};
