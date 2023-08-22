import { useEffect, useState } from "react";
import { Follower, Following } from "../Friends";
import { MyPost } from "../MyPost";
import { getSinglePosts, getSingleUser } from "../../../api";

export const SocialBar = () => {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    getSinglePosts()
      .then((res) => setPostData(res?.data?.data))
      .catch((err) => console.log(err));
  }, []);
  const [tab, setTab] = useState({
    post: true,
    followers: false,
    following: false,
  });

  const handlePost = () => {
    setTab({
      post: true,
      followers: false,
      following: false,
    });
  };

  const handleFollower = () => {
    setTab({
      post: false,
      followers: true,
      following: false,
    });
  };

  const handleFollowing = () => {
    setTab({
      post: false,
      followers: false,
      following: true,
    });
  };

  const userId = JSON.parse(localStorage.getItem("@twinphy-user"));
  console.log(userId);

  useEffect(() => {
    getSingleUser()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="social-bar">
        <ul className="nav" role="tablist">
          <li className="nav-item">
            <button
              className={`nav-link ${tab?.post && "active"}`}
              onClick={handlePost}
            >
              <h4>{postData.length}</h4>
              <span>Post</span>
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${tab?.followers && "active"}`}
              onClick={handleFollower}
            >
              <h4>{userId.followers.length}</h4>
              <span>Follower</span>
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${tab?.following && "active"}`}
              onClick={handleFollowing}
            >
              <h4>{userId.followings.length}</h4>
              <span>Following</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="tab-content" id="tab-tabContent">
        {/* <!-- Tab Content for "Post" --> */}
        {tab?.post && (
          <div className="tab-pane active">
            <MyPost postData={postData} />
          </div>
        )}

        {tab?.followers && (
          <div className="tab-pane active">
            <Follower />
          </div>
        )}
        {tab?.following && (
          <div className="tab-pane active">
            <Following />
          </div>
        )}
      </div>
    </>
  );
};
