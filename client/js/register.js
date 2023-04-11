const elForm = document.querySelector(".site-form");
const elUsername = document.querySelector(".input_username");
const elEmail = document.querySelector(".input_email");
const elPassword = document.querySelector(".input_passwod");

elForm.addEventListener("submit", async function (evt) {
  evt.preventDefault();

  const username_value = elUsername.value;
  const email_value = elEmail.value;
  const password_value = elPassword.value;

  await fetch("http://localhost:4001/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username_value,
      email: email_value,
      password: password_value,
    }),
  }).then((response) => response.json())
  .then((data) => alert(data.msg))
  window.location.href = 'http://127.0.0.1:5500/client/login.html';
});
