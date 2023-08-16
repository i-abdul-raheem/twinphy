
const socket=io("/");

const form = document.getElementById('googleForm');

form.addEventListener('submit', async (event) => {
   // Prevent the default form submission behavior

  const url = form.action;
  const method = form.method;

  try {
    const response = await fetch(url, { method });
    alert(JSON.stringify(response))
    if (response.redirected) {
      window.location.href = response.url; // Redirect to the server's response URL
    } else {
      // Handle the server's response data here
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.error('Error:', error);
  }
});
