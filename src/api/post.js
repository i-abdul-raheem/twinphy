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

export const handleAddPost = (text, mediaUrl) => {
  const id = "64d679342e7340553804ccdf";

  console.log(text, mediaUrl);
  return axios
    .post(`${url}/${id}`, {
      text,
      mediaUrl,
    })
    .then((res) => {
      return console.log(res);
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
