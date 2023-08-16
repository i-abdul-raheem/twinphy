import axios from 'axios';
import config from './config';

const userInfo = JSON.parse(localStorage.getItem('@twinphy-user'));
const url = config.BASE_URL + '/chat';
export const getAllChats = () => {
  return config.makeRequest(() => {
    return axios
      .get(url + `/list?userId=${userInfo?._id?.$oid || userInfo?._id}`)
      .then((res) => {
        return res?.data?.data;
      })
      .catch(() => []);
  });
};
export const fetchMessages = (id) => {
  return config.makeRequest(() => {
    return axios
      .get(url + `?sender=${userInfo?._id?.$oid || userInfo?._id}&receiver=${id}`)
      .then((res) => {
        return res?.data?.data;
      })
      .catch(() => []);
  });
};
export const sendMessage = (receiver, text) => {
  return config.makeRequest(() => {
    return axios
      .post(url, { sender: userInfo?._id?.$oid || userInfo?._id, receiver, text })
      .then((res) => {
        return res?.data;
      })
      .catch(() => null);
  });
};
export const getLastMessage = (receiver) => {
  return config.makeRequest(() => {
    return axios
      .get(url + `/last?sender=${userInfo?._id?.$oid || userInfo?._id}&receiver=${receiver}`)
      .then((res) => {
        return res?.data?.data[0];
      })
      .catch(() => null);
  });
};
