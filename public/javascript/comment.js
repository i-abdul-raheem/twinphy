 
 let commentContent;
 const commentsContainer= document.getElementById("comments-list");
 const commentInput= document.getElementById("comment-input");
 const sendBtn= document.getElementById("send-comment")
 const avatar= document.getElementById("avatar")
 const userImage= document.getElementById("user-image")
 const fetchUser= async()=>{
const res= await fetch("/user");
const data=await res.json();
userImage.src=data.user.google.pic;
 }
 async function newComment(commentData) {
  const res= await fetch(`/post/owner/${commentData.commenterId}`);
  const {google, avatar, followers, following,posts}= await res.json()

  const { commenterId, comment, createdAt } = commentData;

  // Create the <li> element
  const liElement = document.createElement("li");
  liElement.classList.add("parent-list");

  // Create the <div> with class "list-content"
  const listContentDiv = document.createElement("div");
  listContentDiv.classList.add("list-content");

  // Create the <img> element
  const imgElement = document.createElement("img");
  imgElement.src = google.pic?google.pic:"/"

  imgElement.alt = "/";

  // Create the <div> for name and comment
  const nameCommentDiv = document.createElement("div");

  // Create the <h6> element for commenter name
  const nameElement = document.createElement("h6");
  nameElement.classList.add("font-14", "mb-1");
  nameElement.textContent = google.name

  // Create the <p> element for the comment content
  const commentElement = document.createElement("p");
  commentElement.classList.add("mb-2");
  commentElement.textContent = comment;

  // Create the <ul> element with class "bottom-item"
  const ulElement = document.createElement("ul");
  ulElement.classList.add("bottom-item");

  




  // Append the <h6>, <p>, and <ul> elements to the <div> for name and comment
  nameCommentDiv.appendChild(nameElement);
  nameCommentDiv.appendChild(commentElement);
  nameCommentDiv.appendChild(ulElement);

  // Append the <img> and <div> for name and comment to the <div> with class "list-content"
  listContentDiv.appendChild(imgElement);
  listContentDiv.appendChild(nameCommentDiv);

  // Create the <div> with class "ms-auto"
  const msAutoDiv = document.createElement("div");
  msAutoDiv.classList.add("ms-auto");
  
  // Create the <div> with class "like-button"
  




  // Append the <div> with class "list-content" and <div> with class "ms-auto" to the <li> element
  liElement.appendChild(listContentDiv);
  liElement.appendChild(msAutoDiv);

  // Get the comments container element by its ID
  const commentsContainer = document.getElementById("comments-list");

  // Insert the new comment as the first child of the comments container
  commentsContainer.insertBefore(liElement, commentsContainer.firstChild);
}

async function fetchComments(postId) {
  const commentsContainer = document.getElementById("comments-list");
  commentsContainer.innerHTML = '';
  try {
    const response = await fetch(`/post/comments/${postId}`);
    const comments = await response.json();

    // Reverse the order of comments before processing them
    comments.reverse();

    comments.forEach(async (comment) => {
      const res= await fetch(`/post/owner/${comment.commenterId}`);
      const {google, avatar, followers, following,posts}= await res.json()
     
      const commentHTML = `
        <li className="parent-list">
          <div className="list-content">
            <img src="${google.pic}" alt="/">
            <div>
              <h6 className="font-14 mb-1">${google.name}</h6>
              <p className="mb-2">${comment.comment}</p>
              
            </div>
          </div>
  
        </li>
      `;
      commentsContainer.insertAdjacentHTML("beforeend", commentHTML);
    });
  } catch (error) {
    
    console.error("Error fetching comments:", error);
  }
}



let socket;
const queryString = window.location.search;

// Create a new URLSearchParams object with the query string
const params = new URLSearchParams(queryString);
const postId=params.get("post-id")
window.onload= async()=>{
  socket=io("/");
 await  fetchComments(postId)
await fetchUser()
 socket.on("newComment", async(data)=>{

 await newComment(data)
})

}




commentInput.addEventListener("change", (e) => {
    commentContent = e.target.value;
  });

  commentInput.addEventListener("keydown", async (e) => {
    
    try {
      if (e.key === "Enter") {

       
        if (commentContent) {
          const response = await fetch(`/post/comment/${postId}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ comment: commentContent, postId }),
          });
          commentInput.value = "";
         
        }
      }
    } catch (e) {
      // Handle the error appropriately
    }
  });
  
  sendBtn.addEventListener("click", async()=>{
    try{
        if(commentContent){
 
      const response = await fetch(`/post/comment/${postId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({comment:commentContent,postId}),
      });  
      commentInput.value=""
        }

      
    }
    
    catch(e){

    }
  })
