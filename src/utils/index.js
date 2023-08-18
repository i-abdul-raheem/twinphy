import axios from "axios";

export const toJson = (formData) => {
  const obj = {};
  formData.forEach(function (value, key) {
    obj[key] = value;
  });
  return obj;
};

export const currentLocation = () => {
  const obj = { city: "", country: "" };
  return axios
    .get("https://api.ipify.org/?format=json")
    .then((res) => {
      return axios
        .get(`http://ip-api.com/json/${res.data.ip}`)
        .then((res) => {
          obj.city = res.data?.city;
          obj.country = res.data?.country;
          return obj;
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

export function generateRandomPassword(length = 12) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}

export function generateRandomRoomId(length = 6) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let roomId = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    roomId += characters.charAt(randomIndex);
  }

  return roomId;
}
