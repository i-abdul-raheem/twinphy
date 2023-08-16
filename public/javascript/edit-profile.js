const image = document.getElementById("avatar")
const profileChange= document.getElementById("profile");
const user=document.getElementById("username");
const website=document.getElementById("website")
const bio= document.getElementById("bio")
const btn= document.getElementById("btn")
let fileContent;
let nameContent;
let websiteContent;
let bioContent;

bio.addEventListener("change", (e) => {
    bioContent = e.target.value;
  });
  website.addEventListener("change",(e)=>{
    websiteContent=e.target.value
  });
  user.addEventListener("change",(e)=>{
    nameContent=e.target.value
  })
const getUser= async()=>{
    alert("message")
    const res=await  fetch("/user")
    const user= await res.json()

alert(user.user.google.pic)
image.src=user.user.google.pic
}
profileChange.addEventListener("change", (e) => {
    fileContent = e.target.files[0]; // Assuming you want to upload only one file
});

document.addEventListener("DOMContentLoaded",async () => {
    alert("heyyy")

     await getUser()
  });
  

btn.addEventListener("click",async(e)=>{
  e.preventDefault()
  if(fileContent){
    
  
  const formData = new FormData();

  formData.append("file", fileContent);
  const uploadResponse = await fetch("/post/upload", {
    method: "POST",
    body: formData,
  });

    const { url } = await uploadResponse.json();
    alert(nameContent)
    const createResponse = await fetch("/user/edit-profile", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({'google.name':nameContent,'google.pic':url,website:websiteContent,bio:bioContent}),
    });
  
    if (createResponse.ok) {
      // Request was successful, redirect to index.html
      window.location.href = "index.html";
    } else {
      // Request failed, show error message
      throw new Error("Failed to create post");
    }
  }
  else{
    const createResponse = await fetch("/user/edit-profile", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({'google.name':nameContent,website:websiteContent,bio:bioContent}),
    });
  
    if (createResponse.ok) {
      // Request was successful, redirect to index.html
      window.location.href = "index.html";
    } else {
      // Request failed, show error message
      throw new Error("Failed to create post");
    } 
  }
})
   
   
    
