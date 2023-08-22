import { Header } from "./Header";
import { Media } from "./Media";
import { Likes } from "./Likes";
import { Comments } from "./Comments";
import axios from "axios";
import { getPosts } from "../../../api";
import { useEffect, useState } from "react";

export const Post = () => {
  const [postData, setPostData] = useState([]);

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
  }, []);
  return (
    <div id="post-area" className="post-area">
      {postData.map((item, index) => (
        <div key={index} className="post-card">
          <Header
            fetchPosts={fetchPosts}
            time={item?.createdAt}
            userData={item?.user_id}
            postId={item?._id}
          />
          <p className="text-black">{item?.text}</p>
          <div className="dz-media">
            <Media src={item?.mediaUrls} />
            <div className="post-meta-btn">
              <ul>
                <li>
                  <Likes />
                </li>
                <li>
                  <Comments />
                </li>

                {/* <!-- Dynamically Added Elements --> */}
                <div id="dynamicElements">
                  {/* <!-- Dynamically added elements will be inserted here --> */}
                </div>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
