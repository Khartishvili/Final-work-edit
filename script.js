//burger bar//
let navigationblock = document.getElementById("burger-bar")
let burgerblock = document.getElementById("burgerbar")

burgerblock.addEventListener('click', function() {
    navigationblock.classList.toggle("active");
})