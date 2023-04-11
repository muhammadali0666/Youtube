const elLogout = document.querySelector(".logout")
const elYoutube = document.querySelector(".youtube")


window.addEventListener("click", async function(evt) {
  evt.preventDefault()
  const localGet = localStorage.getItem("token")

  if(!localGet) {
    return window.location.href = "http://127.0.0.1:5500/client/login.html"
  }
})

elLogout.addEventListener("click", async function(evt) {
  evt.preventDefault()

  localStorage.removeItem("token")
  window.location.href = "http://127.0.0.1:5500/client/register.html"
})

elYoutube.addEventListener("click", async function(e) {
  e.preventDefault()
  window.location.href = "http://127.0.0.1:5500/client/index.html"

})