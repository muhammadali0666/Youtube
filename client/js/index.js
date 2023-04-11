const elHome = document.querySelector(".home");
const elProfile = document.querySelector(".profile");
const elUser = document.querySelector(".user")

window.addEventListener("click", async function (evt) {
  evt.preventDefault();

  const localGet = localStorage.getItem("token");
  if (!localGet) {
    return (window.location.href = "http://127.0.0.1:5500/client/login.html");
  }
});

fetch("http://localhost:4001/users/list")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((element) => {
      const markup = `
      <div style="display: flex; margin-top: 15px;">
      <img style="margin-right: 10px;" src="https://cdn-icons-png.flaticon.com/512/146/146031.png" alt="channel-icon"
      width="30px" height="30px">
      <p style="margin-top: 5px; magin-left: 20px;">${element.username}</p>
      </div>
      `;

      document.querySelector(".result").insertAdjacentHTML("beforeend", markup);
    });
  });

  elUser.addEventListener("click", async function(evt) {
    evt.preventDefault()

    window.location.href = "http://127.0.0.1:5500/client/admin.html";
  })
