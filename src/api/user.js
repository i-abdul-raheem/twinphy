import axios from 'axios';
import config from './config';

const userInfo = JSON.parse(localStorage.getItem('@twinphy-user'));
const url = config.BASE_URL + '/users';

export const getSingleUser = () => {
    return config.makeRequest(() => {
      return axios
        .get(url + "?id=64d679342e7340553804ccdf")
        .then((res) => {
          return res?.data?.data?.userData[0];
        })
        .catch((err) => console.log(err));
    });
  };