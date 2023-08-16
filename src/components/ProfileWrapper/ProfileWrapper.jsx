import { useEffect, useState } from "react";
import { Header } from "../Header";
import { MenuBar } from "../MenuBar";
import { Sidebar } from "../Sidebar";
import { Profile } from "./Profile";
import axios from "axios";

export const ProfileWrapper = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users?id=64d679342e7340553804ccdf")
      .then((res) => {
        setUserData({ ...res?.data?.data?.userData[0] });
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Header title={"Profile"} />
      <Sidebar />
      <Profile userData={userData} setUserData={setUserData} />
      <MenuBar />
    </>
  );
};
