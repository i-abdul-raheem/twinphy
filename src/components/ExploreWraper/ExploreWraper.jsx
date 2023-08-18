import { useEffect, useState } from "react";
import { getAllUser, getPosts } from "../../api";
import { ExploreTimeline } from "./ExploreTimeline";
import { ShareExplore } from "./ShareExplore";
import { Header } from "../Header";

export const ExploreWraper = () => {
  const [exploreData, setExploreData] = useState([]);
  const [userData, setUserData] = useState([]);


  useEffect(() => {
    getPosts()
      .then((res) => setExploreData(res?.data?.data))
      .catch((err) => console.log(err));
    getAllUser()
      .then((res) => setUserData(res?.data?.data?.userData))
      .catch((err) => console.log(err));
  }, []);

  console.log(userData, "userData")
  return (
    <>
      <Header title="Explore" />

      <ExploreTimeline exploreData={exploreData} />

      <ShareExplore userData={userData}/>
    </>
  );
};
