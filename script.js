function toogleMode() {
  const body = document.body
  body.classList.toggle("light")

  const img = document.querySelector("#profile img")

  body.classList.contains("light")
    ? img.setAttribute("src", "./assets/avatar-light.jpg")
    : img.setAttribute("src", "./assets/avatar.jpg")
}
