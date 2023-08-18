import { useEffect, useState } from "react";
import { Header } from "../Header";
// import { Layout } from '../Layout';
import { MenuBar } from "../MenuBar";
import { Sidebar } from "../Sidebar";
import { Timeline } from "./Timeline";
import { getPosts } from "../../api";

export const TimelineWrapper = () => {

  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    getPosts()
      .then((res) => setTimelineData(res?.data?.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Header title={"Timeline"} />
      <Sidebar />
      <Timeline timelineData={timelineData}/>
      <MenuBar />
    </>
  );
};
