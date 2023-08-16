const caption = document.getElementById("caption");
const file = document.getElementById("file-input");
const postBtn = document.getElementById("post-btn");
let captionContent;
let fileContent;
let username = document.getElementById("name");
const pic = document.getElementById("pic");

const previewContainer = document.getElementById("preview-container");
const previewImage = document.getElementById("preview-image");
const previewVideo = document.getElementById("preview-video");

const getUser = async () => {
  const res = await fetch("/user");
  const user = await res.json();

  username.textContent = user.user.google.name;
  pic.src = user.user.google.pic;
};

document.addEventListener("DOMContentLoaded", () => {
  getUser();
});

caption.addEventListener("change", (e) => {
  captionContent = e.target.value;
});

file.addEventListener("change", (e) => {
  fileContent = e.target.files[0]; // Assuming you want to upload only one file
  previewFile(fileContent);
});

const previewFile = (file) => {
  const reader = new FileReader();
  reader.onload = () => {
    const fileData = reader.result;
    if (file.type.startsWith("image/")) {
      previewImage.src = fileData;
      previewImage.style.display = "block";
      previewVideo.style.display = "none";
    } else if (file.type.startsWith("video/")) {
      previewVideo.src = fileData;
      previewVideo.style.display = "block";
      previewImage.style.display = "none";
    }
    previewContainer.style.display = "block";
  };
  reader.readAsDataURL(file);
};

postBtn.addEventListener("click", async () => {
  try {
    if (captionContent && fileContent) {
      // Send the file to /post/upload endpoint
      const formData = new FormData();
      formData.append("file", fileContent);
      const uploadResponse = await fetch("/post/upload", {
        method: "POST",
        body: formData,
      });

      if (uploadResponse.ok) {
        const { url } = await uploadResponse.json();

        // Send the data to the server
        const createResponse = await fetch("/post/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ caption: captionContent, file: url }),
        });

        if (createResponse.ok) {
          // Request was successful, redirect to index.html
          window.location.href = "index.html";
        } else {
          // Request failed, show error message
          throw new Error("Failed to create post");
        }
      } else {
        throw new Error("Failed to upload file");
      }
    }
  } catch (e) {
    alert(`There was an error: ${e.message}`);
  }
});
