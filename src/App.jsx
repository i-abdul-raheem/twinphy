import { Route, Routes, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  Chat,
  Comment,
  CreatePost,
  Explore,
  HomePage,
  Message,
  Notification,
  Profile,
  Timeline,
} from "./pages";
import { Forget, Login, Signup } from "./components";
import { signup, login } from "../src/api/auth";
import { currentLocation, generateRandomPassword } from "../src/utils";

export default function App() {
  const [islogin, setIsLogin] = useState(localStorage.getItem("@twinphy-token") || null);
  const createUser = async () => {
    const userDataCookie = document.cookie
      .split(";")
      .find((cookie) => cookie.trim().startsWith("userData="));

    if (userDataCookie) {
      const cookieName = userDataCookie.split("=")[0].trim();
      const decodedData = decodeURIComponent(userDataCookie.split("=")[1]);
      const userData = JSON.parse(decodedData);
      currentLocation()
        .then((res) => {
         
          const randomPassword = generateRandomPassword();
          signup({
            firstName: userData?.name?.givenName,
            lastName: userData?.name?.familyName,
            userName: userData?.emails[0].value,
            email: userData?.emails[0].value,
            password: randomPassword,
            avatar: userData?.photos[0].value,
            gender: "male",
            dateOfBirth: "1990-01-01",
            city: res.city,
            country: res.country,
          })
            .then((res) => {
              
              if (res.response) {
                if (
                  res.response?.data?.message ===
                  "User with same email already exist"
                ) {
                  
                  login({
                    email: userData?.emails[0].value,
                    login_type: "google",
                  })
                    .then((res) => {
                      localStorage.setItem("@twinphy-token", res?.data?.token);
                      localStorage.setItem(
                        "@twinphy-user",
                        JSON.stringify(res?.data?.user)
                      );
                    })
                    .catch((err) => console.log(err));
                }
              }
              localStorage.setItem("@twinphy-token", res?.data?.token);
              localStorage.setItem(
                "@twinphy-user",
                JSON.stringify(res?.data?.user)
              );
            })
            .catch((err) => {
              console.log(err, "err");
            });
        })
        .catch((err) => console.log(err));
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
  };

  useEffect(() => {
    createUser();
  }, []);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("@twinphy-token") == null) {
      setIsLogin(false);
      navigate("/login");
    } else {
      setIsLogin(true);
    }
  }, [localStorage]);
  
  return islogin ? (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/message/:id" element={<Message />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/notifications" element={<Notification />} />
      <Route path="/comment" element={<Comment />} />
      <Route path="/create-post" element={<CreatePost />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forget" element={<Forget />} />
    </Routes>
  );
}
