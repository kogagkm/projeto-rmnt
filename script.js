const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", function () {
        hamburguer.classList.toggle("active");
        navMenu.classList.toggle("active");
    })

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", function () {
        hamburguer.classList.remove("active");
        navMenu.classList.remove("active");
    }))