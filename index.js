// Naviagtion bar
const header = document.getElementById('header')
function lagNav() {
  const headerElementer=
  `<div class ="main_navbar" id="navigationbar">
      <a href=""frontpage.html"><img src="../images/logo.png" class="logo" alt="logo"></a>
      <ul>
        <li><a href="menu.html"> Meny </a></li>
        <li><a href="openinghours.html"> Åpningstider </a></li>
        <li><a href="information.html"> Informasjon </a></li>
        <li><a href="frontpage.html"> Forside </a></li>
      </ul>
      <a class="burger" href="javascript:void(0)" onclick="changeNavbar()">&#9776;</a>
  </div>`

  return headerElementer
}

header.innerHTML = lagNav();

//When the burger are pressed, a drop-down menu will show.
function changeNavbar() {
  const header = document.getElementById("navigationbar")
  console.log("heiii");

  if (header.className === "main_navbar") {
    header.className += " responsive"
  } else {
    header.className = "main_navbar"
  }
}


// Automatisk slideshow av 5 ulike bilder på forsiden av nettsiden. Hvert bilde vises i 5 sek.
let images = 0

function slideshow() {
  let count
  let slides = document.getElementsByClassName("front_images")
  for (let count = 0; count < slides.length; count++) {
    slides[count].style.display = "none"
  }

  images++
  if (images > slides.length) {images = 1}
  slides[images-1].style.display = "block"

  setTimeout(slideshow, 5000)
}

slideshow()
