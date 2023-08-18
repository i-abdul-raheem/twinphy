import { useEffect, useState } from "react";
import { Header } from "../Header";
import { MenuBar } from "../MenuBar";
import { Sidebar } from "../Sidebar";
import { Profile } from "./Profile";
import { getSingleUser } from "../../api";

export const ProfileWrapper = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    getSingleUser().then((res) => {
      setUserData(res);
    });
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
