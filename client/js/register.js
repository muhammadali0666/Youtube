const elForm = document.querySelector(".site-form");
const elUsername = document.querySelector(".input_username");
const elEmail = document.querySelector(".input_email");
const elPassword = document.querySelector(".input_passwod");

elForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const username_value = elUsername.value;
  const email_value = elEmail.value;
  const password_value = elPassword.value;

  console.log(username_value);
  console.log(email_value);
  console.log(password_value);
  await fetch("http://localhost:4001/users/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username_value,
      email: email_value,
      password: password_value,
    }),
  }).then((response) => response.json());
  // .then(response => console.log(JSON.stringify(response)))
});
