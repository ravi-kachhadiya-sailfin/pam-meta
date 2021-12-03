export const getUserInfo = (propertyName) => {
  return (JSON.parse(localStorage.getItem("user")) && localStorage.getItem('token'))
    ? JSON.parse(localStorage.getItem("user"))[propertyName]
    : "Login";
};
