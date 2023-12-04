let editorBnt = document.getElementById("editor-btn");
let authForm = document.getElementById("auth");
let closeForm = document.getElementById("close");
let editorModeIsActive = false;

closeForm.addEventListener("click", () => {
  authForm.classList.add("form-close");
});

editorBnt.addEventListener("click", () => {
  authForm.classList.remove("form-close");
});

let userInput = document.getElementById("userName");
let userPassword = document.getElementById("userPassword");
let loginBtn = document.getElementById("login-btn");

//  for developement

require("dotenv").config();

const { ADMIN_USERNAME, ADMIN_PASSWORD } = process.env;

loginBtn.addEventListener("click", () => {
  const enteredUsername = userInput.value;
  const enteredPassword = userPassword.value;

  if (
    enteredUsername === ADMIN_USERNAME &&
    enteredPassword === ADMIN_PASSWORD
  ) {
    alert("Welcome🎉 Prince-coder10");
    authForm.classList.add("form-close");
    editorModeIsActive = true;
  } else {
    editorModeIsActive = false;
    alert("Invalid Credentials");
    authForm.classList.remove("form-close");
  }
});
