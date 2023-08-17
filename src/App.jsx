import { Route, Routes } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Chat,
  Comment,
  CreatePost,
  HomePage,
  Message,
  Notification,
  Profile,
  Timeline,
} from "./pages";
import { Forget, Login, Signup } from "./components";
import { signup } from "../src/api/auth";

export default function App() {
  const [values, setValues] = useState({
    city: "",
    country: "",
  });
  useEffect(() => {
    axios
      .get("https://api.ipify.org/?format=json")
      .then((res) => {
        axios
          .get(`http://ip-api.com/json/${res.data.ip}`)
          .then((res) => {
            setValues({
              ...values,
              city: res.data?.city,
              country: res.data?.country,
            });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const userDataCookie = document.cookie
      .split(";")
      .find((cookie) => cookie.trim().startsWith("userData="));

    if (userDataCookie) {
      const decodedData = decodeURIComponent(userDataCookie.split("=")[1]);
      const userData = JSON.parse(decodedData);
      console.log(userData);

      signup({
        firstName: userData?.name?.givenName,
        lastName: userData?.name?.familyName,
        userName: userData?.name?.givenName + userData?.name?.familyName,
        email: userData?.emails[0].value,
        password: "12345678",
        avatar: userData?.photos[0].value,
        gender: "male",
        dateOfBirth: "1990-01-01",
        city: values.city,
        country: values.country,
      });
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/message/:id" element={<Message />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/notifications" element={<Notification />} />
      <Route path="/comment" element={<Comment />} />
      <Route path="/create-post" element={<CreatePost />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forget" element={<Forget />} />
    </Routes>
  );
}
