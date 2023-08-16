
function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}

var profileInput = document.getElementById("profile");
var photoImage = document.getElementById("photo");

profileInput.addEventListener("change", function () {
  var file = profileInput.files[0];

  convertToBase64(file)
    .then(function (base64Data) {
      console.log(base64Data)
      photoImage.src = base64Data;
    })
    .catch(function (error) {
      console.log(error);
    });
});
const form = document.getElementById("profileForm");
const submitButton = document.getElementById("tick-button");

submitButton.addEventListener("click", () => {
  // Create a new FormData object
  const formData = new FormData(form);

  // Get the form values
  const username = formData.get("username");
  const website = formData.get("website");
  const bio = formData.get("bio");
 
  const data = {
    username,
    website,
    bio
  }

fetch("/editprofile", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
  headers: { "Content-type": "application/json; charset=UTF-8" },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // Handle the response data
    window.location.href = "index.html";
  })
  .catch((error) => {
    console.error("Error:", error); // Handle any errors
  });

  form.reset();
});
