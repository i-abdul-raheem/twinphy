import { handlePostLikes } from "../../../api";

export const Likes = ({post_id, likes}) => {
  const user_id = JSON.parse(localStorage.getItem("@twinphy-user"))._id;
  
  return (
    <button style={{ border: 'none' }} className='action-btn bg-primary' onClick={()=>handlePostLikes(post_id,user_id)}>
      <i className='fa-regular fa-heart fill-icon'></i>
      <i className='fa-solid fa-heart fill-icon-2'></i>
      <h6 className='font-14 mb-0 ms-2' id='value1'>
        {likes.length}
      </h6>
    </button>
  );
};
