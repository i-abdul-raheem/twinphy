import { Header } from "./Header";
import { Media } from "./Media";
import { Likes } from "./Likes";
import { Comments } from "./Comments";
import { Share } from "./Share";
import { getPosts } from "../../../api";
import { useEffect, useState } from "react";

export const Post = ({ postData, fetchPosts }) => {

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div id='post-area' className='post-area'>
      {postData.map((item, index) => (
        <div key={index} className='post-card'>
          <Header
            fetchPosts={fetchPosts}
            time={item?.createdAt}
            userData={item?.user_id}
            postId={item?._id}
          />
          <p className='text-black'>{item?.text}</p>
          <div className='dz-media'>
            <Media src={item?.mediaUrls} />
            <div className='post-meta-btn'>
              <ul>
                <li>
                  <Likes />
                </li>
                <li>
                  <Comments />
                </li>
                <li>
                  <Share />
                </li>

                {/* <!-- Dynamically Added Elements --> */}
                <div id='dynamicElements'>
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
