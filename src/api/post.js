import axios from "axios";
import config from "./config";

const url = config.BASE_URL + "/posts";

export const getSinglePosts = () => {
  return config.makeRequest(() => {
    return axios
      .get(`${url}/${JSON.parse(localStorage.getItem("@twinphy-user"))._id}`)
      .then((res) => res)
      .catch((err) => console.log(err));
  });
};

export const handleAddPost = (values) => {
  return config.makeRequest(() => {
    return axios
      .post(url, values)
      .then((res) => {
        console.log("Response:", res.data);
        return res.data;
      })
      .catch((error) => {
        console.error("Error:", error);
        throw error;
      });
  });
};

export const getPosts = () => {
  return config.makeRequest(() => {
    return axios
      .get(url)
      .then((res) => res)
      .catch((err) => console.log(err));
  });
};
