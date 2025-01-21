document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#loginForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Retrieve stored credentials
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    // Get input values
    const email = form.querySelector('input[name="email"]').value;
    const password = form.querySelector('input[name="psw"]').value;

    // Validate credentials
    if (email === storedEmail && password === storedPassword) {
      // Update login status in localStorage
      localStorage.setItem("isLoggedIn", "true");
      alert("Login successful!");
      // Redirect to a dashboard or home page
      window.location.href = "./index.html";
    } else {
      alert("Invalid email or password!");
    }
  });
});
