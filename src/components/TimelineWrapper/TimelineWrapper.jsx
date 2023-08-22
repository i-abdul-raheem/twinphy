import { useEffect, useState } from "react";
import { Header } from "../Header";
// import { Layout } from '../Layout';
import { MenuBar } from "../MenuBar";
import { Sidebar } from "../Sidebar";
import { Timeline } from "./Timeline";
import { getPosts } from "../../api";

export const TimelineWrapper = () => {
  const [timelineData, setTimelineData] = useState([]);

  const fetchPosts = () => {
    const userId = JSON.parse(localStorage.getItem("@twinphy-user"))._id;
  const currentUser = JSON.parse(localStorage.getItem("@twinphy-user")).blocked;
    getPosts()
      .then((res) =>
        setTimelineData(
          res?.data?.data.filter(
            (item) =>
              !item?.reported_by.includes(userId) &&
              !currentUser.some((blockedId) => blockedId === item?.user_id?._id)
          )
        )
      )
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      <Header title={"Timeline"} />
      <Sidebar />
      <Timeline fetchPosts={fetchPosts} timelineData={timelineData} />
      <MenuBar />
    </>
  );
};
