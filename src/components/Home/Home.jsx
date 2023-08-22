import { getAllUser, getPosts } from "../../api";
import { ShareExplore } from "../ExploreWraper/ShareExplore";
import { Post } from "./Post";
import { StorySection } from "./StorySection";
import { useEffect, useState } from "react";

export const Home = () => {
  const [postData, setPostData] = useState([]);
  const [userData, setUserData] = useState([]);

  const fetchPosts = () => {
    let userId;
    if (
      localStorage.getItem("@twinphy-user") &&
      localStorage.getItem("@twinphy-user") !== "undefined"
    )
      userId = JSON.parse(localStorage.getItem("@twinphy-user"))._id;

    const currentUser = JSON.parse(
      localStorage.getItem("@twinphy-user")
    ).blocked;
    getPosts()
      .then((res) => {
        setPostData(
          res?.data?.data.filter(
            (item) =>
              !item?.reported_by.includes(userId) &&
              !currentUser.some((blockedId) => blockedId === item?.user_id?._id)
          )
        );
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchPosts();

    getAllUser()
      .then((res) => setUserData(res?.data?.data?.userData))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="page-content">
      <div className="content-inner pt-0">
        <div className="container bottom-content">
          <StorySection />
          <Post postData={postData} fetchPosts={fetchPosts} />
          <ShareExplore userData={userData} />
        </div>
      </div>
    </div>
  );
};
