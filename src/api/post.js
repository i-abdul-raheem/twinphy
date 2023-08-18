import axios from "axios";
import config from "./config";

const url = config.BASE_URL;

export const handleAddPost = (text, mediaUrl) => {
  const id = "64d679342e7340553804ccdf";
  console.log(id);
//   return config.makeRequest(() => {
    console.log(text, mediaUrl);
    return axios
      .post(`${url}/posts/${id}`, {
        text,
        mediaUrl,
      })
      .then((res) => {
        return console.log(res);
      });
//   });
};

export const handleGetPosts = () => {
  return config.makeRequest(() => {
    return axios.get(`${url}/posts`).then((res) => {
      console.log(res,'get');
    });
  });
};
