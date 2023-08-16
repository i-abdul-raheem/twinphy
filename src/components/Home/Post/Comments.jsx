import { Link } from "react-router-dom";

export const Comments = () => {
  return (
    <Link to='/comment' className='action-btn bg-secondary'>
      <i className='fa-solid fa-comment fill-icon'></i>
      <h6 className='font-14 mb-0 ms-2'>150</h6>
    </Link>
  );
};
