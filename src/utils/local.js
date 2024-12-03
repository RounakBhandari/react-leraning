// utils for local storage

// save user in local storage
export const setUserToLocal = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

// fetch user from local storage
export const getUserFromLocal = () => {
  const data = localStorage.getItem("user");
  return data === null ? [] : JSON.parse(data);
};
