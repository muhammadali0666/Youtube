const elForm = document.querySelector(".site-form")
const elEmail = document.querySelector(".email")
const elPassword = document.querySelector(".password")

elForm.addEventListener("submit", async function(e) {
  e.preventDefault()

  const email_val = elEmail.value
  const password_val = elPassword.value

  await fetch("http://localhost:4001/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email_val,
      password: password_val,
    }),
  }).then((response) => response.json())
  .then((data) =>  localStorage.setItem("token", data.token))

  const localGet = localStorage.getItem("token")

  
  if(localGet) {
    return window.location.href = 'http://127.0.0.1:5500/client/index.html';
  }
  else{
    return window.location.href = "http://127.0.0.1:5500/client/register.html"
  }
})
