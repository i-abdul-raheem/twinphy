import axios from "axios";
import config from "./config";

const url = config.BASE_URL;

export const handleAddPost = (values) => {
  return config.makeRequest(() => {
    return axios
      .post(`${url}/posts`, values)
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

export const handleGetPosts = () => {
  return config.makeRequest(() => {
    return axios.get(`${url}/posts`).then((res) => {});
  });
};
