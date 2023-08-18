import { useEffect, useState } from "react";
import { getSingleUser } from "../../api";
import config from "../../api/config";

export const CreatePost = ({setText}) => {
   const [userName , setUserName]=useState('');
   const handleTextChange = (e) => {
    setText(e.target.value);  };
     useEffect(()=>{
      getSingleUser().then((res)=> setUserName(res)).catch((err)=>console.log(err))
     },[])
      
  return (
    <div className='page-content'>
      <div className='container'>
        <div className='post-profile'>
          <div className='left-content'>
            <div className='media media-50 rounded-circle'>
              <img id='pic' src={userName?.profileImage} alt='profile' />
            </div>
            <div className='ms-2'>
              <h6 id='name' className='mb-1'>
                {userName?.firstName + " " + userName?.lastName}
              </h6>
            </div>
          </div>
        </div>
        <div className='post-content-area'>
          <textarea
            id='caption'
            className='form-control'
            placeholder="What's on your mind?"
            onChange={handleTextChange}
          ></textarea>
        </div>
      </div>
    </div>
  );
};
