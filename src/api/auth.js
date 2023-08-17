import axios from "axios";
import config from "./config";

const url = config.BASE_URL + "/auths";

export const login = (email, password) => {
  return axios
    .post(url + "/login", { email, password })
    .then((res) => {
      return res?.data;
    })
    .catch(() => null);
};

export const signup = (values) => {
  return axios
  .post(url, {
    firstName: values.firstName,
    lastName: values.lastName,
    userName: values.userName,
    avatar: values.avatar,
    email: values.email,
    password: values.password,
    gender: values.gender,
    dateOfBirth: values.dateOfBirth,
    city: values.city,
    country: values.country,
  })
    .then((res) => {
      console.log(res?.data,"func");
      return res?.data;
    })
    .catch((err) => {
      console.log(err);
      // return null;
      return err
    });
};
