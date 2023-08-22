import axios from "axios";
import config from "./config";

const url = config.BASE_URL + "/users";

export const getAllUser = () => {
  return config.makeRequest(() => {
    return axios
      .get(url)
      .then((res) => res)
      .catch((err) => console.log(err));
  });
};

export const getSingleUser = () => {
  return config.makeRequest(() => {
    return JSON.parse(localStorage.getItem("@twinphy-user"));
  });
};

export const updateUser = (firstName, lastName) => {
  return config.makeRequest(() => {
    const userId = JSON.parse(localStorage.getItem("@twinphy-user"))._id;
    const token = localStorage.getItem("@twinphy-token");

    const headers = {
      Authorization: `JWT ${token}`,
    };

    const data = {
      firstName,
      lastName,
    };

    return axios
      .put(url + `/${userId}`, data, { headers })
      .then((res) => res?.data?.data)
      .catch((err) => console.log(err));
  });
};

export const blockUser=(block_user_id)=>{
  return config.makeRequest(() => {
    const userId = JSON.parse(localStorage.getItem("@twinphy-user"))._id;
    const token = localStorage.getItem("@twinphy-token");

    const headers = {
      Authorization: `JWT ${token}`,
    };

    const data = {
      block_user_id
    };

    return axios
      .patch(url + `/block/${userId}`, data, { headers })
      .then((res) => res?.data)
      .catch((err) => {
        return err;
      });
  });
}

export const followUser=(follow_user_id)=>{
  return config.makeRequest(() => {
    const userId = JSON.parse(localStorage.getItem("@twinphy-user"))._id;
    const token = localStorage.getItem("@twinphy-token");

    const headers = {
      Authorization: `JWT ${token}`,
    };

    const data = {
      follow_user_id
    };

    return axios
      .patch(url + `/follow/${userId}`, data, { headers })
      .then((res) => res?.data)
      .catch((err) => {
        return err;
      });
  });
}
