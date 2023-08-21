import axios from 'axios';
const GOOGLE_URL=process.env.REACT_APP_ENV === 'local'
? 'http://localhost:5000'
: 'http://13.48.59.123:5001';

const BASE_URL =
  process.env.REACT_APP_ENV === "local"
  ? "https://localhost/api"
  : "http://13.48.59.123:5001/api";
const makeRequest = async (fn) => {
  return axios
    .get(BASE_URL + "/auths", {
      headers: {
        Authorization: `JWT ${localStorage.getItem("@twinphy-token")}`,
      },
    })
    .then((res) => {
      localStorage.setItem("@twinphy-token", res?.data?.data?.token);
      return fn();
    })
    .catch(() => fn());
};

const config = {
  GOOGLE_URL,
  BASE_URL,
  makeRequest,
};

export default config;
