import axios from "axios";
import config from "./config";

const userInfo = JSON.parse(localStorage.getItem("@twinphy-user"));
const url = config.BASE_URL + "/users";

export const getSingleUser = () => {
  return config.makeRequest(() => {
    return JSON.parse(localStorage.getItem("@twinphy-user"));
      })
};

export const updateUser = (firstName, lastName) => {
  return config.makeRequest(() => {
    return axios
      .put(url + `/${JSON.parse(localStorage.getItem("@twinphy-user"))._id}`, {
        firstName: firstName,
        lastName: lastName,
      })
      .then((res) => res?.data?.data)
      .catch((err) => console.log(err));
  });
};
