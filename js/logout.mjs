const signoutButton = document.querySelector(".signout-button");

signoutButton.addEventListener("click", logOut);

/**
 * Allows user to log out, which removes the token by clearing LocalStorage
 */
function logOut() {
  localStorage.removeItem("token");
  localStorage.removeItem("name");
  window.location = "login.html";
}
