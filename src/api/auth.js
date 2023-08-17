import axios from "axios";
import config from "./config";
import { debounce } from "lodash";

const url = config.BASE_URL + "/auths";

export const login = (values) => {
  return axios
    .post(url + "/login", values)
    .then((res) => {
      return res?.data;
    })
    .catch((err) => err);
};

export const signup = (values) => {
  return axios
    .post(url, values)
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      return err;
    });
};

export const googleLogin = () => {
  // return axios
  // .get("http://localhost:5000/auth/google")
  //   .then((res) => {
  //     console.log(res);
  //     // return res?.data;
  //   })
  //   .catch((err) => {
  //     return err
  //   });

  return axios.get("http://localhost:5000/profile").then((res) => {
    console.log(res);
  });
};

export const avatarUpload = (values) => {
  return axios
    .post(config.BASE_URL + "/upload", values)
    .then((res) => {
      return res.data?.data?.Location;
    })
    .catch((err) => {
      return err;
    });
};

export const debouncedUserName = debounce((e) => {
  return axios
    .get("http://13.48.59.123:5001/api/users")
    .then((res) => {
      const names = res.data?.data?.userData.map((item) => item?.userName);
      const result = names.includes(e.target.value);
      return result;
    })
    .catch((err) => console.log(err));
}, 300);
