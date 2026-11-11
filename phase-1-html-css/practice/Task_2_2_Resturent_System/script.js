var menuButton = document.querySelector('.menu-toggle');
var menu = document.querySelector('.nav-links');

menuButton.onclick = function () {
    menu.classList.toggle('open');
};

var arrows = document.querySelectorAll('.arrow-btn');
var foodCards = document.querySelector('.menu-items');

arrows[0].onclick = function () {
    foodCards.scrollLeft -= 326;
};

arrows[1].onclick = function () {
    foodCards.scrollLeft += 326;
};
