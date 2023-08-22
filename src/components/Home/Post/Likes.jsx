import { handlePostLikes } from '../../../api';

export const Likes = ({ post_id, likes, setPostData, index, postData }) => {
  const user_id = JSON.parse(localStorage.getItem('@twinphy-user'))._id;

  const updateLike = (post_id, user_id) => {
    handlePostLikes(post_id, user_id).then((res) => {
      if (res?.message === 'Post liked') {
        const posts = postData;
        posts[index]?.likes.push(user_id);
        setPostData([...posts]);
      } else {
        const posts = postData;
        const filterData = posts[index]?.likes.filter(
          (item) => item.toString() !== user_id
        );
        posts[index].likes = filterData;
        setPostData([...posts]);
      }
    });
  };

  return (
    <button
      style={{ border: 'none' }}
      className='action-btn bg-primary'
      onClick={() => updateLike(post_id, user_id)}
    >
      {!likes.includes(user_id) ? (
        <i className='fa-regular fa-heart fill-icon'></i>
      ) : (
        <i className='fa-solid fa-heart fill-icon'></i>
      )}
      <h6 className='font-14 mb-0 ms-2' id='value1'>
        {likes.length}
      </h6>
    </button>
  );
};
