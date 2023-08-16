const username=document.getElementById("username")
const fullname= document.getElementById("fullname");
const posts= document.getElementById("posts");
const followers= document.getElementById("followers");
const following= document.getElementById("following")
const picture= document.getElementById("pic")
const getUser= async()=>{
    const res=await  fetch("/user")
    const user= await res.json()
  
alert(JSON.stringify(user.user.google))
     username.textContent="@"+user.user.google.name;
    fullname.textContent=user.user.google.name;
    posts.textContent=user.user.posts.length;
    followers.textContent=user.user.followers.length;
    following.textContent=user.user.following.length;
    picture.src=user.user.google.pic;

  
}
document.addEventListener("DOMContentLoaded", () => {
    getUser()
  });
  


   
   
    
