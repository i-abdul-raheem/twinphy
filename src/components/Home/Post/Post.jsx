import { Header } from "./Header";
import { Media } from "./Media";
import { Likes } from "./Likes";
import { Comments } from "./Comments";
import { Share } from "./Share";

export const Post = ({ postData, fetchPosts }) => {
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
                  <Likes post_id={item?._id} likes={item?.likes}/>
                </li>
                <li>
                  <Comments />
                </li>
                <li>
                  <Share />
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
